import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentPlaceholder } from "@/components/ContentPlaceholder";
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
          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            О фабрике
          </p>
          <h1 className="font-serif mt-4 max-w-md text-3xl font-semibold text-foreground sm:text-4xl">
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
              год и сотрудничает с российскими брендами, оптовыми компаниями
              и корпоративными заказчиками в Кыргызстане, России и
              Казахстане — стране ЕАЭС, что снимает таможенные барьеры при
              поставке готовой продукции.
            </p>
          </div>

          <h2 className="font-serif mt-14 text-2xl font-semibold text-foreground">
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

          <h2 className="font-serif mt-14 text-2xl font-semibold text-foreground">
            Производство в кадре
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Реальные фото цеха и видео-экскурсия по производству появятся
            здесь после съёмки на площадке в Новопавловке.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ContentPlaceholder
              label="Фото цеха"
              note="Раскройный и швейный участки — добавим после фотосъёмки"
            />
            <ContentPlaceholder
              label="Фото готовой продукции"
              note="Изделия на выходе с ОТК — добавим после фотосъёмки"
            />
            <ContentPlaceholder
              label="Видео-экскурсия по производству"
              note="Короткое видео цеха и линии — добавим, когда будет готово"
              className="sm:col-span-2"
            />
          </div>

          <h2 className="font-serif mt-14 text-2xl font-semibold text-foreground">
            Репутация
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            90% заказов приходит от постоянных клиентов — партнёрства
            длятся по 17, 8 и 5 лет. Среди клиентов, чьё упоминание
            согласовано: сеть магазинов «Сударь», торговые марки Stenser,
            Magman, «Стрекоза». У ZORIN есть собственная торговая марка,
            зарегистрированная в России, — заказчики без своего бренда
            могут выпускать продукцию под ней.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {clients.map((c) => (
              <ContentPlaceholder
                key={c}
                label={c}
                note="Логотип в качестве — по получении от клиента"
              />
            ))}
          </div>

          <h2 className="font-serif mt-14 text-2xl font-semibold text-foreground">
            Кейсы с цифрами
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Партии, сроки и результаты по конкретным заказчикам — появятся
            здесь после согласования с клиентами.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ContentPlaceholder
              label="Кейс"
              note="Объём партии, срок производства, результат — по согласованию"
            />
            <ContentPlaceholder
              label="Кейс"
              note="Объём партии, срок производства, результат — по согласованию"
            />
          </div>

          <h2 className="font-serif mt-14 text-2xl font-semibold text-foreground">
            Отзывы
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <ContentPlaceholder
              label="Отзыв клиента"
              note="Текст и должность — по согласованию с заказчиком"
            />
            <ContentPlaceholder
              label="Отзыв клиента"
              note="Текст и должность — по согласованию с заказчиком"
            />
            <ContentPlaceholder
              label="Отзыв клиента"
              note="Текст и должность — по согласованию с заказчиком"
            />
          </div>

          <h2 className="font-serif mt-14 text-2xl font-semibold text-foreground">
            Награды и сертификаты
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <ContentPlaceholder
              label="Сертификат"
              note="Скан — как только предоставит фабрика"
            />
            <ContentPlaceholder
              label="Награда"
              note="Скан — как только предоставит фабрика"
            />
            <ContentPlaceholder
              label="Сертификат / награда"
              note="Скан — как только предоставит фабрика"
            />
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${site.phones[0].raw}`}
              className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Связаться с фабрикой
            </a>
            <Link
              href="/produktsiya"
              className="inline-flex items-center rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
            >
              Смотреть продукцию
            </Link>
            <Link
              href="/opt"
              className="inline-flex items-center rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
            >
              Условия опта
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
