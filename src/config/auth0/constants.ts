export const AUTH0_CONFIG = {
  domain: 'dev-s5ixsyzsijdl67zr.us.auth0.com',
  clientId: 'KwJsKfjjeEJzEbMkE09vri5QtYh3ZciQ',
  redirectUri: `${window.location.origin}/callback`,
  logoutUri: window.location.origin,
  audience: 'https://dev-s5ixsyzsijdl67zr.us.auth0.com/api/v2/',
  scope: 'openid profile email',
} as const;