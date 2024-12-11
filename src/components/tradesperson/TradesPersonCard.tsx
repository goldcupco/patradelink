```tsx
import React, { useState } from 'react';
import type { Tradesperson } from '../../data/tradespeople';
import { TradesPersonInfo } from './TradesPersonInfo';
import { SpecialtiesList } from './SpecialtiesList';
import { ReviewSection } from './ReviewSection';
import { ContactActions } from './ContactActions';
import { ContactModal } from '../ContactModal';

interface TradesPersonCardProps {
  person: Tradesperson;
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
          <TradesPersonInfo person={person} />
          
          <div className="mt-4">
            <SpecialtiesList specialties={person.specialties} />
          </div>

          <ReviewSection reviews={person.reviews} />

          <ContactActions 
            onContactClick={() => setIsContactModalOpen(true)}
            phone={person.phone}
            email={person.email}
          />
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
```