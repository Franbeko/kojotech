export default function BoltTypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      <span className="sr-only">Bolt is typing</span>
      <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-bone-faint [animation-delay:-300ms]" />
      <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-bone-faint [animation-delay:-150ms]" />
      <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-bone-faint" />
    </div>
  );
}