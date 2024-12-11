export interface AuthError extends Error {
  error_description?: string;
  error?: string;
}

export interface AuthState {
  returnTo?: string;
  error?: string;
}