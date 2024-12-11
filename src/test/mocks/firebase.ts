import { vi } from 'vitest';

export const mockAuth = {
  currentUser: null,
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
  onAuthStateChanged: vi.fn(),
};

export const mockFirebase = {
  auth: vi.fn(() => mockAuth),
  initializeApp: vi.fn(),
};