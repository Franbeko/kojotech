import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useBolt } from '../../hooks/useBolt';
import BoltPanel from './BoltPanel';
import BrandMark from '../ui/BrandMark';

/**
 * BoltLauncher — floating button + Bolt panel orchestrator.
 * Mounted once in RootLayout so it appears on every page.
 *
 * `readyToPulse` is derived: it becomes true 3s after mount, and hides
 * automatically once the panel is opened. No effect-driven setState.
 */
export default function BoltLauncher() {
    const {
        isOpen,
        close,
        toggle,
        messages,
        suggestions,
        isLoading,
        sendMessage,
        reset,
        hasMessages,
    } = useBolt();

    // Timed flag: becomes true 3s after mount, stays true.
    // We do NOT reset it — the "is the panel open?" check below handles visibility.
    const [readyToPulse, setReadyToPulse] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setReadyToPulse(true), 3000);
        return () => clearTimeout(t);
    }, []);

    // Derived: pulse only when ready AND panel is closed.
    const showPulse = readyToPulse && !isOpen;

    return (
        <>
            <BoltPanel
                isOpen={isOpen}
                onClose={close}
                onReset={reset}
                messages={messages}
                suggestions={suggestions}
                isLoading={isLoading}
                sendMessage={sendMessage}
                hasMessages={hasMessages}
            />

            {/* Floating launcher button */}
            <button
                type="button"
                onClick={toggle}
                aria-label={isOpen ? 'Close Bolt' : 'Open Bolt'}
                aria-expanded={isOpen}
                aria-controls="bolt-panel"
                className={cn(
                    'fixed z-40 flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink shadow-lift transition-all duration-300 ease-out-expo',
                    'bottom-6 right-6',
                    'hover:bg-lime-soft hover:scale-105',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime',
                    showPulse && 'animate-pulse-soft',
                    // Hide behind full-screen panel on mobile when open
                    isOpen &&
                    'md:opacity-100 opacity-0 pointer-events-none md:pointer-events-auto'
                )}
            >
                {isOpen ? (
                    <X size={22} aria-hidden="true" />
                ) : (
                    <>
                        <MessageCircle size={22} aria-hidden="true" />
                        {/* Small brand badge — replaces the "B" letter */}
                        <span
                            aria-hidden="true"
                            className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border-2 border-ink"
                        >
                            <BrandMark size="sm" />
                        </span>
                    </>
                )}
            </button>
        </>
    );
}