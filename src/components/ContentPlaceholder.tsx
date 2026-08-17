export function ContentPlaceholder({
  label,
  note,
  className = "",
}: {
  label: string;
  note: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-foreground/25 bg-background-panel p-6 text-center ${className}`}
    >
      <span className="font-display text-sm font-bold text-foreground/60">
        {label}
      </span>
      <span className="max-w-xs text-xs leading-relaxed text-muted">
        {note}
      </span>
    </div>
  );
}
