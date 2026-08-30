import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  const age = new Date().getFullYear() - site.stats.foundedYear;

  return (
    <section id="top" className="border-b border-border">
      <div className="relative h-[72vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Готовый пиджак классического кроя на вешалке"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-6xl items-center px-5 sm:px-8">
          <div className="max-w-xl border-l-2 border-white/40 pl-6 sm:pl-8">
            <p className="eyebrow text-white/70">
              Швейная фабрика · Бишкек · с {site.stats.foundedYear} года
            </p>

            <h1 className="font-serif text-balance mt-5 text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
              Контрактный пошив
              <br />
              мужской классики
            </h1>
            <p className="mt-4 text-lg font-medium text-white/70 sm:text-xl">
              Мужская классика, сшитая в Кыргызстане — под вашим брендом
            </p>
          </div>
        </div>
      </div>

      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-10 gap-y-6 px-5 py-10 sm:px-8 md:grid-cols-4 md:justify-between">
        {[
          { value: String(site.stats.foundedYear), label: `На рынке ${age} лет` },
          { value: String(site.stats.employees), label: "Сотрудников" },
          { value: site.stats.areaSqm.toLocaleString("ru-RU"), label: "м² производственной площади" },
          { value: (site.stats.annualOutput / 1000).toFixed(0), label: "тыс. комплектов в год" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {stat.value}
            </dd>
            <dd className="text-xs uppercase tracking-wide text-muted">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
