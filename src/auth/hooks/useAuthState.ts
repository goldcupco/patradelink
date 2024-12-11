import { useAuth0 } from '@auth0/auth0-react';

export function useAuthState() {
  const { isAuthenticated, isLoading, user, error } = useAuth0();
  
  return {
    isAuthenticated,
    isLoading,
    user,
    error
  };
}