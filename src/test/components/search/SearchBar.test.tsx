import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../setup/test-utils';
import { SearchBar } from '../../../components/SearchBar';
import type { LocationState } from '../../../types/location';

describe('SearchBar', () => {
  const defaultProps = {
    searchTerm: '',
    onSearchChange: vi.fn(),
    selectedLocation: { type: 'city', value: '' } as LocationState,
    onLocationChange: vi.fn(),
  };

  it('renders search input', () => {
    render(<SearchBar {...defaultProps} />);
    expect(screen.getByPlaceholderText(/search for/i)).toBeInTheDocument();
  });

  it('handles search input changes', () => {
    render(<SearchBar {...defaultProps} />);
    const input = screen.getByPlaceholderText(/search for/i);
    
    fireEvent.change(input, { target: { value: 'plumber' } });
    expect(defaultProps.onSearchChange).toHaveBeenCalledWith('plumber');
  });

  it('renders location filter', () => {
    render(<SearchBar {...defaultProps} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});