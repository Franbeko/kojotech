import { useEffect } from 'react';
import { cn } from '../../utils/cn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import BoltHeader from './BoltHeader';
import BoltMessages from './BoltMessages';
import BoltSuggestions from './BoltSuggestions';
import BoltInput from './BoltInput';
import BoltFooter from './BoltFooter';

/**
 * BoltPanel — the chat window.
 * Desktop: fixed panel bottom-right (400×600).
 * Mobile: full-screen sheet.
 */
export default function BoltPanel({
  isOpen,
  onClose,
  onReset,
  messages,
  suggestions,
  isLoading,
  sendMessage,
  hasMessages,
}) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  // Escape closes the panel
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Lock body scroll on mobile when open
  useEffect(() => {
    if (!isOpen || !isMobile) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen, isMobile]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="KojoTech Bolt chat"
      aria-hidden={!isOpen}
      className={cn(
        'fixed z-50 flex flex-col overflow-hidden border border-ink-line bg-ink shadow-2xl',
        // Mobile: full-screen sheet
        isMobile &&
          'inset-0 h-full w-full rounded-none border-0 transition-transform duration-300',
        isMobile && (isOpen ? 'translate-y-0' : 'pointer-events-none translate-y-full'),
        // Desktop: docked bottom-right
        !isMobile &&
          'bottom-6 right-6 h-[600px] w-[400px] rounded-xl transition-all duration-300 ease-out-expo',
        !isMobile && (isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0')
      )}
    >
      <BoltHeader onClose={onClose} onReset={onReset} hasMessages={hasMessages} />

      <BoltMessages messages={messages} isLoading={isLoading} />

      {!hasMessages && (
        <BoltSuggestions
          suggestions={suggestions}
          onSelect={(s) => sendMessage(s)}
          disabled={isLoading}
        />
      )}

      <BoltInput onSend={sendMessage} disabled={isLoading} />

      {hasMessages && <BoltFooter />}
    </div>
  );
}