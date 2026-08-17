import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";
import { products, type ProductDetail } from "@/lib/products";

export function ProductPageContent({ product }: { product: ProductDetail }) {
  const primaryPhone = site.phones[0];
  const otherProducts = products.filter((p) => p.slug !== product.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: product.title,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      url: site.url,
    },
    areaServed: ["Кыргызстан", "Россия", "Казахстан"],
    description: product.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Продукция", href: "/produktsiya" },
          { label: product.nav },
        ]}
      />

      <section className="relative h-[46vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src={product.heroImage}
          alt={product.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-5 pb-10 sm:px-8">
          <h1 className="font-serif max-w-2xl text-4xl font-semibold text-white sm:text-5xl">
            {product.title}
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            {product.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="eyebrow mt-14 text-accent">Условия заказа</p>
          <dl className="mt-4 grid grid-cols-1 gap-px overflow-hidden border-y border-border bg-border sm:grid-cols-3">
            {product.specs.map((s) => (
              <div key={s.label} className="bg-background-panel p-5">
                <dt className="text-xs uppercase tracking-wide text-muted">
                  {s.label}
                </dt>
                <dd className="font-serif mt-1 text-base font-bold text-foreground">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="eyebrow mt-14 text-accent">Особенности</p>
          <div className="mt-4 grid gap-8 bg-background-panel p-6 sm:grid-cols-2 sm:p-8">
            {product.features.map((f) => (
              <div key={f.title}>
                <h2 className="font-display text-lg font-bold text-foreground">
                  {f.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          <p className="eyebrow mt-14 text-accent">Для кого</p>
          <div className="mt-4 bg-accent-soft p-6 sm:p-8">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">
              {product.forWhom}
            </p>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`tel:${primaryPhone.raw}`}
              className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Обсудить партию
            </a>
            <Link
              href="/opt"
              className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Как устроен опт →
            </Link>
            <Link
              href="/blog/proizvodstvo-odezhdy-v-kyrgyzstane-dlya-rossii"
              className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Для брендов из России →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background-panel">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Другие линии продукции
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group relative aspect-[16/9] overflow-hidden rounded-xl"
              >
                <Image
                  src={p.heroImage}
                  alt={p.heroAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="font-display absolute bottom-4 left-5 text-xl font-bold text-white">
                  {p.nav}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
