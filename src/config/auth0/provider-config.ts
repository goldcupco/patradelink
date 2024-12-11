import { AUTH0_CONFIG } from './constants';

export function getAuth0ProviderConfig() {
  return {
    domain: AUTH0_CONFIG.domain,
    clientId: AUTH0_CONFIG.clientId,
    authorizationParams: {
      redirect_uri: AUTH0_CONFIG.redirectUri,
      scope: AUTH0_CONFIG.scope,
      audience: AUTH0_CONFIG.audience,
    },
    useRefreshTokens: true,
    cacheLocation: 'localstorage' as const,
  };
}