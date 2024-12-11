import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { FIREBASE_CONFIG } from './constants';

// Initialize Firebase
export const app = initializeApp(FIREBASE_CONFIG);

// Initialize Analytics
export const analytics = getAnalytics(app);

// Initialize Auth
export const auth = getAuth(app);