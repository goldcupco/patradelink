import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../utils/test-utils';
import { Header } from '../../components/Header';
import { useAuth0 } from '@auth0/auth0-react';

vi.mock('@auth0/auth0-react');

describe('Header', () => {
  beforeEach(() => {
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: false,
      user: null,
      loginWithRedirect: vi.fn(),
      logout: vi.fn(),
    } as any);
  });

  it('renders logo and navigation links', () => {
    render(<Header />);
    expect(screen.getByText('PA TradeLink')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
  });

  it('shows sign in and sign up buttons when not authenticated', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  it('shows user menu when authenticated', () => {
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: true,
      user: { name: 'Test User' },
      loginWithRedirect: vi.fn(),
      logout: vi.fn(),
    } as any);

    render(<Header />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  it('calls loginWithRedirect when sign in is clicked', () => {
    const loginWithRedirect = vi.fn();
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: false,
      user: null,
      loginWithRedirect,
      logout: vi.fn(),
    } as any);

    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));
    expect(loginWithRedirect).toHaveBeenCalled();
  });

  it('calls logout when sign out is clicked', () => {
    const logout = vi.fn();
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: true,
      user: { name: 'Test User' },
      loginWithRedirect: vi.fn(),
      logout,
    } as any);

    render(<Header />);
    const userButton = screen.getByText('Test User');
    fireEvent.click(userButton);
    
    const signOutButton = screen.getByText('Sign Out');
    fireEvent.click(signOutButton);
    
    expect(logout).toHaveBeenCalledWith({
      logoutParams: { returnTo: window.location.origin }
    });
  });
});