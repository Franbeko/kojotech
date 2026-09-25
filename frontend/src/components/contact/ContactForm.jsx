import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import FormField from './FormField';
import FormSelect from './FormSelect';
import FormSuccess from './FormSuccess';
import FormError from './FormError';
import { submitContactForm } from '../../services/contactService';
import {
  projectTypes,
  budgetRanges,
  contactMethods,
} from '../../data/contact';

/* ---------------- Validation schema ---------------- */

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.')
    .max(100, 'Name is too long.'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required.')
    .email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .max(30, 'Phone number is too long.')
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .trim()
    .max(120, 'Company name is too long.')
    .optional()
    .or(z.literal('')),
  projectType: z
    .string()
    .min(1, 'Please choose a project type.'),
  budget: z.string().optional().or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(20, 'Please describe your project in at least 20 characters.')
    .max(5000, 'Message is too long (max 5000 characters).'),
  preferredContact: z
    .string()
    .min(1, 'Please choose a preferred contact method.'),
});

/* ---------------- Component ---------------- */

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [serverError, setServerError] = useState(null);
  const [submittedName, setSubmittedName] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      message: '',
      preferredContact: 'email',
    },
  });

  const onSubmit = async (data) => {
    setStatus('submitting');
    setServerError(null);
    try {
      const payload = {
        ...data,
        source: 'website-contact-form',
      };
      await submitContactForm(payload);
      setSubmittedName(data.name);
      setStatus('success');
    } catch (error) {
      const msg =
        error?.message ||
        error?.response?.data?.message ||
        'Something went wrong. Please try again.';
      setServerError(msg);
      setStatus('error');
    }
  };

  const handleReset = () => {
    reset();
    setStatus('idle');
    setServerError(null);
    setSubmittedName('');
  };

  const handleRetry = () => {
    // Re-submit with current values
    handleSubmit(onSubmit)();
  };

  /* ---------------- Success state ---------------- */
  if (status === 'success') {
    return <FormSuccess name={submittedName} onReset={handleReset} />;
  }

  /* ---------------- Form ---------------- */
  const disabled = isSubmitting || status === 'submitting';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
      aria-busy={disabled}
    >
      {status === 'error' && (
        <FormError message={serverError} onRetry={handleRetry} />
      )}

      {/* Row 1: name + email */}
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Full name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          error={errors.name?.message}
          {...register('name')}
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      {/* Row 2: phone + company */}
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="Phone / WhatsApp"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Optional"
          hint="Optional — used only if you prefer WhatsApp or a call."
          error={errors.phone?.message}
          {...register('phone')}
        />
        <FormField
          label="Company / Business"
          name="company"
          autoComplete="organization"
          placeholder="Optional"
          error={errors.company?.message}
          {...register('company')}
        />
      </div>

      {/* Row 3: project type + budget */}
      <div className="grid gap-6 sm:grid-cols-2">
        <FormSelect
          label="Project type"
          name="projectType"
          required
          placeholder="Choose one…"
          options={projectTypes}
          error={errors.projectType?.message}
          {...register('projectType')}
        />
        <FormSelect
          label="Budget range"
          name="budget"
          placeholder="Choose a range (optional)"
          options={budgetRanges}
          error={errors.budget?.message}
          {...register('budget')}
        />
      </div>

      {/* Message */}
      <FormField
        as="textarea"
        label="Project description"
        name="message"
        required
        rows={6}
        placeholder="Tell us about your project — what you're building, who it's for, and what success looks like."
        hint="A few sentences is enough. Even a rough idea works."
        error={errors.message?.message}
        {...register('message')}
      />

      {/* Preferred contact */}
      <fieldset>
        <legend className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-bone-dim">
          Preferred contact method
        </legend>
        <div className="flex flex-wrap gap-2">
          {contactMethods.map((method) => (
            <label
              key={method.value}
              className="group relative flex cursor-pointer items-center gap-2 rounded border border-ink-line px-3 py-2 text-sm text-bone-dim transition-colors hover:border-bone-dim has-[:checked]:border-lime has-[:checked]:bg-lime/10 has-[:checked]:text-lime"
            >
              <input
                type="radio"
                value={method.value}
                className="sr-only"
                {...register('preferredContact')}
              />
              {method.label}
            </label>
          ))}
        </div>
        {errors.preferredContact && (
          <p className="mt-2 text-xs text-signal-red">
            {errors.preferredContact.message}
          </p>
        )}
      </fieldset>

      {/* Submit */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={disabled}
          className="btn-primary px-6 py-3 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {disabled ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Send message'
          )}
        </button>

        <p className="text-xs text-bone-faint">
          You will get a response within 24–48 hours.
        </p>
      </div>
    </form>
  );
}