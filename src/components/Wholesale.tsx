import Image from "next/image";
import Link from "next/link";

export function Wholesale() {
  return (
    <section id="wholesale" className="border-b border-border">
      <div className="relative flex h-[52vh] min-h-[360px] items-end">
        <Image
          src="/images/wholesale.jpg"
          alt="Швеи за работой на поточной линии фабрики"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14">
          <p className="eyebrow text-white/70">
            Оптовым партнёрам
          </p>
          <h2 className="font-serif mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-5xl">
            Производитель для брендов и дистрибьюторов
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Полные условия: минимальная партия, сроки, порядок расчётов и
          документы, шаг за шагом.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/opt"
            className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-[opacity,transform] hover:opacity-85 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Условия и процесс →
          </Link>
          <Link
            href="/blog/proizvodstvo-odezhdy-v-kyrgyzstane-dlya-rossii"
            className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70 active:opacity-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Для брендов из России →
          </Link>
        </div>
      </div>
    </section>
  );
}
