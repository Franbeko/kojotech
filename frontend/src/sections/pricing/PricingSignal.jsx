import { Link } from 'react-router-dom';
import { ArrowRight, Info } from 'lucide-react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import PricingTier from '../../components/pricing/PricingTier';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { pricingTiers, pricingFooter } from '../../data/pricing';
import { cn } from '../../utils/cn';

export default function PricingSignal() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Pricing signals"
            title="What projects typically cost."
            description="Every project is different — but we want you to have a real starting point before you reach out. Here is what similar work has looked like."
          />
        </div>

        <div
          ref={ref}
          className={cn(
            'grid gap-4 transition-all duration-700 ease-out-expo md:grid-cols-3',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {pricingTiers.map((tier) => (
            <PricingTier key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Footnote — scope disclaimer */}
        <div className="mt-10 flex items-start gap-3 rounded-lg border border-dashed border-ink-line bg-ink-soft/30 p-5 md:items-center md:gap-4 md:p-6">
          <Info
            size={16}
            className="mt-0.5 shrink-0 text-lime md:mt-0"
            aria-hidden="true"
          />
          <p className="max-w-prose text-sm leading-relaxed text-bone-dim">
            {pricingFooter.note}{' '}
            <span className="text-bone">{pricingFooter.guarantee}</span>
          </p>
        </div>

        {/* Not-sure CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-ink-line bg-ink-soft/40 p-8 md:flex-row md:items-center md:p-10">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Not sure where you fit?</p>
            <h3 className="font-display text-xl font-semibold tracking-tight text-bone md:text-2xl">
              {pricingFooter.notSure.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bone-dim">
              {pricingFooter.notSure.description}
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-primary shrink-0 px-5 py-3 text-sm"
          >
            {pricingFooter.notSure.cta}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}