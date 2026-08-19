import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";
import { productLines } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Пошив корпоративной формы и униформы оптом",
  description:
    "Пошив корпоративной формы и униформы для банков, отелей, авиакомпаний и охранных структур на фабрике ZORIN в Бишкеке. Участвуем в тендерах, от 500 единиц на модель.",
  keywords: [
    "пошив корпоративной формы оптом",
    "пошив униформы для банков",
    "пошив униформы для отелей",
    "форма для авиакомпаний пошив",
    "униформа для охранных структур",
  ],
  alternates: { canonical: "/korporativnaya-odezhda" },
};

const industries = [
  { title: "Банки", description: "Форма для сотрудников фронт-офиса и охраны." },
  { title: "Отели", description: "Форма для персонала — от ресепшн до службы эксплуатации." },
  { title: "Авиакомпании", description: "Форма для наземного персонала и экипажа." },
  { title: "Охранные структуры", description: "Форма для сотрудников охраны и ЧОП." },
];

export default function KorporativnayaOdezhdaPage() {
  const primaryPhone = site.phones[0];

  return (
    <>
      <Breadcrumbs items={[{ label: "Корпоративная одежда" }]} />

      <section className="grid md:grid-cols-2">
        <div className="relative h-72 md:h-auto">
          <Image
            src="/images/product-suits.jpg"
            alt="Классический костюм для корпоративной формы"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center bg-accent-soft px-5 py-14 sm:px-8 sm:py-20 md:px-14">
          <p className="eyebrow text-accent">Корпоративным заказчикам</p>
          <h1 className="font-serif mt-4 max-w-md text-4xl font-semibold text-foreground sm:text-5xl">
            Пошив корпоративной формы и униформы оптом
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="space-y-6 text-base leading-relaxed text-muted">
            <p>
              Шьём форму для банков, отелей, авиакомпаний и охранных
              структур — классические костюмы, пиджаки, брюки и жилеты по
              единым лекалам для всего штата. Участвуем в тендерах.
            </p>
            <p>
              Условия те же, что и для брендов: от 500 единиц на модель,
              единая производственная база в Бишкеке с{" "}
              {site.stats.foundedYear} года, {site.stats.employees}{" "}
              сотрудников, полный цикл — раскрой, пошив, финальная отделка
              без подрядчиков на стороне.
            </p>
            <p>
              Нужна не разовая партия, а системное размещение заказов —
              горизонт планирования загрузки производства 9–12 месяцев,
              что удобно для регулярного обновления формы по мере набора
              персонала.
            </p>
          </div>

          <p className="eyebrow mt-14 text-accent">Кому шьём форму</p>
          <div className="mt-4 grid gap-8 bg-background-panel p-6 sm:grid-cols-2 sm:p-8">
            {industries.map((item) => (
              <div key={item.title}>
                <h2 className="font-display text-lg font-bold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="eyebrow mt-14 text-accent">Брендирование</p>
          <div className="mt-4 bg-accent-soft p-6 sm:p-8">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              Наносим ваши лейблы, бирки и фирменную символику компании —
              форма выходит с производства уже готовой к выдаче персоналу.
            </p>
          </div>

          <p className="eyebrow mt-14 text-accent">Линии продукции</p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {productLines.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="font-display absolute bottom-3 left-4 text-base font-bold text-white">
                  {p.nav}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`tel:${primaryPhone.raw}`}
              className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Обсудить заказ
            </a>
            <Link
              href="/opt"
              className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Как устроен опт →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
