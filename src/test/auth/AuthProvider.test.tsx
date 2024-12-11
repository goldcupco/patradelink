import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../utils/test-utils';
import { AuthProvider } from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH0_CONFIG } from '../../config/auth0/constants';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: vi.fn(),
}));

vi.mock('@auth0/auth0-react', () => ({
  Auth0Provider: vi.fn(({ children }) => <div>{children}</div>),
}));

describe('AuthProvider', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders Auth0Provider with correct props', () => {
    render(
      <AuthProvider>
        <div>Test Content</div>
      </AuthProvider>
    );

    expect(Auth0Provider).toHaveBeenCalledWith(
      expect.objectContaining({
        domain: AUTH0_CONFIG.domain,
        clientId: AUTH0_CONFIG.clientId,
        authorizationParams: expect.objectContaining({
          redirect_uri: AUTH0_CONFIG.redirectUri,
          scope: AUTH0_CONFIG.scope,
          audience: AUTH0_CONFIG.audience,
        }),
        cacheLocation: 'localstorage',
        useRefreshTokens: true,
      }),
      expect.any(Object)
    );
  });

  it('renders children', () => {
    render(
      <AuthProvider>
        <div data-testid="test-content">Test Content</div>
      </AuthProvider>
    );

    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });
});