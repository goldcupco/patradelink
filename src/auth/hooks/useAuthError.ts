import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getErrorMessage, isAuthError, shouldRedirectToLogin } from '../utils/error-handler';
import { validateAuthResponse } from '../utils/validation';

export function useAuthError() {
  const navigate = useNavigate();

  const handleError = useCallback((error: Error) => {
    console.error('Auth Error:', error);

    // First validate if it's an Auth0 response error
    const responseError = validateAuthResponse(error);
    if (responseError) {
      error = responseError;
    }

    if (isAuthError(error)) {
      const message = getErrorMessage(error);
      
      if (shouldRedirectToLogin(error)) {
        navigate('/login', { 
          state: { error: message },
          replace: true 
        });
        return;
      }

      navigate('/error', { 
        state: { error: message },
        replace: true 
      });
      return;
    }

    // For unknown errors, redirect to error page
    navigate('/error', { replace: true });
  }, [navigate]);

  return { handleError };
}