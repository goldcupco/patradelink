import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPendingAction, clearPendingAction } from '../utils/storage';

export function useAuthRedirect() {
  const navigate = useNavigate();

  const handleAuthSuccess = useCallback(() => {
    const pendingAction = getPendingAction();
    
    if (pendingAction) {
      clearPendingAction();
      
      switch (pendingAction.type) {
        case 'message':
          navigate(`/tradesperson/${pendingAction.targetId}`, {
            state: { pendingMessage: pendingAction.data?.message }
          });
          break;
        case 'booking':
          navigate(`/booking/${pendingAction.targetId}`, {
            state: pendingAction.data
          });
          break;
        default:
          navigate('/');
      }
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleAuthError = useCallback((error: string) => {
    navigate('/error', { state: { error } });
  }, [navigate]);

  return {
    handleAuthSuccess,
    handleAuthError
  };
}