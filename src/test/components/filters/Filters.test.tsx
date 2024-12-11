import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../setup/test-utils';
import { Filters } from '../../../components/Filters';

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

  it('renders filter sections', () => {
    render(<Filters {...defaultProps} />);
    ['Trade', 'Price Range', 'Rating'].forEach(section => {
      expect(screen.getByText(section)).toBeInTheDocument();
    });
  });

  describe('Trade Filter', () => {
    it('handles trade selection', () => {
      render(<Filters {...defaultProps} />);
      const select = screen.getByRole('combobox');
      
      fireEvent.change(select, { target: { value: 'Electrician' } });
      expect(defaultProps.onTradeChange).toHaveBeenCalledWith('Electrician');
    });
  });

  describe('Price Range Filter', () => {
    it('handles price range selection', () => {
      render(<Filters {...defaultProps} />);
      const checkbox = screen.getByRole('checkbox', { name: /\$\$/ });
      
      fireEvent.click(checkbox);
      expect(defaultProps.onPriceRangeChange).toHaveBeenCalledWith(['$$']);
    });
  });

  describe('Rating Filter', () => {
    it('handles rating selection', () => {
      render(<Filters {...defaultProps} />);
      const checkbox = screen.getByRole('checkbox', { name: /4\+ Stars/ });
      
      fireEvent.click(checkbox);
      expect(defaultProps.onRatingChange).toHaveBeenCalledWith(4);
    });
  });
});