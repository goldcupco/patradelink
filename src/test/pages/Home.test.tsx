import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../utils/test-utils';
import { Home } from '../../pages/Home';
import { tradespeople } from '../../data/tradespeople';

vi.mock('../../data/tradespeople', () => ({
  tradespeople: [
    {
      id: '1',
      name: 'John Smith',
      trade: 'Electrician',
      location: 'Philadelphia',
      county: 'Philadelphia',
      zipCode: '19019',
      rating: 4.8,
      reviewCount: 127,
      reviews: [],
      yearsExperience: 15,
      specialties: ['Residential'],
      phone: '123-456-7890',
      email: 'john@example.com',
      available: true,
      imageUrl: 'test.jpg',
      priceRange: '$$',
      responseTime: '1 hour'
    }
  ]
}));

describe('Home', () => {
  it('renders search bar and filters', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/Search for electricians/i)).toBeInTheDocument();
    expect(screen.getByText('Filters')).toBeInTheDocument();
  });

  it('filters tradespeople based on search term', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText(/Search for electricians/i);
    fireEvent.change(searchInput, { target: { value: 'John' } });
    expect(screen.getByText('John Smith')).toBeInTheDocument();
  });

  it('filters by location', () => {
    render(<Home />);
    const locationSelect = screen.getByRole('combobox', { name: /location/i });
    fireEvent.change(locationSelect, { target: { value: 'Philadelphia' } });
    expect(screen.getByText('John Smith')).toBeInTheDocument();
  });

  it('shows correct number of results', () => {
    render(<Home />);
    expect(screen.getByText('1 results found')).toBeInTheDocument();
  });
});