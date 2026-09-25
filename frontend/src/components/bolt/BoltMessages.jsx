import { useEffect, useRef } from 'react';
import BoltMessage from './BoltMessage';
import BoltTypingIndicator from './BoltTypingIndicator';

/**
 * BoltMessages — scrollable message list.
 * Auto-scrolls to the bottom on new messages.
 */
export default function BoltMessages({ messages, isLoading }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isLoading]);

  return (
    <div
      className="flex-1 space-y-4 overflow-y-auto px-4 py-5"
      role="log"
      aria-live="polite"
      aria-label="Chat with Bolt"
    >
      {messages.map((m) => (
        <BoltMessage key={m.id} message={m} />
      ))}
      {isLoading && (
        <div className="flex justify-start">
          <div className="rounded-lg bg-ink-soft">
            <BoltTypingIndicator />
          </div>
        </div>
      )}
      <div ref={endRef} />
    </div>
  );
}