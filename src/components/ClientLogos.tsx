const clients = ["Сударь", "Stenser", "Magman", "Стрекоза"];

export function ClientLogos() {
  return (
    <section className="border-b border-border bg-background-panel">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="eyebrow text-center text-muted">
          С нами работают
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((c) => (
            <span
              key={c}
              className="font-display text-sm font-semibold tracking-wide text-foreground/50"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
