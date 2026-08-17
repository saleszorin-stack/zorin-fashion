import Image from "next/image";
import Link from "next/link";

const advantages = [
  {
    title: "Полный цикл на 1 800 м²",
    description:
      "Раскрой на комплексе Gerber, пошив, ВТО и контроль ОТК — без субподрядчиков, всё на одной площадке.",
  },
  {
    title: "90% заказов — от постоянных клиентов",
    description:
      "Партнёрства по 17, 8 и 5 лет. В контрактном производстве это самый честный показатель качества.",
  },
  {
    title: "Ткань выбираете вы",
    description:
      "Закупаем, оплачиваем и привозим её мы — вам не нужна внешнеэкономическая сделка с поставщиком.",
  },
  {
    title: "Кыргызстан — страна ЕАЭС",
    description:
      "Поставка в Россию и Казахстан без таможенных пошлин, полный пакет экспортных документов.",
  },
];

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
          <p className="text-xs uppercase tracking-[0.35em] text-white/70">
            Оптовым партнёрам
          </p>
          <h2 className="font-serif mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-5xl">
            Производитель для брендов и дистрибьюторов
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          ZORIN — швейное производство полного цикла в Бишкеке с 1997 года:
          160 сотрудников, ~80 000 комплектов в год. Работаем с российскими
          брендами, оптовыми компаниями и корпоративными заказчиками — от
          500 единиц на модель.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background-panel p-6"
            >
              <h3 className="font-display text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/opt"
            className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            Как устроен опт
          </Link>
          <Link
            href="/blog/proizvodstvo-odezhdy-v-kyrgyzstane-dlya-rossii"
            className="inline-flex items-center rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
          >
            Для брендов из России
          </Link>
        </div>
      </div>
    </section>
  );
}
