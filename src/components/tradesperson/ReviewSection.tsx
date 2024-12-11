import React from 'react';
import { RatingStars } from './RatingStars';
import type { Review } from '../../data/tradespeople';

interface ReviewSectionProps {
  reviews: Review[];
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
  if (reviews.length === 0) return null;

  const latestReview = reviews[0];

  return (
    <div className="mt-4 border-t pt-4">
      <p className="font-medium text-gray-900 mb-2">Recent Review</p>
      <div className="bg-gray-50 rounded-lg p-3">
        <div className="flex items-center mb-2">
          <RatingStars rating={latestReview.rating} size="sm" />
          <span className="ml-2 text-sm text-gray-500">
            {latestReview.userName}
          </span>
        </div>
        <p className="text-sm text-gray-600">{latestReview.comment}</p>
      </div>
    </div>
  );
}