import { PRIVACY_SECTIONS } from '../../data/privacy';
import { cn } from '../../utils/cn';

export default function PrivacyTOC({ activeId }) {
  return (
    <nav aria-label="On this page" className="sticky top-24 hidden lg:block">
      <p className="caption mb-4">On this page</p>
      <ul className="space-y-1 border-l border-ink-line">
        {PRIVACY_SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                '-ml-px block border-l-2 py-2 pl-4 text-sm transition-colors',
                activeId === section.id
                  ? 'border-lime text-lime'
                  : 'border-transparent text-bone-dim hover:border-bone-dim hover:text-bone'
              )}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}