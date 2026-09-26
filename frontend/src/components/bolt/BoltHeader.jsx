import { X, RotateCcw } from 'lucide-react';
import BrandMark from '../ui/BrandMark';

/**
 * BoltHeader — panel header with close + reset controls.
 * Uses the KojoTech brand mark as the avatar.
 */
export default function BoltHeader({ onClose, onReset, hasMessages }) {
  return (
    <header className="flex items-center justify-between border-b border-ink-line px-4 py-3">
      <div className="flex items-center gap-2.5">
        <div className="relative">
          <BrandMark size="md" />
          {/* Online dot */}
          <span
            aria-hidden="true"
            className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-lime"
          />
        </div>
        <div>
          <p className="font-display text-sm font-semibold tracking-tight text-bone">
            Bolt
          </p>
          <p className="text-[10px] text-bone-faint">
            KojoTech AI assistant
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {hasMessages && (
          <button
            type="button"
            onClick={onReset}
            className="rounded p-2 text-bone-faint transition-colors hover:text-bone"
            aria-label="Reset conversation"
            title="Start a new conversation"
          >
            <RotateCcw size={14} />
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          className="rounded p-2 text-bone-faint transition-colors hover:text-bone"
          aria-label="Close Bolt"
        >
          <X size={16} />
        </button>
      </div>
    </header>
  );
}