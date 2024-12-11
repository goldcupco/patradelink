export interface AuthError extends Error {
  code?: string;
  message: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface PendingAction {
  type: 'message' | 'booking';
  targetId: string;
  data?: Record<string, unknown>;
}