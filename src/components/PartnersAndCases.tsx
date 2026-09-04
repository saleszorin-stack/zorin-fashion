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

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <div
          aria-hidden
          className="absolute inset-0 bg-background/70 backdrop-blur-md [mask-image:radial-gradient(ellipse_75%_80%_at_center,black_45%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_75%_80%_at_center,black_45%,transparent_100%)]"
        />

        <div className="relative px-6 py-10 sm:px-10 sm:py-12">
          <h2 className="font-serif text-balance text-center text-3xl font-semibold text-foreground sm:text-4xl">
            Наши партнёры и проекты
          </h2>
          <div className="mt-10 grid gap-8 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="flex flex-col items-center text-center sm:px-8">
              <Image
                src="/images/partners/sheremetyevo.png"
                alt="Аэропорт Шереметьево"
                width={660}
                height={801}
                className="h-14 w-auto sm:h-16"
              />
              <p className="font-serif mt-3 flex min-h-16 items-center text-2xl font-semibold text-foreground sm:min-h-20 sm:text-3xl">
                Аэропорт Шереметьево
              </p>
              <p className="mt-2 text-sm text-muted">
                Форма для персонала
              </p>
            </div>
            <div className="flex flex-col items-center text-center sm:px-8">
              <Image
                src="/images/partners/kyrgyz-olympic.png"
                alt="Олимпийская сборная Кыргызстана"
                width={353}
                height={561}
                className="h-14 w-auto sm:h-16"
              />
              <p className="font-serif mt-3 flex min-h-16 items-center text-2xl font-semibold text-foreground sm:min-h-20 sm:text-3xl">
                Олимпийская сборная Кыргызстана
              </p>
              <p className="mt-2 text-sm text-muted">
                Парадная форма
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="eyebrow text-center text-muted">
              Также среди клиентов
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
              {imageClients.map((c) => (
                <Image
                  key={c.name}
                  src={c.src}
                  alt={c.name}
                  width={c.width}
                  height={c.height}
                  className="h-6 w-auto opacity-80 sm:h-7"
                />
              ))}
              {textOnlyClients.map((name) => (
                <span
                  key={name}
                  className="font-display text-lg font-bold text-foreground/80"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
