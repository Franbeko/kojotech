import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

/**
 * FormField — labeled input or textarea with error display.
 * Uses forwardRef so React Hook Form can register the field.
 */
const FormField = forwardRef(function FormField(
  {
    as = 'input',
    label,
    name,
    error,
    hint,
    required,
    rows = 5,
    className,
    ...rest
  },
  ref
) {
  const id = `field-${name}`;
  const describedBy = [
    error ? `${id}-error` : null,
    hint ? `${id}-hint` : null,
  ]
    .filter(Boolean)
    .join(' ') || undefined;

  const Tag = as;

  return (
    <div className={cn('flex flex-col', className)}>
      <label
        htmlFor={id}
        className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-bone-dim"
      >
        {label}
        {required && (
          <span className="ml-1 text-lime" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <Tag
        id={id}
        name={name}
        ref={ref}
        rows={as === 'textarea' ? rows : undefined}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={describedBy}
        className={cn(
          'w-full rounded border bg-ink-soft/60 px-4 py-3 text-sm text-bone placeholder:text-bone-faint transition-colors',
          'focus:border-lime/50 focus:outline-none',
          error
            ? 'border-signal-red/60 focus:border-signal-red'
            : 'border-ink-line'
        )}
        {...rest}
      />

      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-xs text-bone-faint">
          {hint}
        </p>
      )}

      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-signal-red">
          {error}
        </p>
      )}
    </div>
  );
});

export default FormField;