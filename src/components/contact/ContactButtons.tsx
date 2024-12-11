import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface ContactButtonsProps {
  phone: string;
  email: string;
}

export function ContactButtons({ phone, email }: ContactButtonsProps) {
  const handlePhoneClick = () => {
    window.location.href = `tel:${phone.replace(/\D/g, '')}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="flex items-center space-x-4" data-testid="contact-buttons">
      <Tooltip content={phone}>
        <button
          onClick={handlePhoneClick}
          className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={`Call ${phone}`}
        >
          <Phone className="h-5 w-5" />
        </button>
      </Tooltip>
      <Tooltip content={email}>
        <button
          onClick={handleEmailClick}
          className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
          aria-label={`Email ${email}`}
        >
          <Mail className="h-5 w-5" />
        </button>
      </Tooltip>
    </div>
  );
}