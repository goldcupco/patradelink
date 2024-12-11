export const AUTH_ERRORS = {
  INVALID_STATE: 'invalid_state',
  UNAUTHORIZED: 'unauthorized',
  CONSENT_REQUIRED: 'consent_required',
  LOGIN_REQUIRED: 'login_required',
  NETWORK_ERROR: 'network_error',
  INVALID_REQUEST: 'invalid_request',
  ACCESS_DENIED: 'access_denied',
} as const;

export const ERROR_MESSAGES = {
  [AUTH_ERRORS.INVALID_STATE]: 'Authentication session expired. Please try again.',
  [AUTH_ERRORS.UNAUTHORIZED]: 'You are not authorized to access this application.',
  [AUTH_ERRORS.CONSENT_REQUIRED]: 'Application permissions need to be granted.',
  [AUTH_ERRORS.LOGIN_REQUIRED]: 'Please log in to continue.',
  [AUTH_ERRORS.NETWORK_ERROR]: 'Unable to connect to the authentication service. Please check your internet connection.',
  [AUTH_ERRORS.INVALID_REQUEST]: 'Invalid authentication request. Please try again.',
  [AUTH_ERRORS.ACCESS_DENIED]: 'Access denied. Please contact support if you believe this is an error.',
  default: 'An error occurred during authentication. Please try again.',
} as const;