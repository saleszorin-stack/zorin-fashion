import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";
import { articles } from "@/lib/articles";
import { jsonLdScript } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      publishedTime: article.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />

      <Breadcrumbs
        items={[{ label: "Блог", href: "/blog" }, { label: article.title }]}
      />

      <article className="border-b border-border">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <time
            dateTime={article.date}
            className="text-xs uppercase tracking-wide text-muted"
          >
            {formatDate(article.date)}
          </time>
          <h1 className="font-serif mt-3 text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
            {article.title}
          </h1>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
            {(() => {
              const firstParagraphIndex = article.body.findIndex(
                (b) => b.type !== "h2" && b.type !== "list" && b.type !== "quote",
              );
              return article.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="font-serif pt-4 text-2xl font-semibold text-foreground"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="list-disc space-y-2 pl-5">
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={i}
                      className="font-serif border-l-2 border-accent py-1 pl-6 text-xl italic leading-snug text-foreground"
                    >
                      {block.text}
                    </blockquote>
                  );
                }
                return (
                  <p key={i} className={i === firstParagraphIndex ? "drop-cap" : undefined}>
                    {block.text}
                  </p>
                );
              });
            })()}
          </div>

          {article.relatedLinks.length > 0 && (
            <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-10">
              {article.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          )}
        </div>
      </article>
    </>
  );
}
