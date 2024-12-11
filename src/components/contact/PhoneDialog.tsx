import React from 'react';
import { Phone, X } from 'lucide-react';

interface PhoneDialogProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
}

export function PhoneDialog({ isOpen, onClose, phoneNumber }: PhoneDialogProps) {
  if (!isOpen) return null;

  const formattedPhone = phoneNumber.replace(/\D/g, '');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Contact Phone</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <Phone className="h-6 w-6 text-red-600" />
          <a
            href={`tel:${formattedPhone}`}
            className="text-xl font-medium text-gray-900 hover:text-red-600 transition-colors"
          >
            {phoneNumber}
          </a>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>Click the number to call directly, or copy it to your clipboard.</p>
        </div>
      </div>
    </div>
  );
}