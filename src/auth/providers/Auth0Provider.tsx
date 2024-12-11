import { Auth0Provider as BaseAuth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { getAuth0ProviderConfig } from '../../config/auth0';

interface Auth0ProviderProps {
  children: React.ReactNode;
}

export function Auth0Provider({ children }: Auth0ProviderProps) {
  const navigate = useNavigate();
  const config = getAuth0ProviderConfig();

  const handleRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || '/');
  };

  const handleError = (error: Error) => {
    console.error('Auth0 Error:', error);
    navigate('/error', { state: { error: error.message } });
  };

  return (
    <BaseAuth0Provider
      {...config}
      onRedirectCallback={handleRedirectCallback}
      onError={handleError}
    >
      {children}
    </BaseAuth0Provider>
  );
}