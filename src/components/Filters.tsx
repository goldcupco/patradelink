import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  selectedTrade: string;
  onTradeChange: (trade: string) => void;
  trades: string[];
  selectedPriceRanges: string[];
  onPriceRangeChange: (ranges: string[]) => void;
  minRating: number | null;
  onRatingChange: (rating: number | null) => void;
}

export function Filters({
  selectedTrade,
  onTradeChange,
  trades,
  selectedPriceRanges,
  onPriceRangeChange,
  minRating,
  onRatingChange,
}: FiltersProps) {
  const handlePriceRangeToggle = (price: string) => {
    if (selectedPriceRanges.includes(price)) {
      onPriceRangeChange(selectedPriceRanges.filter((p) => p !== price));
    } else {
      onPriceRangeChange([...selectedPriceRanges, price]);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 text-gray-500 mr-2" />
        <h3 className="font-medium text-gray-900">Filters</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Trade</h4>
          <select
            value={selectedTrade}
            onChange={(e) => onTradeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">All Trades</option>
            {trades.map((trade) => (
              <option key={trade} value={trade}>
                {trade}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
          <div className="space-y-2">
            {['$', '$$', '$$$'].map((price) => (
              <label key={price} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedPriceRanges.includes(price)}
                  onChange={() => handlePriceRangeToggle(price)}
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <span className="ml-2 text-sm text-gray-600">{price}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Rating</h4>
          <div className="space-y-2">
            {[4, 3, 2].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  type="checkbox"
                  checked={minRating === rating}
                  onChange={() => onRatingChange(minRating === rating ? null : rating)}
                  className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  {rating}+ Stars
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}