import { describe, it, expect } from 'vitest';
import { filterTradespeople, getUniqueTrades } from '../../utils/filters';
import { mockTradesperson } from '../setup/mocks';

const mockTradespeople = [
  mockTradesperson,
  {
    ...mockTradesperson,
    id: '2',
    name: 'Sarah Johnson',
    trade: 'Plumber',
    location: 'Pittsburgh',
    priceRange: '$$$',
    rating: 4.5
  }
];

describe('filterTradespeople', () => {
  describe('search term filtering', () => {
    it('filters by name', () => {
      const result = filterTradespeople(mockTradespeople, {
        searchTerm: 'John',
        selectedTrade: '',
        selectedLocation: { type: 'city', value: '' },
        priceRanges: [],
        minRating: null
      });

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('John Smith');
    });

    it('filters by trade', () => {
      const result = filterTradespeople(mockTradespeople, {
        searchTerm: 'plumber',
        selectedTrade: '',
        selectedLocation: { type: 'city', value: '' },
        priceRanges: [],
        minRating: null
      });

      expect(result).toHaveLength(1);
      expect(result[0].trade).toBe('Plumber');
    });
  });

  describe('location filtering', () => {
    it('filters by city', () => {
      const result = filterTradespeople(mockTradespeople, {
        searchTerm: '',
        selectedTrade: '',
        selectedLocation: { type: 'city', value: 'Philadelphia' },
        priceRanges: [],
        minRating: null
      });

      expect(result).toHaveLength(1);
      expect(result[0].location).toBe('Philadelphia');
    });
  });

  describe('price range filtering', () => {
    it('filters by price range', () => {
      const result = filterTradespeople(mockTradespeople, {
        searchTerm: '',
        selectedTrade: '',
        selectedLocation: { type: 'city', value: '' },
        priceRanges: ['$$$'],
        minRating: null
      });

      expect(result).toHaveLength(1);
      expect(result[0].priceRange).toBe('$$$');
    });
  });

  describe('rating filtering', () => {
    it('filters by minimum rating', () => {
      const result = filterTradespeople(mockTradespeople, {
        searchTerm: '',
        selectedTrade: '',
        selectedLocation: { type: 'city', value: '' },
        priceRanges: [],
        minRating: 4.7
      });

      expect(result).toHaveLength(1);
      expect(result[0].rating).toBeGreaterThanOrEqual(4.7);
    });
  });
});