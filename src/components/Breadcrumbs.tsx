import Link from "next/link";
import { site } from "@/lib/site";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allCrumbs: Crumb[] = [{ label: "Главная", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allCrumbs.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `${site.url}${item.href}` : undefined,
    })),
  };

  return (
    <nav aria-label="Хлебные крошки" className="border-b border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1.5 px-5 py-4 text-xs text-muted sm:px-8">
        <li>
          <Link href="/" className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            Главная
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="rounded-sm hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
