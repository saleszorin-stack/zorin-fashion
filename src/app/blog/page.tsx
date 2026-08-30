import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Блог — о пошиве и производстве мужской одежды",
  description:
    "Статьи о швейном производстве, оптовом пошиве мужской классики и сотрудничестве с брендами из России от фабрики ZORIN.",
  keywords: [
    "блог о пошиве одежды",
    "швейное производство статьи",
    "производство одежды кыргызстан блог",
  ],
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Breadcrumbs items={[{ label: "Блог" }]} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow text-accent">
            Блог
          </p>
          <h1 className="font-serif mt-4 max-w-2xl text-4xl font-semibold text-foreground sm:text-5xl">
            О пошиве и производстве мужской одежды
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((article, i) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group overflow-hidden rounded-2xl bg-background-panel transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-90"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <time
                    dateTime={article.date}
                    className="block text-xs uppercase tracking-wide text-muted"
                  >
                    {formatDate(article.date)}
                  </time>
                  <h2 className="font-display mt-2 text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
