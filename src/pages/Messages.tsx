import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/context/AuthContext';
import { MessageList } from '../components/messages/MessageList';
import { MessageThread } from '../components/messages/MessageThread';
import { useMessages } from '../hooks/useMessages';
import type { MessageThread as MessageThreadType } from '../types/message';

export function Messages() {
  const { user } = useAuth();
  const { threads, loading, error } = useMessages(user?.uid);
  const [selectedThread, setSelectedThread] = useState<MessageThreadType | null>(null);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Please sign in to view your messages</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Error loading messages: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white rounded-lg shadow">
          <MessageList 
            threads={threads}
            selectedThreadId={selectedThread?.id}
            onThreadSelect={setSelectedThread}
          />
        </div>
        
        <div className="md:col-span-2 bg-white rounded-lg shadow">
          {selectedThread ? (
            <MessageThread thread={selectedThread} />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              Select a conversation to view messages
            </div>
          )}
        </div>
      </div>
    </div>
  );
}