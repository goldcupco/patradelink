```tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../../setup/test-utils';
import { ContactButton } from '../../../components/contact/ContactButton';
import { Phone } from 'lucide-react';

describe('ContactButton', () => {
  const defaultProps = {
    icon: Phone,
    label: 'Test Button',
    tooltipContent: 'Tooltip Content',
    onClick: vi.fn(),
  };

  it('renders button with correct label', () => {
    render(<ContactButton {...defaultProps} />);
    expect(screen.getByLabelText('Test Button')).toBeInTheDocument();
  });

  it('shows tooltip on hover', async () => {
    render(<ContactButton {...defaultProps} />);
    
    const button = screen.getByLabelText('Test Button');
    fireEvent.mouseEnter(button);
    
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip Content');
    });
  });

  it('calls onClick when clicked', () => {
    render(<ContactButton {...defaultProps} />);
    
    const button = screen.getByLabelText('Test Button');
    fireEvent.click(button);
    
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
```