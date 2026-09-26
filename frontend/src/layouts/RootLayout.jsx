import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BoltLauncher from '../components/bolt/BoltLauncher';
import WhatsAppFloating from '../components/shared/WhatsAppFloating';

export default function RootLayout() {
  return (
    <div className="relative min-h-screen bg-ink text-bone">
      {/* Blueprint dot grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-grid-dot bg-dot-24 opacity-40"
      />

      {/* Content stack */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>

      {/* Floating elements — WhatsApp above Bolt */}
      <WhatsAppFloating />
      <BoltLauncher />
    </div>
  );
}