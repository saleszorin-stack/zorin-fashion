import Image from "next/image";
import { imageClients, textOnlyClients } from "@/lib/clients";

const track = [...imageClients, ...imageClients];

const allPartners = [
  {
    name: "Аэропорт Шереметьево",
    caption: "Форма для персонала",
    src: "/images/partners/sheremetyevo.png",
    width: 746,
    height: 900,
  },
  {
    name: "Олимпийская сборная Кыргызстана",
    caption: "Парадная форма",
    src: "/images/partners/kyrgyz-olympic.png",
    width: 545,
    height: 900,
  },
  ...imageClients.map((c) => ({ ...c, caption: null as string | null })),
];

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

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <div
          aria-hidden
          className="absolute inset-0 bg-background/70 backdrop-blur-md [mask-image:radial-gradient(ellipse_75%_80%_at_center,black_45%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_75%_80%_at_center,black_45%,transparent_100%)]"
        />

        <div className="relative px-6 py-10 sm:px-10 sm:py-12">
          <h2 className="font-serif text-balance text-center text-3xl font-semibold text-foreground sm:text-4xl">
            Наши партнёры и проекты
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4">
            {allPartners.map((c) => (
              <div key={c.name} className="flex flex-col items-center text-center">
                <Image
                  src={c.src}
                  alt={c.name}
                  width={c.width}
                  height={c.height}
                  className="h-9 w-auto opacity-90 sm:h-10"
                />
                <p className="font-display mt-3 text-xs font-bold text-foreground/85 sm:text-sm">
                  {c.name}
                </p>
                {c.caption && (
                  <p className="mt-1 text-xs text-muted">{c.caption}</p>
                )}
              </div>
            ))}
            {textOnlyClients.map((name) => (
              <div key={name} className="flex flex-col items-center justify-center text-center">
                <span className="font-display text-lg font-bold text-foreground/80">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
