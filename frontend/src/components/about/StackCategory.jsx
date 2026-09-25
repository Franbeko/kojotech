export default function StackCategory({ group }) {
  return (
    <div className="border-t border-ink-line pt-6">
      <p className="caption mb-4">{group.category}</p>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-sm border border-ink-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-bone-dim transition-colors hover:border-lime/40 hover:text-lime"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}