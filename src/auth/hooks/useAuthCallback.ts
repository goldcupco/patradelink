import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { getErrorMessage } from '../utils/error-handler';
import type { AuthState } from '../types';

export function useAuthCallback() {
  const navigate = useNavigate();

  const handleRedirectCallback = useCallback((appState: AuthState) => {
    navigate(appState?.returnTo || '/');
  }, [navigate]);

  const handleError = useCallback((error: Error) => {
    console.error('Auth0 Error:', error);
    const message = getErrorMessage(error);
    navigate('/error', { state: { error: message } });
  }, [navigate]);

  return {
    handleRedirectCallback,
    handleError,
  };
}