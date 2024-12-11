import React, { useState } from 'react';
import { tradespeople } from '../data/tradespeople';
import { SearchBar } from '../components/SearchBar';
import { Filters } from '../components/Filters';
import { TradesPersonCard } from '../components/TradesPersonCard';
import { filterTradespeople, getUniqueTrades } from '../utils/filters';
import type { FilterOptions } from '../utils/filters';
import type { LocationState } from '../types/location';

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrade, setSelectedTrade] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<LocationState>({
    type: 'city',
    value: ''
  });
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number | null>(null);

  const trades = getUniqueTrades(tradespeople);
  const filters: FilterOptions = {
    searchTerm,
    selectedTrade,
    selectedLocation,
    priceRanges: selectedPriceRanges,
    minRating,
  };
  
  const filteredTradespeople = filterTradespeople(tradespeople, filters);

  return (
    <>
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Find Trusted Tradespeople in Pennsylvania
          </h2>
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm}
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-64 flex-shrink-0">
            <Filters
              selectedTrade={selectedTrade}
              onTradeChange={setSelectedTrade}
              trades={trades}
              selectedPriceRanges={selectedPriceRanges}
              onPriceRangeChange={setSelectedPriceRanges}
              minRating={minRating}
              onRatingChange={setMinRating}
            />
          </div>

          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                {filteredTradespeople.length} results found
              </p>
              <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm">
                <option>Sort by: Recommended</option>
                <option>Highest Rated</option>
                <option>Most Reviewed</option>
              </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredTradespeople.map((person) => (
                <TradesPersonCard key={person.id} person={person} />
              ))}
            </div>

            {filteredTradespeople.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-gray-500 text-lg">
                  No tradespeople found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}