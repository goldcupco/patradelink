import { describe, it, expect } from 'vitest';
import { render, screen } from '../../setup/test-utils';
import { ReviewSection } from '../../../components/tradesperson/ReviewSection';
import { mockTradesperson } from '../../setup/mocks';

describe('ReviewSection', () => {
  it('renders latest review', () => {
    render(<ReviewSection reviews={mockTradesperson.reviews} />);
    
    const latestReview = mockTradesperson.reviews[0];
    expect(screen.getByText(latestReview.comment)).toBeInTheDocument();
    expect(screen.getByText(latestReview.userName)).toBeInTheDocument();
  });

  it('displays review rating', () => {
    render(<ReviewSection reviews={mockTradesperson.reviews} />);
    
    const stars = screen.getAllByTestId('star-icon');
    const filledStars = stars.filter(star => 
      star.classList.contains('text-yellow-400')
    );
    expect(filledStars).toHaveLength(5);
  });

  it('renders nothing when no reviews available', () => {
    const { container } = render(<ReviewSection reviews={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('shows "Recent Review" heading', () => {
    render(<ReviewSection reviews={mockTradesperson.reviews} />);
    expect(screen.getByText('Recent Review')).toBeInTheDocument();
  });
});