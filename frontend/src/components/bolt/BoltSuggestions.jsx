/**
 * BoltSuggestions — suggested prompt chips.
 * Only rendered when there are no user messages yet (fresh session).
 */
export default function BoltSuggestions({ suggestions, onSelect, disabled }) {
  if (!suggestions || suggestions.length === 0) return null;

  return (
    <div className="border-t border-ink-line px-4 py-3">
      <p className="caption mb-3">Try asking</p>
      <div className="flex flex-wrap gap-2">
        {suggestions.slice(0, 6).map((s) => (
          <button
            key={s}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(s)}
            className="rounded border border-ink-line px-2.5 py-1.5 text-left text-xs leading-snug text-bone-dim transition-colors hover:border-lime/50 hover:text-lime disabled:opacity-50"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}