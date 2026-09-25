import { Check } from 'lucide-react';

/**
 * CaseStudyMeta — renders Features + Tech lists side by side.
 */
export default function CaseStudyMeta({ features, tech }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {features && features.length > 0 && (
        <div>
          <p className="caption mb-4">Features</p>
          <ul className="space-y-3">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  size={16}
                  className="mt-1 shrink-0 text-lime"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-bone-dim">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tech && tech.length > 0 && (
        <div>
          <p className="caption mb-4">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-ink-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}