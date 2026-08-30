import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Продукция — мужская классика оптом",
  description:
    "Костюмы, пиджаки, брюки, жилеты и школьная форма классического кроя от производителя ZORIN в Бишкеке. Поточное производство полного цикла, от 300 единиц на модель одного цвета.",
  keywords: [
    "мужская одежда оптом кыргызстан",
    "производитель мужской классики бишкек",
    "костюмы пиджаки брюки жилеты оптом",
    "пошив классической мужской одежды",
  ],
  alternates: { canonical: "/produktsiya" },
};

const highlights = [
  {
    title: "Единое производство",
    description:
      "Раскрой, пошив и отделка всех линий — на одной площадке в Бишкеке, по единым лекалам и с единым уровнем контроля.",
  },
  {
    title: "Контроль в три этапа",
    description:
      "Разбраковка ткани на входе, контроль в процессе пошива, финальная приёмка ОТК — одинаково для каждой линии и каждой партии.",
  },
  {
    title: "От 300 единиц на модель",
    description:
      "Минимальная партия — одна и та же по всей линейке, вне зависимости от того, что именно заказываете.",
  },
  {
    title: "Пошив под брендом",
    description:
      "OEM, ODM, private label или отшив под собственной зарегистрированной торговой маркой ZORIN, если своего бренда пока нет.",
  },
];

export default function ProduktsiyaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Продукция" }]} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow text-accent">
            Продукция
          </p>
          <h1 className="font-serif mt-4 max-w-2xl text-4xl font-semibold text-foreground sm:text-5xl">
            Мужская классика от производителя
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Костюмы, пиджаки, брюки, жилеты и школьная форма для мальчиков.
            Поточное производство полного цикла: раскрой, пошив и отделка на
            одной фабрике в Бишкеке. От 300 единиц на модель одного цвета.
            Если выбираете между производителями — короткий чек-лист{" "}
            <Link
              href="/blog/kak-vybrat-proizvoditelya-kostyumov-optom"
              className="rounded-sm text-accent underline decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-70"
            >
              в статье
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {products.map((p, i) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group rounded-sm transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-90"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-background-panel">
                  {p.heroImage ? (
                    <Image
                      src={p.heroImage}
                      alt={p.heroAlt}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-foreground/[0.06]" />
                  )}
                </div>
                <h2 className="font-display mt-4 text-xl font-bold text-foreground">
                  {p.nav}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {p.blurb}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow text-accent">Как устроена линия</p>
          <h2 className="font-serif mt-4 max-w-xl text-3xl font-semibold text-foreground sm:text-4xl">
            Разные позиции — одна производственная база
          </h2>
          <div className="mt-8 grid gap-8 bg-background-panel p-6 sm:grid-cols-2 sm:p-8">
            {highlights.map((h) => (
              <div key={h.title}>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {h.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/kontakty"
              className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-[opacity,transform] hover:opacity-85 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Обсудить заказ
            </Link>
            <Link
              href="/opt"
              className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70 active:opacity-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Как устроен опт →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
