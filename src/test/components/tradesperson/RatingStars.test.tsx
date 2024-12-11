import { describe, it, expect } from 'vitest';
import { render, screen } from '../../setup/test-utils';
import { RatingStars } from '../../../components/tradesperson/RatingStars';

describe('RatingStars', () => {
  it('renders correct number of filled stars', () => {
    render(<RatingStars rating={4} />);
    
    const stars = screen.getAllByTestId('star-icon');
    expect(stars).toHaveLength(5);
    
    const filledStars = stars.filter(star => 
      star.classList.contains('text-yellow-400')
    );
    expect(filledStars).toHaveLength(4);
  });

  it('handles decimal ratings', () => {
    render(<RatingStars rating={3.7} />);
    
    const stars = screen.getAllByTestId('star-icon');
    const filledStars = stars.filter(star => 
      star.classList.contains('text-yellow-400')
    );
    expect(filledStars).toHaveLength(3);
  });

  it('displays review count when provided', () => {
    render(<RatingStars rating={4.5} reviewCount={100} />);
    expect(screen.getByText('4.5 (100 reviews)')).toBeInTheDocument();
  });

  it('renders smaller stars when size is sm', () => {
    render(<RatingStars rating={4.5} size="sm" />);
    const stars = screen.getAllByTestId('star-icon');
    stars.forEach(star => {
      expect(star).toHaveClass('h-3', 'w-3');
    });
  });
});