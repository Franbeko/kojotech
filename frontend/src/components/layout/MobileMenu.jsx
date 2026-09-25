import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import BrandMark from '../ui/BrandMark';
import WhatsAppCTA from '../shared/WhatsAppCTA';
import { primaryNav } from '../../data/nav';
import { cn } from '../../utils/cn';

export default function MobileMenu({ open, onClose }) {
  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-50 md:hidden',
        open ? 'pointer-events-auto' : 'pointer-events-none'
      )}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-ink/80 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0'
        )}
      />

      {/* Panel */}
      <div
        className={cn(
          'absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-ink-soft border-l border-ink-line p-6 transition-transform duration-300 ease-out-expo',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
            <BrandMark size="md" />
            <span className="font-display text-lg font-semibold tracking-tight">
              KojoTech
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-bone-dim hover:text-bone"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-1" aria-label="Mobile primary">
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'rounded px-3 py-3 text-lg font-display tracking-tight transition-colors',
                  isActive
                    ? 'text-lime'
                    : 'text-bone hover:text-lime'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto space-y-3 pt-8">
          <Link
            to="/contact"
            onClick={onClose}
            className="btn-primary w-full py-3"
          >
            Start a Project
          </Link>
          <WhatsAppCTA
            variant="ghost"
            size="md"
            className="w-full py-3"
            message="Hello KojoTech, I'd like to discuss a project."
          />
        </div>
      </div>
    </div>
  );
}