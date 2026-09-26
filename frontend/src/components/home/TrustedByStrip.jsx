import { useState } from 'react';
import { cn } from '../../utils/cn';

/**
 * TrustedByStrip — a compact row of client names with logos.
 *
 * Uses images from /public/clients/ with graceful fallback to initials
 * if an image fails to load.
 *
 * To add a client:
 *   1. Drop the image into /public/clients/
 *   2. Add an entry to the `clients` array below
 */
const clients = [
  {
    id: 'pzel',
    name: 'P-ZEL Ghana Chop Bar',
    short: 'PZ',
    image: '/clients/pzel.jpg',
  },
  {
    id: 'track2311',
    name: 'Track2311 Investments',
    short: 'T2',
    image: '/clients/track2311.jpg',
  },
  {
    id: 'livestocks',
    name: 'Live Stocks Broker',
    short: 'LS',
    image: '/clients/livestocks.png',
  },
];

export default function TrustedByStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      {clients.map((client) => (
        <ClientMark key={client.id} client={client} />
      ))}
    </div>
  );
}

/**
 * ClientMark — one client entry: logo (with fallback) + name.
 */
function ClientMark({ client }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = client.image && !imageFailed;

  return (
    <div
      className={cn(
        'flex items-center gap-3 opacity-80 transition-opacity duration-300 hover:opacity-100'
      )}
    >
      {/* Logo / initial fallback */}
      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink-line bg-ink-soft">
        {showImage ? (
          <img
            src={client.image}
            alt=""
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-bone-dim">
            {client.short}
          </span>
        )}
      </span>

      {/* Client name */}
      <span className="text-sm text-bone-dim">{client.name}</span>
    </div>
  );
}