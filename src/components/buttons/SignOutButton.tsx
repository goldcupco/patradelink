import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../auth/context/AuthContext';

export function SignOutButton() {
  const { logout } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
      aria-label="Sign out"
    >
      <LogOut className="h-4 w-4 mr-2" />
      <span>Sign Out</span>
    </button>
  );
}