import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import type { Tradesperson } from '../data/tradespeople';
import { useAuth } from '../auth/context/AuthContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  tradesperson: Tradesperson;
}

export function ContactModal({ isOpen, onClose, tradesperson }: ContactModalProps) {
  const [message, setMessage] = useState('');
  const { user, login } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      // Save message in session storage for after login
      sessionStorage.setItem('pendingMessage', message);
      sessionStorage.setItem('pendingTradesperson', tradesperson.id);
      
      // Redirect to login
      login(message, tradesperson.id);
      return;
    }

    // Here you would typically send the message to your backend
    console.log('Sending message:', {
      to: tradesperson.name,
      from: user.email,
      message: message
    });

    // Clear form and close modal
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Contact {tradesperson.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Average response time: {tradesperson.responseTime}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your project or issue..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
            >
              <Send className="h-4 w-4 mr-2" />
              {user ? 'Send Message' : 'Sign in to Send'}
            </button>
          </div>
        </form>

        {!user && (
          <p className="mt-4 text-sm text-gray-600 text-center">
            You'll need to sign in to contact tradespeople. Your message will be saved.
          </p>
        )}
      </div>
    </div>
  );
}