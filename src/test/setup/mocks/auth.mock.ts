import { vi } from 'vitest';

export const mockAuthState = {
  user: null,
  loading: false,
  error: null,
  login: vi.fn(),
  logout: vi.fn(),
  signup: vi.fn(),
};

export const mockAuthContext = vi.fn(() => mockAuthState);

vi.mock('../../../auth/context/AuthContext', () => ({
  useAuth: () => mockAuthState,
  AuthProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));