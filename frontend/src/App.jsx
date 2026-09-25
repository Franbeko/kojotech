import RootLayout from './layouts/RootLayout';
import BrandMark from './components/ui/BrandMark';
import { cn } from './utils/cn';

export default function App() {
  return (
    <RootLayout>
      {/* Temporary Phase 2 showcase — verifies fonts, colors, tokens, animations */}
      <div className="shell flex min-h-screen flex-col items-center justify-center py-20">
        <div className="w-full max-w-3xl">
          {/* Brand row */}
          <div className="mb-12 flex items-center gap-4">
            <BrandMark size="lg" />
            <div>
              <div className="font-display text-2xl font-semibold tracking-tight">
                KojoTech
              </div>
              <div className="caption">Phase 2 · Design System</div>
            </div>
          </div>

          {/* Hero type */}
          <p className="eyebrow mb-4">Building Digital Solutions</p>
          <h1 className="text-display-lg text-balance text-bone">
            A technology brand for{' '}
            <span className="text-lime">modern digital work</span>.
          </h1>

          <p className="mt-6 max-w-prose text-base leading-relaxed text-bone-dim">
            This is a temporary verification page. Once Phase 3 begins, this
            will become the KojoTech homepage. Everything you see here — the
            ink background, the electric lime accent, the blueprint grid,
            the three font families — is what the entire site will be built on.
          </p>

          {/* Signal line divider */}
          <div className="signal-line my-12" />

          {/* Color tokens preview */}
          <div className="mb-10">
            <div className="caption mb-4">Color tokens</div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Swatch label="ink" className="bg-ink border border-ink-line" text="text-bone" />
              <Swatch label="bone" className="bg-bone" text="text-ink" />
              <Swatch label="lime" className="bg-lime" text="text-ink" />
              <Swatch label="steel" className="bg-steel" text="text-bone" />
            </div>
          </div>

          {/* Typography preview */}
          <div className="mb-10">
            <div className="caption mb-4">Typography</div>
            <div className="space-y-3">
              <div className="font-display text-3xl">Space Grotesk · Display</div>
              <div className="font-sans text-lg">Inter · Body copy</div>
              <div className="font-mono text-sm text-lime">
                JetBrains Mono · Code / labels
              </div>
            </div>
          </div>

          {/* Button preview */}
          <div>
            <div className="caption mb-4">Buttons (foundation)</div>
            <div className="flex flex-wrap gap-3">
              <button className="btn-primary">Start a Project</button>
              <button className="btn-ghost">Explore Work</button>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

function Swatch({ label, className, text }) {
  return (
    <div
      className={cn(
        'flex h-20 flex-col justify-end rounded p-3 font-mono text-[10px] uppercase tracking-widest',
        className,
        text
      )}
    >
      {label}
    </div>
  );
}