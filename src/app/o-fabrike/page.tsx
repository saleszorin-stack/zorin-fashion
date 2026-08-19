import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "О фабрике — история и производство",
  description:
    "ZORIN — швейная фабрика полного цикла в Бишкеке с 1997 года. 160 сотрудников, 1800 м², ~80 000 комплектов в год. История, оборудование, репутация.",
  keywords: [
    "швейная фабрика бишкек история",
    "производство мужской одежды кыргызстан",
    "zorin fashion о компании",
  ],
  alternates: { canonical: "/o-fabrike" },
};

const equipment = [
  { label: "САПР", value: "Gerber, Julivi" },
  { label: "Раскройный комплекс", value: "Gerber" },
  { label: "Управление производством", value: "АСУП «Стилон»" },
  { label: "Швейное оборудование", value: "Juki, Brother, Jack, Pfaff, ASS" },
  { label: "Оборудование ВТО", value: "Прессы Indupress, Malkan" },
  { label: "Мощность костюмно-пиджачной группы", value: "8 000 изделий в месяц" },
  { label: "Мощность брючной группы", value: "10 000 изделий в месяц" },
];

const clients = ["Сударь", "Stenser", "Magman", "Стрекоза"];

export default function OFabrikePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "О фабрике" }]} />

      <section className="grid md:grid-cols-2">
        <div className="relative h-72 md:h-auto">
          <Image
            src="/images/about.jpg"
            alt="Готовый костюм на манекене в мастерской"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center bg-accent-soft px-5 py-14 sm:px-8 sm:py-20 md:px-14">
          <p className="eyebrow text-accent">
            О фабрике
          </p>
          <h1 className="font-serif mt-4 max-w-md text-4xl font-semibold text-foreground sm:text-5xl">
            Швейная фабрика в Бишкеке с {site.stats.foundedYear} года
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="space-y-6 text-base leading-relaxed text-muted">
            <p>
              ZORIN работает на рынке Кыргызстана с {site.stats.foundedYear}{" "}
              года. Производство расположено в с. Новопавловка, в пригороде
              Бишкека, и специализируется на пошиве классической мужской
              одежды — костюмов, пиджаков, брюк и жилетов.
            </p>
            <p>
              С самого начала фабрика строилась как производство полного
              цикла: раскрой, конструирование, пошив и финальная отделка
              выполняются внутри одной площадки — {site.stats.areaSqm.toLocaleString("ru-RU")} м²,{" "}
              {site.stats.employees} сотрудников, включая собственный отдел
              контроля качества из 4 человек. Такой подход даёт
              предсказуемое качество и позволяет держать стабильную посадку
              изделий от партии к партии.
            </p>
            <p>
              Сегодня фабрика выпускает около{" "}
              {site.stats.annualOutput.toLocaleString("ru-RU")} комплектов в
              год — работает с брендами из России, оптовыми компаниями и
              заказчиками корпоративной формы. Экспортируем в Россию и
              Казахстан — страны ЕАЭС, что снимает таможенные барьеры при
              поставке готовой продукции.
            </p>
          </div>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            Оборудование и системы
          </h2>
          <dl className="mt-6 divide-y divide-border border-t border-border">
            {equipment.map((e) => (
              <div
                key={e.label}
                className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-6"
              >
                <dt className="font-display text-sm font-bold text-foreground">
                  {e.label}
                </dt>
                <dd className="text-sm leading-relaxed text-muted">
                  {e.value}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            Производство в кадре
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/workshop.jpg"
                alt="Швейный цех, раскройный и швейный участки"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/finished-goods.jpg"
                alt="Готовые изделия на выходе с ОТК"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            Репутация
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Среди клиентов, чьё упоминание согласовано: сеть магазинов
            «Сударь», торговые марки Stenser, Magman, «Стрекоза» — часть
            из них работает с ZORIN по 17, 8 и 5 лет. У ZORIN есть
            собственная торговая марка, зарегистрированная в России, —
            заказчики без своего бренда могут выпускать продукцию под ней.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <span
                key={c}
                className="font-display text-sm font-semibold tracking-wide text-foreground/50"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`tel:${site.phones[0].raw}`}
              className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-[opacity,transform] hover:opacity-85 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Связаться с фабрикой
            </a>
            <Link
              href="/produktsiya"
              className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70 active:opacity-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Смотреть продукцию →
            </Link>
            <Link
              href="/opt"
              className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70 active:opacity-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Условия опта →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
