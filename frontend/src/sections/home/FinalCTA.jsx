import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../../components/ui/Container';
import WhatsAppCTA from '../../components/shared/WhatsAppCTA';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { WhatsAppMessages } from '../../utils/whatsapp';
import { cn } from '../../utils/cn';

export default function FinalCTA() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section pb-8">
      <Container>
        <div
          ref={ref}
          className={cn(
            'relative overflow-hidden rounded-xl border border-ink-line bg-ink-soft/60 p-8 md:p-14 lg:p-20 transition-all duration-700 ease-out-expo',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {/* Blueprint grid accent */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-grid-ink bg-grid-40 opacity-30"
          />
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-lime/10 blur-3xl"
          />

          <div className="relative">
            <p className="eyebrow mb-5">Have an idea?</p>
            <h2 className="text-display-lg max-w-3xl text-balance text-bone">
              Let&apos;s build it.
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-bone-dim">
              Tell KojoTech what you have in mind. Even a rough idea is enough
              to start the conversation.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary px-5 py-3">
                Start a Project
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <WhatsAppCTA
                variant="ghost"
                size="lg"
                message={WhatsAppMessages.general}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}