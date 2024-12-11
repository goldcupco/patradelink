export interface AuthState {
  returnTo?: string;
  tradesperson?: string;
  message?: string;
  error?: AuthErrorState;
}

export interface AuthOptions {
  signup?: boolean;
  connection?: string;
  prompt?: 'login' | 'none' | 'consent';
  max_age?: number;
  ui_locales?: string;
}