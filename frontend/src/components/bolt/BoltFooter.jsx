import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import WhatsAppCTA from '../shared/WhatsAppCTA';
import { WhatsAppMessages } from '../../utils/whatsapp';

/**
 * BoltFooter — persistent CTAs inside Bolt.
 * Shown after the first user message so the initial view stays clean.
 */
export default function BoltFooter() {
  return (
    <div className="border-t border-ink-line px-4 py-3">
      <p className="caption mb-3">Prefer to talk?</p>
      <div className="flex flex-wrap items-center gap-2">
        <WhatsAppCTA
          variant="ghost"
          size="sm"
          message={WhatsAppMessages.fromBolt || WhatsAppMessages.general}
        >
          WhatsApp
        </WhatsAppCTA>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 rounded border border-ink-line px-3 py-2 text-xs text-bone-dim transition-colors hover:border-lime/50 hover:text-lime"
        >
          Start a project
          <ArrowUpRight size={12} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}