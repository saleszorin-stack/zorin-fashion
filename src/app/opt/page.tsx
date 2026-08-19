import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { site } from "@/lib/site";
import { faqItems } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Оптовый пошив мужской одежды в Кыргызстане",
  description:
    "Условия оптового сотрудничества с фабрикой ZORIN: от 500 единиц на модель, реальный процесс из 10 шагов, коммерческие условия, что входит в стоимость.",
  keywords: [
    "оптовый пошив одежды кыргызстан",
    "заказать пошив партии одежды бишкек",
    "производитель мужской одежды оптом",
    "контрактное производство одежды",
    "швейный цех под ключ",
  ],
  alternates: { canonical: "/opt" },
};

const steps = [
  {
    n: "01",
    title: "Обращение и бриф",
    description: "Описываете задачу: изделие, объём, требования.",
    time: "в день обращения",
  },
  {
    n: "02",
    title: "Расчёт и предложение",
    description: "Считаем стоимость под модель, называем условия сотрудничества.",
  },
  {
    n: "03",
    title: "Согласование",
    description: "Фиксируем условия, обсуждаем техническое задание и лекала.",
  },
  {
    n: "04",
    title: "Фурнитура и образец",
    description: "Подбираем фурнитуру, отшиваем опытный образец.",
    time: "2 недели",
  },
  {
    n: "05",
    title: "Договор и предоплата",
    description: "Подписываем договор, вы вносите 50%.",
  },
  {
    n: "06",
    title: "Материалы",
    description:
      "Вы выбираете ткань и артикул, мы оплачиваем закуп, организуем доставку и закупаем фурнитуру. Либо принимаем давальческое сырьё.",
    time: "доставка ткани 2–3 недели",
  },
  {
    n: "07",
    title: "Производство",
    description: "Раскрой на комплексе Gerber, пошив, ВТО. Межоперационный контроль.",
    time: "костюмы/пиджаки/жилеты — 2 мес., брюки — 1 мес.",
  },
  {
    n: "08",
    title: "Контроль и маркировка",
    description: "Финальная приёмка ОТК. Наносим ваши лейблы и коды «Честного знака».",
  },
  {
    n: "09",
    title: "Документы",
    description: "Готовим декларацию, сертификат и полный пакет для отгрузки, при необходимости СТ-1.",
  },
  {
    n: "10",
    title: "Отгрузка и расчёт",
    description: "Отгружаем на условиях FCA, передаём контакты перевозчика, выставляем счёт на остаток.",
  },
];

const terms = [
  { label: "Минимальная партия", value: "500 шт. на модель — суммарно, до 2 цветов, распределение по размерам" },
  { label: "Образец", value: "$50, срок 2 недели. Бесплатно при запуске заказа в производство" },
  { label: "Разработка лекал", value: "~2 недели, входит в стоимость заказа" },
  { label: "Ценообразование", value: "На переговорах — стоимость пошива без основной ткани. В договоре — единый счёт с тканью" },
  { label: "Валюта расчётов", value: "Доллары США и российские рубли" },
  { label: "Оплата", value: "Банковский перевод. Предоплата 50% после подписания договора, остаток — при отгрузке" },
  { label: "Условия поставки", value: "FCA — самовывоз с производства" },
  { label: "Договор", value: "Типовой, все пункты обсуждаются индивидуально" },
  { label: "Брак", value: "Скидка, замена или полный возврат — по факту вида и объёма" },
  { label: "Конфиденциальность", value: "По запросу подписываем обязательство не использовать вашу модель для других клиентов" },
];

const weDo = [
  "Разработка модели с нуля, по эскизу или образцу",
  "Оцифровка и градация лекал заказчика",
  "Закуп и доставка ткани, закуп фурнитуры",
  "Раскрой, пошив, ВТО, контроль ОТК",
  "Маркировка «Честный знак» (коды Data Matrix заказчика)",
  "Индивидуальная упаковка, помощь с бирками и лейблами",
  "Полный пакет экспортных документов, сертификат СТ-1",
];

const weDont = [
  "Вышивка",
  "Печать: шелкография, DTF, сублимация",
  "Упаковка под маркетплейсы — короба, штрихкоды, паллеты",
  "Складское хранение готовой продукции — только в форс-мажорных случаях",
  "Собственного склада тканей и карты образцов нет — закуп под конкретный заказ",
];

export default function OptPage() {
  const primaryPhone = site.phones[0];

  return (
    <>
      <Breadcrumbs items={[{ label: "Опт" }]} />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="eyebrow text-accent">
              Опт
            </p>
            <h1 className="font-serif mt-4 text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl">
              Оптовый пошив мужской одежды
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              ZORIN — производство полного цикла в Бишкеке с 1997 года.
              Работаем с российскими брендами, оптовыми компаниями и
              корпоративными заказчиками — подробности для брендов из
              России в{" "}
              <Link
                href="/blog/proizvodstvo-odezhdy-v-kyrgyzstane-dlya-rossii"
                className="text-accent underline decoration-2 underline-offset-4"
              >
                отдельной статье
              </Link>
              .
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <Image
              src="/images/wholesale.jpg"
              alt="Швеи за работой на поточной линии фабрики"
              fill
              priority
              sizes="(min-width: 768px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background-panel">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <p className="eyebrow text-accent">
            Профиль заказчика
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            <p className="text-sm leading-relaxed text-muted">
              Партия от 500 единиц на модель — не разовый отшив, а системное
              размещение заказов.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Горизонт планирования загрузки производства — 9–12 месяцев.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Не берём партии меньше 500 единиц на модель и заказы
              бюджетного сегмента.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Как проходит заказ
          </h2>
          <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <span className="font-serif shrink-0 text-2xl text-accent">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                  {s.time && (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
                      {s.time}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background-panel">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Коммерческие условия
          </h2>
          <dl className="mt-8 divide-y divide-border border-t border-border">
            {terms.map((t) => (
              <div
                key={t.label}
                className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:items-baseline sm:gap-6"
              >
                <dt className="font-display text-sm font-bold text-foreground">
                  {t.label}
                </dt>
                <dd className="text-sm leading-relaxed text-muted">
                  {t.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Что входит в работу
              </h2>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted">
                {weDo.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Чего мы не делаем
              </h2>
              <p className="mt-1 text-xs text-muted">
                Честный список экономит время — и вам, и нам.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                {weDont.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${primaryPhone.raw}`}
              className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Обсудить заказ
            </a>
            <Link
              href="/produktsiya"
              className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Смотреть продукцию →
            </Link>
          </div>
        </div>
      </section>

      <Faq items={faqItems} bordered={false} />
    </>
  );
}
