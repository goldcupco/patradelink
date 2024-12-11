import React from 'react';
import { Search } from 'lucide-react';
import { LocationFilter } from './LocationFilter';
import type { LocationState } from '../types/location';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedLocation: LocationState;
  onLocationChange: (location: LocationState) => void;
}

export function SearchBar({ 
  searchTerm, 
  onSearchChange,
  selectedLocation,
  onLocationChange 
}: SearchBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl mx-auto">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search for electricians, plumbers, carpenters..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
        />
      </div>
      <div className="flex-1">
        <LocationFilter
          selectedLocation={selectedLocation}
          onLocationChange={onLocationChange}
        />
      </div>
    </div>
  );
}