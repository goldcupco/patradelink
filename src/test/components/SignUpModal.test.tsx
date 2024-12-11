import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../utils/test-utils';
import { SignUpModal } from '../../components/SignUpModal';
import { useAuth } from '../../auth/context/AuthContext';

vi.mock('../../auth/context/AuthContext');

describe('SignUpModal', () => {
  const mockSignup = vi.fn();
  const mockLogin = vi.fn();
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
  };

  beforeEach(() => {
    vi.mocked(useAuth).mockReturnValue({
      signup: mockSignup,
      login: mockLogin,
      isAuthenticated: false,
      isLoading: false,
      user: undefined,
      error: undefined,
      logout: vi.fn(),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders nothing when closed', () => {
    const { container } = render(<SignUpModal {...defaultProps} isOpen={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders signup modal when open', () => {
    render(<SignUpModal {...defaultProps} />);
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Sign Up with Email')).toBeInTheDocument();
    expect(screen.getByText(/continue with/i)).toBeInTheDocument();
  });

  it('calls signup with current path when clicking email signup', async () => {
    render(<SignUpModal {...defaultProps} />);
    const signupButton = screen.getByText('Sign Up with Email');
    
    fireEvent.click(signupButton);
    
    await waitFor(() => {
      expect(mockSignup).toHaveBeenCalledWith(window.location.pathname);
      expect(defaultProps.onClose).toHaveBeenCalled();
    });
  });

  it('calls signup with current path when clicking Google signup', async () => {
    render(<SignUpModal {...defaultProps} />);
    const googleButton = screen.getByText('Google');
    
    fireEvent.click(googleButton);
    
    await waitFor(() => {
      expect(mockSignup).toHaveBeenCalledWith(window.location.pathname);
      expect(defaultProps.onClose).toHaveBeenCalled();
    });
  });

  it('calls login when clicking sign in link', async () => {
    render(<SignUpModal {...defaultProps} />);
    const signInButton = screen.getByText('Sign in');
    
    fireEvent.click(signInButton);
    
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith(window.location.pathname);
      expect(defaultProps.onClose).toHaveBeenCalled();
    });
  });

  it('closes modal when clicking close button', () => {
    render(<SignUpModal {...defaultProps} />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    
    fireEvent.click(closeButton);
    
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('renders terms and privacy links', () => {
    render(<SignUpModal {...defaultProps} />);
    expect(screen.getByText(/terms of service/i)).toBeInTheDocument();
    expect(screen.getByText(/privacy policy/i)).toBeInTheDocument();
  });
});