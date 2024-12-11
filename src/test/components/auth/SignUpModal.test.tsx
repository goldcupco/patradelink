import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../../setup/test-utils';
import { SignUpModal } from '../../../components/SignUpModal';
import { useAuth } from '../../../auth/context/AuthContext';

vi.mock('../../../auth/context/AuthContext');

describe('SignUpModal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
  };

  beforeEach(() => {
    vi.mocked(useAuth).mockReturnValue({
      signup: vi.fn(),
      login: vi.fn(),
      user: null,
      loading: false,
      error: null,
      logout: vi.fn(),
    });
  });

  it('renders signup form when open', () => {
    render(<SignUpModal {...defaultProps} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const mockSignup = vi.fn().mockResolvedValue(undefined);
    vi.mocked(useAuth).mockReturnValue({
      signup: mockSignup,
      login: vi.fn(),
      user: null,
      loading: false,
      error: null,
      logout: vi.fn(),
    });

    render(<SignUpModal {...defaultProps} />);
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    
    fireEvent.submit(screen.getByRole('button', { name: /sign up/i }));
    
    await waitFor(() => {
      expect(mockSignup).toHaveBeenCalledWith('test@example.com', 'password123');
      expect(defaultProps.onClose).toHaveBeenCalled();
    });
  });

  it('displays error message when signup fails', async () => {
    const mockSignup = vi.fn().mockRejectedValue(new Error('Signup failed'));
    vi.mocked(useAuth).mockReturnValue({
      signup: mockSignup,
      login: vi.fn(),
      user: null,
      loading: false,
      error: null,
      logout: vi.fn(),
    });

    render(<SignUpModal {...defaultProps} />);
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    
    fireEvent.submit(screen.getByRole('button', { name: /sign up/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/signup failed/i)).toBeInTheDocument();
    });
  });

  it('toggles between signup and signin modes', () => {
    render(<SignUpModal {...defaultProps} />);
    
    const toggleButton = screen.getByText(/already have an account/i);
    fireEvent.click(toggleButton);
    
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});