import { vi } from 'vitest';
import type { Tradesperson } from '../../data/tradespeople';

export const mockTradesperson: Tradesperson = {
  id: '1',
  name: 'John Smith',
  trade: 'Electrician',
  location: 'Philadelphia',
  county: 'Philadelphia',
  zipCode: '19019',
  rating: 4.8,
  reviewCount: 127,
  reviews: [
    {
      id: 'r1',
      userName: 'Test User',
      rating: 5,
      comment: 'Great service',
      date: '2024-03-01'
    }
  ],
  yearsExperience: 15,
  specialties: ['Residential'],
  phone: '123-456-7890',
  email: 'john@example.com',
  available: true,
  imageUrl: 'test.jpg',
  priceRange: '$$',
  responseTime: '1 hour'
};

export const mockAuth = {
  user: null,
  loading: false,
  error: null,
  login: vi.fn(),
  logout: vi.fn(),
  signup: vi.fn(),
};