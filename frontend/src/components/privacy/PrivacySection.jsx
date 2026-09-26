/**
 * PrivacySection — renders a single policy section from structured data.
 * Supports two content types: 'paragraph' and 'list'.
 */
export default function PrivacySection({ section }) {
  return (
    <section id={section.id} className="scroll-mt-24 border-t border-ink-line py-10 md:py-14">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl">
        {section.title}
      </h2>

      <div className="mt-6 space-y-5">
        {section.content.map((block, i) => {
          if (block.type === 'paragraph') {
            return (
              <p
                key={i}
                className="max-w-prose text-base leading-relaxed text-bone-dim"
              >
                {block.text}
              </p>
            );
          }

          if (block.type === 'list') {
            return (
              <ul key={i} className="space-y-4">
                {block.items.map((item, j) => (
                  <li key={j} className="grid gap-2 sm:grid-cols-12 sm:gap-6">
                    <div className="sm:col-span-4">
                      <span className="font-display text-sm font-semibold tracking-tight text-bone">
                        {item.term}
                      </span>
                    </div>
                    <div className="sm:col-span-8">
                      <p className="max-w-prose text-sm leading-relaxed text-bone-dim">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
}