import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { getAuth0ProviderConfig } from '../config/auth0';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const config = getAuth0ProviderConfig();

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || '/');
  };

  const onError = (error: Error) => {
    console.error('Auth0 Error:', error);
    navigate('/error', { state: { error: error.message } });
  };

  return (
    <Auth0Provider
      {...config}
      onRedirectCallback={onRedirectCallback}
      onError={onError}
    >
      {children}
    </Auth0Provider>
  );
}