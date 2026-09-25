import { cn } from '../../utils/cn';

/**
 * BoltMessage — one chat bubble.
 * User messages align right with lime accent; Bolt messages align left.
 */
export default function BoltMessage({ message }) {
  const isUser = message.role === 'user';
  const isError = message.isError === true;

  return (
    <div
      className={cn(
        'flex w-full',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          'max-w-[85%] rounded-lg px-4 py-3 text-sm leading-relaxed',
          isUser
            ? 'bg-lime text-ink'
            : isError
              ? 'border border-signal-red/30 bg-signal-red/5 text-bone-dim'
              : 'bg-ink-soft text-bone-dim'
        )}
      >
        {message.content}
      </div>
    </div>
  );
}