```tsx
import React from 'react';
import { ContactButtons } from '../contact/ContactButtons';

interface ContactActionsProps {
  onContactClick: () => void;
  phone: string;
  email: string;
}

export function ContactActions({ onContactClick, phone, email }: ContactActionsProps) {
  return (
    <div className="mt-4 flex justify-between items-center">
      <button 
        onClick={onContactClick}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        aria-label="Contact Now"
      >
        Contact Now
      </button>
      <ContactButtons phone={phone} email={email} />
    </div>
  );
}
```