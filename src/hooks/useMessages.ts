import { useState, useEffect } from 'react';
import { 
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  getDocs
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Message, MessageThread } from '../types/message';

interface SendMessageParams {
  threadId: string;
  content: string;
  recipientId: string;
}

export function useMessages(userId: string | undefined) {
  const [threads, setThreads] = useState<MessageThread[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    const threadsQuery = query(
      collection(db, 'messageThreads'),
      where('participants', 'array-contains', userId),
      orderBy('lastMessage.timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(
      threadsQuery,
      (snapshot) => {
        const newThreads = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as MessageThread[];
        setThreads(newThreads);
        setLoading(false);
      },
      (err) => {
        console.error('Error fetching threads:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  const sendMessage = async ({ threadId, content, recipientId }: SendMessageParams) => {
    if (!userId) throw new Error('User must be authenticated to send messages');

    try {
      const messageData = {
        threadId,
        content,
        senderId: userId,
        recipientId,
        timestamp: serverTimestamp(),
        read: false
      };

      await addDoc(collection(db, 'messages'), messageData);
    } catch (err) {
      console.error('Error sending message:', err);
      throw err;
    }
  };

  return {
    threads,
    messages,
    loading,
    error,
    sendMessage
  };
}