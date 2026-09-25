import { cn } from '../../utils/cn';

/**
 * SectionHeading — eyebrow + title + optional description, consistently styled.
 * Variants: 'default' (left), 'center'.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  as: Heading = 'h2',
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      {title && (
        <Heading className="text-display-md text-balance text-bone">
          {title}
        </Heading>
      )}
      {description && (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-bone-dim',
            align === 'center' ? 'mx-auto max-w-prose' : 'max-w-prose'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}