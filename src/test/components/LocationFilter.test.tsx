import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../utils/test-utils';
import { LocationFilter } from '../../components/LocationFilter';
import type { LocationState } from '../../types/location';

describe('LocationFilter', () => {
  const mockOnChange = vi.fn();
  const defaultProps = {
    selectedLocation: { type: 'city', value: '' } as LocationState,
    onLocationChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('renders location type selector', () => {
    render(<LocationFilter {...defaultProps} />);
    const selects = screen.getAllByRole('combobox');
    expect(selects).toHaveLength(2);
    expect(selects[0]).toHaveValue('city');
  });

  it('handles city selection', () => {
    render(<LocationFilter {...defaultProps} />);
    const citySelect = screen.getAllByRole('combobox')[1];
    fireEvent.change(citySelect, { target: { value: 'Philadelphia' } });
    expect(mockOnChange).toHaveBeenCalledWith({ type: 'city', value: 'Philadelphia' });
  });

  it('handles county selection', () => {
    render(<LocationFilter {...defaultProps} />);
    const typeSelect = screen.getAllByRole('combobox')[0];
    fireEvent.change(typeSelect, { target: { value: 'county' } });
    expect(mockOnChange).toHaveBeenCalledWith({ type: 'county', value: '' });
  });

  it('validates and formats zip code input', () => {
    render(<LocationFilter {...defaultProps} selectedLocation={{ type: 'zip', value: '' }} />);
    const input = screen.getByPlaceholderText(/Enter ZIP code/i);
    
    // Test valid PA zip code
    fireEvent.change(input, { target: { value: '19019' } });
    expect(mockOnChange).toHaveBeenCalledWith({ type: 'zip', value: '19019' });

    // Test invalid zip code (should not call onChange)
    mockOnChange.mockClear();
    fireEvent.change(input, { target: { value: '12345' } });
    expect(mockOnChange).not.toHaveBeenCalled();
  });
});