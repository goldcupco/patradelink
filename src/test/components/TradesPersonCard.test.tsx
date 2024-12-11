import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../utils/test-utils';
import { TradesPersonCard } from '../../components/TradesPersonCard';
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
  reviews: [
    {
      id: 'r1',
      userName: 'Test User',
      rating: 5,
      comment: 'Great service',
      date: '2024-03-01'
    }
  ],
  yearsExperience: 15,
  specialties: ['Residential'],
  phone: '123-456-7890',
  email: 'john@example.com',
  available: true,
  imageUrl: 'test.jpg',
  priceRange: '$$',
  responseTime: '1 hour'
};

describe('TradesPersonCard', () => {
  it('renders tradesperson information', () => {
    render(<TradesPersonCard person={mockTradesperson} />);
    
    expect(screen.getByText(mockTradesperson.name)).toBeInTheDocument();
    expect(screen.getByText(mockTradesperson.trade)).toBeInTheDocument();
    expect(screen.getByText(`${mockTradesperson.location}, PA`)).toBeInTheDocument();
  });

  it('displays rating and reviews', () => {
    render(<TradesPersonCard person={mockTradesperson} />);
    
    expect(screen.getByText(`${mockTradesperson.rating.toFixed(1)}`)).toBeInTheDocument();
    expect(screen.getByText(`(${mockTradesperson.reviewCount} reviews)`)).toBeInTheDocument();
  });

  it('shows specialties', () => {
    render(<TradesPersonCard person={mockTradesperson} />);
    
    mockTradesperson.specialties.forEach(specialty => {
      expect(screen.getByText(specialty)).toBeInTheDocument();
    });
  });

  it('opens contact modal on button click', () => {
    render(<TradesPersonCard person={mockTradesperson} />);
    
    const contactButton = screen.getByText('Contact Now');
    fireEvent.click(contactButton);
    
    expect(screen.getByText(`Contact ${mockTradesperson.name}`)).toBeInTheDocument();
  });
});