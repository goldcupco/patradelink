import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../setup/test-utils';
import { TradesPersonCard } from '../../../components/tradesperson/TradesPersonCard';
import { mockTradesperson } from '../../setup/mocks/tradesperson.mock';

describe('TradesPersonCard', () => {
  it('renders basic information', () => {
    render(<TradesPersonCard person={mockTradesperson} />);
    
    expect(screen.getByRole('heading', { name: mockTradesperson.name })).toBeInTheDocument();
    expect(screen.getByText(mockTradesperson.trade)).toBeInTheDocument();
    expect(screen.getByText(`${mockTradesperson.location}, PA`)).toBeInTheDocument();
  });

  it('displays rating information', () => {
    render(<TradesPersonCard person={mockTradesperson} />);
    
    const stars = screen.getAllByTestId('star-icon');
    expect(stars).toHaveLength(5);
    
    const filledStars = stars.filter(star => 
      star.classList.contains('text-yellow-400')
    );
    expect(filledStars).toHaveLength(Math.floor(mockTradesperson.rating));
  });

  it('shows specialties', () => {
    render(<TradesPersonCard person={mockTradesperson} />);
    
    mockTradesperson.specialties.forEach(specialty => {
      expect(screen.getByText(specialty)).toBeInTheDocument();
    });
  });

  it('handles contact button click', () => {
    render(<TradesPersonCard person={mockTradesperson} />);
    
    const contactButton = screen.getByRole('button', { name: /contact now/i });
    fireEvent.click(contactButton);
    
    expect(screen.getByText(`Contact ${mockTradesperson.name}`)).toBeInTheDocument();
  });

  it('shows contact tooltips on hover', async () => {
    render(<TradesPersonCard person={mockTradesperson} />);
    
    const phoneButton = screen.getByLabelText(`Call ${mockTradesperson.phone}`);
    fireEvent.mouseEnter(phoneButton);
    expect(await screen.findByRole('tooltip')).toHaveTextContent(mockTradesperson.phone);
    
    const emailButton = screen.getByLabelText(`Email ${mockTradesperson.email}`);
    fireEvent.mouseEnter(emailButton);
    expect(await screen.findByRole('tooltip')).toHaveTextContent(mockTradesperson.email);
  });
});