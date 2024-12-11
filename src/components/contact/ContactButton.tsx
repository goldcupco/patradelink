import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface ContactButtonProps {
  icon: LucideIcon;
  label: string;
  tooltipContent: string;
  onClick: () => void;
}

export function ContactButton({ icon: Icon, label, tooltipContent, onClick }: ContactButtonProps) {
  return (
    <Tooltip content={tooltipContent}>
      <button
        onClick={onClick}
        className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
        aria-label={label}
        data-testid="contact-button"
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </button>
    </Tooltip>
  );
}