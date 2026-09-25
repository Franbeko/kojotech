import { AlertCircle } from 'lucide-react';
import WhatsAppCTA from '../shared/WhatsAppCTA';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function FormError({ message, onRetry }) {
  return (
    <div
      role="alert"
      className="rounded-lg border border-signal-red/40 bg-signal-red/5 p-6"
    >
      <div className="flex items-start gap-3">
        <AlertCircle
          size={20}
          className="mt-0.5 shrink-0 text-signal-red"
          aria-hidden="true"
        />
        <div className="flex-1">
          <p className="text-sm font-medium text-bone">
            Could not send your message
          </p>
          <p className="mt-1 text-sm leading-relaxed text-bone-dim">
            {message ||
              'Something went wrong. You can try again, or reach KojoTech directly through WhatsApp.'}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="btn-primary px-4 py-2 text-sm"
              >
                Try again
              </button>
            )}
            <WhatsAppCTA
              variant="ghost"
              size="md"
              message={WhatsAppMessages.general}
            />
          </div>
        </div>
      </div>
    </div>
  );
}