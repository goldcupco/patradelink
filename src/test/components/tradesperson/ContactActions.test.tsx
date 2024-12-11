```tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../setup/test-utils';
import { ContactActions } from '../../../components/tradesperson/ContactActions';

describe('ContactActions', () => {
  const defaultProps = {
    onContactClick: vi.fn(),
    phone: '123-456-7890',
    email: 'test@example.com'
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders contact buttons', () => {
    render(<ContactActions {...defaultProps} />);
    
    expect(screen.getByRole('button', { name: /contact now/i })).toBeInTheDocument();
    expect(screen.getByLabelText(`Call ${defaultProps.phone}`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Email ${defaultProps.email}`)).toBeInTheDocument();
  });

  it('handles contact button click', () => {
    render(<ContactActions {...defaultProps} />);
    
    const contactButton = screen.getByRole('button', { name: /contact now/i });
    fireEvent.click(contactButton);
    
    expect(defaultProps.onContactClick).toHaveBeenCalledTimes(1);
  });

  it('shows tooltips on hover', async () => {
    render(<ContactActions {...defaultProps} />);
    
    const phoneButton = screen.getByLabelText(`Call ${defaultProps.phone}`);
    fireEvent.mouseEnter(phoneButton);
    expect(await screen.findByRole('tooltip')).toHaveTextContent(defaultProps.phone);
    
    const emailButton = screen.getByLabelText(`Email ${defaultProps.email}`);
    fireEvent.mouseEnter(emailButton);
    expect(await screen.findByRole('tooltip')).toHaveTextContent(defaultProps.email);
  });
});
```