import { services } from '../../data/services';
import { cn } from '../../utils/cn';

export default function ServiceNav({ activeId }) {
  return (
    <nav aria-label="Services" className="sticky top-24 hidden lg:block">
      <p className="caption mb-4">On this page</p>
      <ul className="space-y-1 border-l border-ink-line">
        {services.map((service) => (
          <li key={service.id}>
            <a
              href={`#${service.id}`}
              className={cn(
                '-ml-px block border-l-2 py-2 pl-4 text-sm transition-colors',
                activeId === service.id
                  ? 'border-lime text-lime'
                  : 'border-transparent text-bone-dim hover:border-bone-dim hover:text-bone'
              )}
            >
              {service.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}