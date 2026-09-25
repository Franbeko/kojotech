import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../../components/ui/Container';
import WhatsAppCTA from '../../components/shared/WhatsAppCTA';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function FaqCTA() {
  return (
    <section className="pb-24">
      <Container>
        <div className="rounded-xl border border-ink-line bg-ink-soft/60 p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-12 md:items-center md:gap-10">
            <div className="md:col-span-8">
              <p className="eyebrow mb-3">Still have questions?</p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl">
                Ask directly.
              </h2>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-bone-dim">
                If your question is not answered here, reach out — you will get
                a direct response, not a sales pitch.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <Link to="/contact" className="btn-primary px-4 py-2.5 text-sm">
                Start a Project
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <WhatsAppCTA
                variant="ghost"
                size="md"
                message={WhatsAppMessages.general}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}