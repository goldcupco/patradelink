import React from 'react';
import { LogIn } from 'lucide-react';
import { useAuth } from '../../auth/context/AuthContext';

export function SignInButton() {
  const { login } = useAuth();

  const handleSignIn = () => {
    // Open sign in modal instead of direct login
    const event = new CustomEvent('openAuthModal', { detail: { isSignIn: true } });
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleSignIn}
      className="flex items-center px-4 py-2 text-white hover:text-gray-200 transition-colors"
      aria-label="Sign in"
    >
      <LogIn className="h-4 w-4 mr-2" />
      <span>Sign In</span>
    </button>
  );
}