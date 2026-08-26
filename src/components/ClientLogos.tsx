import Image from "next/image";
import { imageClients, textOnlyClients } from "@/lib/clients";

export function ClientLogos() {
  return (
    <section className="border-b border-border bg-background-panel">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="eyebrow text-center text-muted">
          С нами работают
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {imageClients.map((c) => (
            <Image
              key={c.name}
              src={c.src}
              alt={c.name}
              width={c.width}
              height={c.height}
              className="h-6 w-auto opacity-80 transition-opacity hover:opacity-100 sm:h-7"
            />
          ))}
          {textOnlyClients.map((name) => (
            <span
              key={name}
              className="font-display text-sm font-semibold tracking-wide text-foreground/50"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
