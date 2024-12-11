import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../setup/test-utils';
import { LocationFilter } from '../../../components/LocationFilter';
import type { LocationState } from '../../../types/location';

describe('LocationFilter', () => {
  const defaultProps = {
    selectedLocation: { type: 'city', value: '' } as LocationState,
    onLocationChange: vi.fn(),
  };

  it('renders location type selector', () => {
    render(<LocationFilter {...defaultProps} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('handles city selection', () => {
    render(<LocationFilter {...defaultProps} />);
    const citySelect = screen.getAllByRole('combobox')[1];
    
    fireEvent.change(citySelect, { target: { value: 'Philadelphia' } });
    expect(defaultProps.onLocationChange).toHaveBeenCalledWith({
      type: 'city',
      value: 'Philadelphia'
    });
  });

  it('validates zip code input', () => {
    render(<LocationFilter {...defaultProps} selectedLocation={{ type: 'zip', value: '' }} />);
    const input = screen.getByPlaceholderText(/Enter ZIP code/i);
    
    // Valid PA zip
    fireEvent.change(input, { target: { value: '19019' } });
    expect(defaultProps.onLocationChange).toHaveBeenCalledWith({
      type: 'zip',
      value: '19019'
    });

    // Invalid zip - should not call onChange
    defaultProps.onLocationChange.mockClear();
    fireEvent.change(input, { target: { value: '12345' } });
    expect(defaultProps.onLocationChange).not.toHaveBeenCalled();
  });
});