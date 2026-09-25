import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import WhatsAppCTA from '../shared/WhatsAppCTA';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function FormSuccess({ name, onReset }) {
  return (
    <div className="rounded-lg border border-lime/30 bg-lime/5 p-8 md:p-12">
      <CheckCircle2
        size={36}
        className="mb-5 text-lime"
        aria-hidden="true"
      />

      <h2 className="font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl">
        Message received{name ? `, ${name.split(' ')[0]}` : ''}.
      </h2>

      <p className="mt-4 max-w-prose text-sm leading-relaxed text-bone-dim">
        Thanks for reaching out. Your inquiry has been received and you will
        get a response within 24–48 hours. If it is urgent, WhatsApp is the
        fastest way to reach KojoTech.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <WhatsAppCTA
          variant="primary"
          size="md"
          message={WhatsAppMessages.general}
        />
        <button
          type="button"
          onClick={onReset}
          className="btn-ghost px-5 py-3 text-sm"
        >
          Send another message
        </button>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-1 py-3 text-sm text-bone-dim transition-colors hover:text-lime"
        >
          Back to home
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}