import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../setup/test-utils';
import { ContactButtons } from '../../../components/contact/ContactButtons';

describe('ContactButtons', () => {
  const defaultProps = {
    phone: '123-456-7890',
    email: 'test@example.com'
  };

  it('renders phone and email buttons', () => {
    render(<ContactButtons {...defaultProps} />);
    expect(screen.getByLabelText(/call/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('shows tooltips on hover', async () => {
    render(<ContactButtons {...defaultProps} />);
    
    const phoneButton = screen.getByLabelText(/call/i);
    fireEvent.mouseEnter(phoneButton);
    expect(await screen.findByRole('tooltip')).toHaveTextContent(defaultProps.phone);
    
    fireEvent.mouseLeave(phoneButton);
    
    const emailButton = screen.getByLabelText(/email/i);
    fireEvent.mouseEnter(emailButton);
    expect(await screen.findByRole('tooltip')).toHaveTextContent(defaultProps.email);
  });

  it('handles phone click', () => {
    const { window } = global;
    window.location.href = '';
    
    render(<ContactButtons {...defaultProps} />);
    fireEvent.click(screen.getByLabelText(/call/i));
    
    expect(window.location.href).toBe('tel:1234567890');
  });

  it('handles email click', () => {
    const { window } = global;
    window.location.href = '';
    
    render(<ContactButtons {...defaultProps} />);
    fireEvent.click(screen.getByLabelText(/email/i));
    
    expect(window.location.href).toBe('mailto:test@example.com');
  });
});