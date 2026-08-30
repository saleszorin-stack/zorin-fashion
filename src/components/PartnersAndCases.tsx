import Image from "next/image";
import { imageClients, textOnlyClients } from "@/lib/clients";

const track = [...imageClients, ...imageClients];

function LogoRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`flex w-max shrink-0 items-center gap-16 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {track.map((c, i) => (
        <Image
          key={`${c.name}-${i}`}
          src={c.src}
          alt=""
          width={c.width}
          height={c.height}
          className="h-9 w-auto shrink-0 sm:h-12"
        />
      ))}
      {textOnlyClients.map((name) => (
        <span
          key={`${name}-${reverse ? "b" : "a"}`}
          className="font-display shrink-0 text-2xl font-bold tracking-wide text-foreground sm:text-3xl"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export function PartnersAndCases() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background-panel py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex -rotate-6 scale-125 flex-col justify-center gap-14 opacity-25"
      >
        <LogoRow />
        <LogoRow reverse />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <div
          aria-hidden
          className="absolute inset-0 bg-background/70 backdrop-blur-md [mask-image:radial-gradient(ellipse_75%_80%_at_center,black_45%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_75%_80%_at_center,black_45%,transparent_100%)]"
        />

        <div className="relative px-6 py-10 sm:px-10 sm:py-12">
          <p className="eyebrow text-center text-accent">
            Наши партнёры и проекты
          </p>
          <div className="mt-8 grid gap-8 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="text-center sm:pr-8">
              <p className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                Аэропорт Шереметьево
              </p>
              <p className="mt-2 text-sm text-muted">
                Форма для персонала
              </p>
            </div>
            <div className="pt-8 text-center sm:pt-0 sm:pl-8">
              <p className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                Олимпийская сборная Кыргызстана
              </p>
              <p className="mt-2 text-sm text-muted">
                Парадная форма
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
