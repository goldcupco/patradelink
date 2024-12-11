import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../utils/test-utils';
import { Filters } from '../../components/Filters';

describe('Filters', () => {
  const defaultProps = {
    selectedTrade: '',
    onTradeChange: vi.fn(),
    trades: ['Electrician', 'Plumber'],
    selectedPriceRanges: [],
    onPriceRangeChange: vi.fn(),
    minRating: null,
    onRatingChange: vi.fn(),
  };

  it('renders all filter sections', () => {
    render(<Filters {...defaultProps} />);
    
    expect(screen.getByText('Trade')).toBeInTheDocument();
    expect(screen.getByText('Price Range')).toBeInTheDocument();
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });

  it('handles trade selection', () => {
    render(<Filters {...defaultProps} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Electrician' } });
    
    expect(defaultProps.onTradeChange).toHaveBeenCalledWith('Electrician');
  });

  it('handles price range selection', () => {
    render(<Filters {...defaultProps} />);
    
    const checkbox = screen.getByRole('checkbox', { name: /\$\$/ });
    fireEvent.click(checkbox);
    
    expect(defaultProps.onPriceRangeChange).toHaveBeenCalledWith(['$$']);
  });

  it('handles rating selection', () => {
    render(<Filters {...defaultProps} />);
    
    const checkbox = screen.getByRole('checkbox', { name: /4\+ Stars/ });
    fireEvent.click(checkbox);
    
    expect(defaultProps.onRatingChange).toHaveBeenCalledWith(4);
  });
});