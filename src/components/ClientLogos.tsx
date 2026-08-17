const clients = ["Сударь", "Stenser", "Magman", "Стрекоза"];

export function ClientLogos() {
  return (
    <section className="border-b border-border bg-background-panel">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted">
          С нами работают
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c}
              className="flex h-16 items-center justify-center rounded-xl border border-dashed border-foreground/20 px-4 text-center text-sm font-semibold text-foreground/50"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
