import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../utils/test-utils';
import { SearchBar } from '../../components/SearchBar';
import type { LocationState } from '../../types/location';

describe('SearchBar', () => {
  const defaultProps = {
    searchTerm: '',
    onSearchChange: vi.fn(),
    selectedLocation: { type: 'city', value: '' } as LocationState,
    onLocationChange: vi.fn(),
  };

  it('renders search input and location filter', () => {
    render(<SearchBar {...defaultProps} />);
    
    expect(screen.getByPlaceholderText(/search for/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /location type/i })).toBeInTheDocument();
  });

  it('calls onSearchChange when input changes', () => {
    render(<SearchBar {...defaultProps} />);
    
    const input = screen.getByPlaceholderText(/search for/i);
    fireEvent.change(input, { target: { value: 'plumber' } });
    
    expect(defaultProps.onSearchChange).toHaveBeenCalledWith('plumber');
  });

  it('calls onLocationChange when location type changes', () => {
    render(<SearchBar {...defaultProps} />);
    
    const select = screen.getByRole('combobox', { name: /location type/i });
    fireEvent.change(select, { target: { value: 'county' } });
    
    expect(defaultProps.onLocationChange).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'county', value: '' })
    );
  });
});