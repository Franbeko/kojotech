import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn — merge Tailwind class names conditionally, deduping conflicts.
 * Usage: cn('px-4 py-2', isActive && 'bg-lime', className)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}