import React, { useState } from 'react';
import { Star, Phone, Mail, Clock, MapPin } from 'lucide-react';
import type { Tradesperson } from '../data/tradespeople';
import { ContactModal } from './ContactModal';

interface TradesPersonCardProps {
  person: Tradesperson;
}

interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
}

function RatingStars({ rating, reviewCount }: RatingStarsProps) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
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

export function TradesPersonCard({ person }: TradesPersonCardProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <img
          src={person.imageUrl}
          alt={`${person.name} - ${person.trade}`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 hover:text-red-600">
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
              <span>{person.location}, PA</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              <span>{person.responseTime}</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {person.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {person.reviews.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <p className="font-medium text-gray-900 mb-2">Recent Review</p>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center mb-2">
                  <RatingStars rating={person.reviews[0].rating} />
                  <span className="ml-2 text-sm text-gray-500">
                    {person.reviews[0].userName}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{person.reviews[0].comment}</p>
              </div>
            </div>
          )}

          <div className="mt-4 flex justify-between items-center">
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Contact Now
            </button>
            <div className="flex items-center space-x-2">
              <button className="text-gray-600 hover:text-gray-800">
                <Phone className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-gray-800">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        tradesperson={person}
      />
    </>
  );
}