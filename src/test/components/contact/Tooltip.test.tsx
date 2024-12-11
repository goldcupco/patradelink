```tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../../setup/test-utils';
import { Tooltip } from '../../../components/contact/Tooltip';

describe('Tooltip', () => {
  const defaultProps = {
    content: 'Tooltip content',
    children: <button>Hover me</button>,
  };

  it('renders children', () => {
    render(<Tooltip {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveTextContent('Hover me');
  });

  it('shows tooltip on hover', async () => {
    render(<Tooltip {...defaultProps} />);
    
    const trigger = screen.getByRole('button');
    fireEvent.mouseEnter(trigger);
    
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip content');
    });
  });

  it('hides tooltip on mouse leave', async () => {
    render(<Tooltip {...defaultProps} />);
    
    const trigger = screen.getByRole('button');
    fireEvent.mouseEnter(trigger);
    
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
    
    fireEvent.mouseLeave(trigger);
    
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('respects delay prop', async () => {
    const delay = 500;
    render(<Tooltip {...defaultProps} delay={delay} />);
    
    const trigger = screen.getByRole('button');
    fireEvent.mouseEnter(trigger);
    
    // Tooltip should not be visible immediately
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    
    // Tooltip should be visible after delay
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    }, { timeout: delay + 100 });
  });
});
```