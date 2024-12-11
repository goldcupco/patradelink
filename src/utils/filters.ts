import type { Tradesperson } from '../data/tradespeople';
import type { LocationState } from '../types/location';

export interface FilterOptions {
  searchTerm: string;
  selectedTrade: string;
  selectedLocation: LocationState;
  priceRanges: string[];
  minRating: number | null;
}

export function filterTradespeople(
  tradespeople: Tradesperson[],
  filters: FilterOptions
): Tradesperson[] {
  return tradespeople.filter((person) => {
    const matchesSearch =
      filters.searchTerm === '' ||
      person.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      person.trade.toLowerCase().includes(filters.searchTerm.toLowerCase());

    const matchesTrade = 
      filters.selectedTrade === '' || 
      person.trade === filters.selectedTrade;
    
    const matchesLocation = () => {
      if (!filters.selectedLocation.value) return true;
      
      switch (filters.selectedLocation.type) {
        case 'city':
          return person.location.toLowerCase() === 
            filters.selectedLocation.value.toLowerCase();
        case 'county':
          return person.county.toLowerCase() === 
            filters.selectedLocation.value.toLowerCase();
        case 'zip':
          return person.zipCode === filters.selectedLocation.value;
        default:
          return true;
      }
    };
    
    const matchesPriceRange = 
      filters.priceRanges.length === 0 || 
      filters.priceRanges.includes(person.priceRange);

    const matchesRating = 
      !filters.minRating || 
      person.rating >= filters.minRating;

    return matchesSearch && matchesTrade && matchesLocation() && matchesPriceRange && matchesRating;
  });
}

export function getUniqueTrades(tradespeople: Tradesperson[]): string[] {
  return Array.from(new Set(tradespeople.map((person) => person.trade))).sort();
}