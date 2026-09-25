import { Quote } from 'lucide-react';

/**
 * TestimonialPlaceholder — honest empty state.
 * Replaced by real testimonials as they become available.
 * Does NOT fabricate client statements.
 */
export default function TestimonialPlaceholder() {
  return (
    <div className="rounded-lg border border-dashed border-ink-line bg-ink-soft/40 p-8 md:p-12">
      <Quote size={28} className="mb-4 text-lime/60" aria-hidden="true" />
      <p className="text-base leading-relaxed text-bone-dim md:text-lg">
        KojoTech is early in its journey. Real client stories will appear here
        as projects go live — not invented ones.
      </p>
      <p className="mt-4 caption">
        If you would like to be among the first, we would love to hear about your project.
      </p>
    </div>
  );
}