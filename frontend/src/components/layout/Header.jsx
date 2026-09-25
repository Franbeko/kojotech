import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Container from '../ui/Container';
import BrandMark from '../ui/BrandMark';
import MobileMenu from './MobileMenu';
import { primaryNav } from '../../data/nav';
import { cn } from '../../utils/cn';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300 ease-out-expo',
          scrolled
            ? 'border-b border-ink-line bg-ink/80 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5"
            aria-label="KojoTech home"
          >
            <BrandMark size="md" />
            <span className="font-display text-lg font-semibold tracking-tight">
              KojoTech
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {primaryNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'text-lime'
                      : 'text-bone-dim hover:text-bone'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn-primary px-4 py-2 text-sm"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden -mr-2 p-2 text-bone"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={24} />
          </button>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}