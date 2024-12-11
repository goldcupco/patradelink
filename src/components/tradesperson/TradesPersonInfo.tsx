```tsx
import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { RatingStars } from './RatingStars';
import type { Tradesperson } from '../../data/tradespeople';

interface TradesPersonInfoProps {
  person: Tradesperson;
}

export function TradesPersonInfo({ person }: TradesPersonInfoProps) {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900" role="heading">
            {person.name}
          </h3>
          <p className="text-gray-600">{person.trade}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">{person.priceRange}</span>
        </div>
      </div>

      <div className="mt-2">
        <RatingStars rating={person.rating} reviewCount={person.reviewCount} />
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span data-testid="location">{person.location}, PA</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span data-testid="response-time">{person.responseTime}</span>
        </div>
      </div>
    </div>
  );
}
```