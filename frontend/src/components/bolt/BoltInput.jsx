import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { cn } from '../../utils/cn';

const MAX_LENGTH = 500;

/**
 * BoltInput — textarea + send button.
 * Enter sends, Shift+Enter adds a newline.
 */
export default function BoltInput({ onSend, disabled }) {
  const [value, setValue] = useState('');
  const textareaRef = useRef(null);

  // Auto-focus when the panel opens (parent controls mounting)
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="border-t border-ink-line px-4 py-3">
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value.slice(0, MAX_LENGTH))}
          onKeyDown={handleKeyDown}
          placeholder="Ask Bolt a question…"
          rows={1}
          disabled={disabled}
          aria-label="Message Bolt"
          className={cn(
            'flex-1 resize-none rounded border border-ink-line bg-ink-soft/60 px-3 py-2.5 text-sm text-bone placeholder:text-bone-faint',
            'focus:border-lime/50 focus:outline-none',
            'disabled:opacity-60',
            'max-h-32'
          )}
          style={{ minHeight: '42px' }}
        />
        <button
          type="button"
          onClick={submit}
          disabled={disabled || !value.trim()}
          aria-label="Send message"
          className={cn(
            'flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded transition-colors',
            !value.trim() || disabled
              ? 'bg-ink-mute text-bone-faint cursor-not-allowed'
              : 'bg-lime text-ink hover:bg-lime-soft'
          )}
        >
          <Send size={16} aria-hidden="true" />
        </button>
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-bone-faint">
        <span>Enter to send, Shift+Enter for new line</span>
        <span>{value.length}/{MAX_LENGTH}</span>
      </div>
    </div>
  );
}