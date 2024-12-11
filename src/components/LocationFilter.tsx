import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { PA_CITIES, PA_COUNTIES } from '../data/locations';
import type { LocationState, LocationType } from '../types/location';

interface LocationFilterProps {
  selectedLocation: LocationState;
  onLocationChange: (location: LocationState) => void;
}

export function LocationFilter({ selectedLocation, onLocationChange }: LocationFilterProps) {
  const [localZipValue, setLocalZipValue] = useState(selectedLocation.value);

  useEffect(() => {
    if (selectedLocation.type !== 'zip') {
      setLocalZipValue('');
    } else {
      setLocalZipValue(selectedLocation.value);
    }
  }, [selectedLocation.type, selectedLocation.value]);

  const handleTypeChange = (type: LocationType) => {
    onLocationChange({ type, value: '' });
  };

  const handleValueChange = (value: string) => {
    onLocationChange({ ...selectedLocation, value });
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newZip = e.target.value.replace(/\D/g, '').slice(0, 5);
    setLocalZipValue(newZip);
    
    if (newZip === '' || /^(15|16|17|18|19)\d{3}$/.test(newZip)) {
      handleValueChange(newZip);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="sm:w-1/3">
        <select
          value={selectedLocation.type}
          onChange={(e) => handleTypeChange(e.target.value as LocationType)}
          className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
        >
          <option value="city">City</option>
          <option value="county">County</option>
          <option value="zip">ZIP Code</option>
        </select>
      </div>
      
      <div className="relative sm:w-2/3">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        
        {selectedLocation.type === 'zip' ? (
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter ZIP code (e.g., 19019)"
            value={localZipValue}
            onChange={handleZipChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
          />
        ) : (
          <select
            value={selectedLocation.value}
            onChange={(e) => handleValueChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm appearance-none bg-white"
          >
            <option value="">
              All {selectedLocation.type === 'city' ? 'Cities' : 'Counties'}
            </option>
            {(selectedLocation.type === 'city' ? PA_CITIES : PA_COUNTIES).map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}