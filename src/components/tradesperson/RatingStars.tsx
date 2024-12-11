```tsx
import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  size?: 'sm' | 'md';
}

export function RatingStars({ rating, reviewCount, size = 'md' }: RatingStarsProps) {
  const starSize = size === 'sm' ? 'h-3 w-3' : 'h-4 w-4';
  const filledStars = Math.floor(rating);
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          data-testid="star-icon"
          className={`${starSize} ${
            i < filledStars
              ? 'text-yellow-400 fill-current'
              : 'text-gray-300'
          }`}
        />
      ))}
      {reviewCount !== undefined && (
        <span className="ml-2 text-sm text-gray-600">
          {rating.toFixed(1)} ({reviewCount} reviews)
        </span>
      )}
    </div>
  );
}
```