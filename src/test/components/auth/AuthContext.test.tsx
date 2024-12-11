import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../../setup/test-utils';
import { AuthProvider, useAuth } from '../../../auth/context/AuthContext';
import { auth } from '../../../config/firebase';

vi.mock('../../../config/firebase', () => ({
  auth: {
    currentUser: null,
    onAuthStateChanged: vi.fn(),
    signInWithEmailAndPassword: vi.fn(),
    createUserWithEmailAndPassword: vi.fn(),
    signOut: vi.fn(),
  },
}));

// Test component that uses the auth context
function TestComponent() {
  const { user, login, logout, signup } = useAuth();
  return (
    <div>
      <div data-testid="user-status">{user ? 'logged-in' : 'logged-out'}</div>
      <button onClick={() => login('test@example.com', 'password')}>Login</button>
      <button onClick={() => signup('test@example.com', 'password')}>Signup</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

describe('AuthContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('provides authentication state', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('user-status')).toHaveTextContent('logged-out');
  });

  it('handles login', async () => {
    const mockSignIn = vi.fn().mockResolvedValue({ user: { email: 'test@example.com' } });
    vi.mocked(auth.signInWithEmailAndPassword).mockImplementation(mockSignIn);

    render(<TestComponent />);
    
    fireEvent.click(screen.getByText('Login'));
    
    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith(
        auth,
        'test@example.com',
        'password'
      );
    });
  });

  it('handles signup', async () => {
    const mockSignUp = vi.fn().mockResolvedValue({ user: { email: 'test@example.com' } });
    vi.mocked(auth.createUserWithEmailAndPassword).mockImplementation(mockSignUp);

    render(<TestComponent />);
    
    fireEvent.click(screen.getByText('Signup'));
    
    await waitFor(() => {
      expect(mockSignUp).toHaveBeenCalledWith(
        auth,
        'test@example.com',
        'password'
      );
    });
  });

  it('handles logout', async () => {
    const mockSignOut = vi.fn().mockResolvedValue(undefined);
    vi.mocked(auth.signOut).mockImplementation(mockSignOut);

    render(<TestComponent />);
    
    fireEvent.click(screen.getByText('Logout'));
    
    await waitFor(() => {
      expect(mockSignOut).toHaveBeenCalled();
    });
  });
});