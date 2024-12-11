import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../../setup/test-utils';
import { ContactButtons } from '../../../components/contact/ContactButtons';

describe('ContactButtons', () => {
  const defaultProps = {
    phone: '123-456-7890',
    email: 'test@example.com'
  };

  beforeEach(() => {
    window.location.href = '';
  });

  it('renders contact buttons', () => {
    render(<ContactButtons {...defaultProps} />);
    expect(screen.getByTestId('contact-buttons')).toBeInTheDocument();
    expect(screen.getByLabelText(`Call ${defaultProps.phone}`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Email ${defaultProps.email}`)).toBeInTheDocument();
  });

  it('shows tooltips on hover', async () => {
    render(<ContactButtons {...defaultProps} />);
    
    const phoneButton = screen.getByLabelText(`Call ${defaultProps.phone}`);
    fireEvent.mouseEnter(phoneButton);
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toHaveTextContent(defaultProps.phone);
    });
    
    fireEvent.mouseLeave(phoneButton);
    
    const emailButton = screen.getByLabelText(`Email ${defaultProps.email}`);
    fireEvent.mouseEnter(emailButton);
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toHaveTextContent(defaultProps.email);
    });
  });

  it('handles phone click', () => {
    render(<ContactButtons {...defaultProps} />);
    fireEvent.click(screen.getByLabelText(`Call ${defaultProps.phone}`));
    expect(window.location.href).toBe(`tel:${defaultProps.phone.replace(/\D/g, '')}`);
  });

  it('handles email click', () => {
    render(<ContactButtons {...defaultProps} />);
    fireEvent.click(screen.getByLabelText(`Email ${defaultProps.email}`));
    expect(window.location.href).toBe(`mailto:${defaultProps.email}`);
  });
});