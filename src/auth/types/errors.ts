export interface AuthErrorState {
  error?: string;
  error_description?: string;
  message?: string;
}

export interface AuthErrorResponse extends AuthErrorState {
  status?: number;
  code?: string;
}