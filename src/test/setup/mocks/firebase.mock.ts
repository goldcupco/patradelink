import { vi } from 'vitest';

export const mockAuth = {
  currentUser: null,
  onAuthStateChanged: vi.fn((auth, callback) => {
    callback(null);
    return vi.fn();
  }),
  signInWithEmailAndPassword: vi.fn(),
  createUserWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
};

export const mockFirestore = {
  collection: vi.fn(),
  query: vi.fn(),
  where: vi.fn(),
  orderBy: vi.fn(),
  onSnapshot: vi.fn(),
  addDoc: vi.fn(),
  serverTimestamp: vi.fn(),
  getDocs: vi.fn(),
};

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => mockAuth),
  signInWithEmailAndPassword: mockAuth.signInWithEmailAndPassword,
  createUserWithEmailAndPassword: mockAuth.createUserWithEmailAndPassword,
  signOut: mockAuth.signOut,
  onAuthStateChanged: mockAuth.onAuthStateChanged,
}));

vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(),
}));

vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  collection: mockFirestore.collection,
  query: mockFirestore.query,
  where: mockFirestore.where,
  orderBy: mockFirestore.orderBy,
  onSnapshot: mockFirestore.onSnapshot,
  addDoc: mockFirestore.addDoc,
  serverTimestamp: mockFirestore.serverTimestamp,
  getDocs: mockFirestore.getDocs,
}));