import { cn } from '../../utils/cn';

export default function BrandMark({ size = 'md', className }) {
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-9 w-9',
    lg: 'h-12 w-12',
  };

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn(sizes[size], className)}
      aria-label="KojoTech logo"
      role="img"
    >
      <rect width="64" height="64" rx="14" fill="#0B0F14" />
      <path
        d="M18 18v28M18 32l14-14M18 32l14 14"
        stroke="#C6F24E"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="32" r="6" fill="#C6F24E" />
    </svg>
  );
}