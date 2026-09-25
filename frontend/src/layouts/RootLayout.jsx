import { Outlet } from 'react-router-dom';

/**
 * RootLayout — top-level shell applied to every route.
 * Phase 2: minimal wrapper. Header/Footer arrive in Phase 3.
 */
export default function RootLayout() {
  return (
    <div className="relative min-h-screen bg-ink text-bone">
      {/* Subtle blueprint grid overlay — part of KojoTech's visual identity */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-grid-dot bg-dot-24 opacity-40"
      />

      {/* Content stack */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}