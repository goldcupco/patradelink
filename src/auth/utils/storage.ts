import type { PendingAction } from '../types/auth';

const PENDING_ACTION_KEY = 'pendingAuthAction';

export function savePendingAction(action: PendingAction): void {
  try {
    sessionStorage.setItem(PENDING_ACTION_KEY, JSON.stringify(action));
  } catch (error) {
    console.error('Failed to save pending action:', error);
  }
}

export function getPendingAction(): PendingAction | null {
  try {
    const data = sessionStorage.getItem(PENDING_ACTION_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to get pending action:', error);
    return null;
  }
}

export function clearPendingAction(): void {
  try {
    sessionStorage.removeItem(PENDING_ACTION_KEY);
  } catch (error) {
    console.error('Failed to clear pending action:', error);
  }
}