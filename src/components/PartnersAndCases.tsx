import Image from "next/image";
import { imageClients, textOnlyClients } from "@/lib/clients";

const track = [...imageClients, ...imageClients];

export function PartnersAndCases() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background-panel py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center opacity-25"
      >
        <div className="animate-marquee flex w-max shrink-0 items-center gap-16 pr-16">
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
              key={name}
              className="font-display shrink-0 text-2xl font-bold tracking-wide text-foreground sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <div className="rounded-2xl bg-background/80 px-6 py-8 text-center backdrop-blur-md sm:px-10 sm:py-10">
          <p className="eyebrow text-accent">Что уже сшито</p>
          <p className="font-serif mt-4 text-xl leading-relaxed text-foreground sm:text-2xl">
            Форма для персонала аэропорта Шереметьево и парадная форма
            Олимпийской сборной Кыргызстана — среди реализованных проектов.
            Сударь, Zolla, Melon Fashion Group, Stenser, немецкий KiK и
            Стрекоза — тоже клиенты, и не разовые. Разный масштаб задач
            идёт через один и тот же цех в Новопавловке.
          </p>
        </div>
      </div>
    </section>
  );
}
