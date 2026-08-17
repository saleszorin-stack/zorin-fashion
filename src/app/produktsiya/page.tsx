import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Продукция — мужская классика оптом",
  description:
    "Костюмы, пиджаки, брюки и жилеты классического кроя от производителя ZORIN в Бишкеке. Поточное производство полного цикла, от 500 единиц на модель.",
  keywords: [
    "мужская одежда оптом кыргызстан",
    "производитель мужской классики бишкек",
    "костюмы пиджаки брюки жилеты оптом",
  ],
  alternates: { canonical: "/produktsiya" },
};

export default function ProduktsiyaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Продукция" }]} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            Продукция
          </p>
          <h1 className="font-serif mt-4 max-w-2xl text-4xl font-semibold text-foreground sm:text-5xl">
            Мужская классика от производителя
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            Четыре линии продукции — костюмы, пиджаки, брюки и жилеты.
            Поточное производство полного цикла: раскрой, пошив и отделка на
            одной фабрике в Бишкеке. От 500 единиц на модель.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-background-panel">
                  <Image
                    src={p.heroImage}
                    alt={p.heroAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h2 className="font-display mt-4 text-xl font-bold text-foreground">
                  {p.nav}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.intro[0]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
