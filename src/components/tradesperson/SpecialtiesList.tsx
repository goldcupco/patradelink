```tsx
import React from 'react';

interface SpecialtiesListProps {
  specialties: string[];
}

export function SpecialtiesList({ specialties }: SpecialtiesListProps) {
  if (specialties.length === 0) {
    return <div className="flex flex-wrap gap-2" />;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {specialties.map((specialty) => (
        <span
          key={specialty}
          data-testid="specialty-tag"
          className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
        >
          {specialty}
        </span>
      ))}
    </div>
  );
}
```