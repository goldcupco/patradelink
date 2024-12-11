import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../utils/test-utils';
import { ContactModal } from '../../components/ContactModal';
import type { Tradesperson } from '../../data/tradespeople';

const mockTradesperson: Tradesperson = {
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
};

describe('ContactModal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    tradesperson: mockTradesperson,
  };

  it('renders nothing when closed', () => {
    const { container } = render(
      <ContactModal {...defaultProps} isOpen={false} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders modal content when open', () => {
    render(<ContactModal {...defaultProps} />);
    
    expect(screen.getByText(`Contact ${mockTradesperson.name}`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/describe your project/i)).toBeInTheDocument();
  });

  it('handles message input', () => {
    render(<ContactModal {...defaultProps} />);
    
    const textarea = screen.getByPlaceholderText(/describe your project/i);
    fireEvent.change(textarea, { target: { value: 'Test message' } });
    
    expect(textarea).toHaveValue('Test message');
  });

  it('closes modal when clicking close button', () => {
    render(<ContactModal {...defaultProps} />);
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});