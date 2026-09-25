import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const FormSelect = forwardRef(function FormSelect(
  { label, name, options = [], placeholder, error, required, className, ...rest },
  ref
) {
  const id = `field-${name}`;

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

      <div className="relative">
        <select
          id={id}
          name={name}
          ref={ref}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            'w-full appearance-none rounded border bg-ink-soft/60 px-4 py-3 pr-10 text-sm text-bone transition-colors',
            'focus:border-lime/50 focus:outline-none',
            error
              ? 'border-signal-red/60 focus:border-signal-red'
              : 'border-ink-line'
          )}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-bone-faint"
          aria-hidden="true"
        />
      </div>

      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-signal-red">
          {error}
        </p>
      )}
    </div>
  );
});

export default FormSelect;