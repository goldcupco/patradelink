import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/context/AuthContext';

export function AuthCallback() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // Check for pending message
        const pendingMessage = sessionStorage.getItem('pendingMessage');
        const pendingTradesperson = sessionStorage.getItem('pendingTradesperson');
        
        if (pendingMessage && pendingTradesperson) {
          // Clear storage
          sessionStorage.removeItem('pendingMessage');
          sessionStorage.removeItem('pendingTradesperson');
          
          // Navigate back to the tradesperson page
          navigate(`/tradesperson/${pendingTradesperson}`);
        } else {
          navigate('/');
        }
      } else {
        navigate('/login');
      }
    }
  }, [loading, user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
}