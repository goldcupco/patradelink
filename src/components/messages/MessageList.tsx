import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import type { MessageThread } from '../../types/message';

interface MessageListProps {
  threads: MessageThread[];
  selectedThreadId?: string;
  onThreadSelect: (thread: MessageThread) => void;
}

export function MessageList({ threads, selectedThreadId, onThreadSelect }: MessageListProps) {
  if (threads.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No messages yet
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {threads.map(thread => (
        <button
          key={thread.id}
          onClick={() => onThreadSelect(thread)}
          className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
            thread.id === selectedThreadId ? 'bg-gray-50' : ''
          }`}
        >
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium text-gray-900">
              {thread.lastMessage.recipientId}
            </h3>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(thread.lastMessage.timestamp, { addSuffix: true })}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 truncate">
            {thread.lastMessage.content}
          </p>
          
          {thread.unreadCount > 0 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              {thread.unreadCount}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}