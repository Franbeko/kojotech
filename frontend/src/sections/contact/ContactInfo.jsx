import { Mail } from 'lucide-react';
import InstagramIcon from '../../components/ui/icons/InstagramIcon';
import WhatsAppCTA from '../../components/shared/WhatsAppCTA';
import { site } from '../../config/site';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function ContactInfo() {
  return (
    <aside className="space-y-8">
      {/* WhatsApp — primary */}
      <div className="rounded-lg border border-ink-line bg-ink-soft/60 p-6">
        <p className="eyebrow mb-3">Fastest</p>
        <h3 className="font-display text-lg font-semibold tracking-tight text-bone">
          WhatsApp
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-bone-dim">
          Prefer to chat? Message KojoTech directly on WhatsApp.
        </p>
        <div className="mt-5">
          <WhatsAppCTA
            variant="primary"
            size="md"
            message={WhatsAppMessages.general}
          />
        </div>
      </div>

      {/* Email + Instagram */}
      <div className="rounded-lg border border-ink-line bg-ink-soft/60 p-6">
        <p className="eyebrow mb-3">Other ways</p>
        <ul className="space-y-4">
          <li>
            <a
              href={`mailto:${site.contact.email}`}
              className="group flex items-start gap-3 text-sm text-bone-dim transition-colors hover:text-bone"
            >
              <Mail
                size={16}
                className="mt-0.5 shrink-0 text-lime"
                aria-hidden="true"
              />
              <span className="break-all">{site.contact.email}</span>
            </a>
          </li>
          <li>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 text-sm text-bone-dim transition-colors hover:text-bone"
            >
              <InstagramIcon
                size={16}
                className="mt-0.5 shrink-0 text-lime"
              />
              <span>@kojotechofficial</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Response expectation */}
      <div className="rounded-lg border border-dashed border-ink-line p-6">
        <p className="caption mb-3">Response time</p>
        <p className="text-sm leading-relaxed text-bone-dim">
          You will get a personal reply within 24–48 hours — usually sooner.
          Every inquiry gets a direct answer, not an automated one.
        </p>
      </div>
    </aside>
  );
}