import { MessageCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import { buildWhatsAppURL } from '../../config/site';

/**
 * WhatsAppCTA — opens a WhatsApp chat with optional pre-filled message.
 *
 * @param {string} message — pre-filled text
 * @param {'primary'|'ghost'|'link'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} showIcon
 */
export default function WhatsAppCTA({
  message = "Hello KojoTech, I'd like to discuss a project.",
  variant = 'primary',
  size = 'md',
  showIcon = true,
  className,
  children = 'Chat on WhatsApp',
}) {
  const href = buildWhatsAppURL(message);

  const base =
    'inline-flex items-center justify-center gap-2 rounded font-medium transition-all duration-200 ease-out-expo';

  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
  };

  const variants = {
    primary:
      'bg-lime text-ink hover:bg-lime-soft hover:shadow-glow-lime',
    ghost:
      'border border-ink-line text-bone hover:border-bone-dim hover:bg-ink-soft',
    link: 'text-lime underline underline-offset-4 hover:text-lime-soft px-0 py-0',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, sizes[size], variants[variant], className)}
      aria-label="Contact KojoTech on WhatsApp"
    >
      {showIcon && <MessageCircle size={16} aria-hidden="true" />}
      {children}
    </a>
  );
}