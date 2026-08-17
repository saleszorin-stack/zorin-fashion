export function ContentPlaceholder({
  label,
  note,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  note: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex ${aspect} flex-col items-center justify-center gap-2 rounded-xl bg-foreground/[0.04] p-6 text-center ${className}`}
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
