import { useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AUTH0_CONFIG } from '../../config/auth0/constants';

export function useAuthActions() {
  const { loginWithRedirect, logout: auth0Logout } = useAuth0();

  const login = useCallback((returnTo = '/') => {
    loginWithRedirect({
      appState: { returnTo },
      authorizationParams: {
        redirect_uri: AUTH0_CONFIG.redirectUri,
      }
    });
  }, [loginWithRedirect]);

  const signup = useCallback((returnTo = '/') => {
    loginWithRedirect({
      appState: { returnTo },
      authorizationParams: {
        redirect_uri: AUTH0_CONFIG.redirectUri,
        screen_hint: 'signup',
      }
    });
  }, [loginWithRedirect]);

  const logout = useCallback(() => {
    auth0Logout({
      logoutParams: {
        returnTo: AUTH0_CONFIG.logoutUri,
      }
    });
  }, [auth0Logout]);

  return { login, signup, logout };
}