import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified здесь намеренно не проставляется для статических страниц и
  // карточек продукции — реальная дата последнего содержательного изменения
  // нигде не отслеживается машиночитаемо (см. ЖУРНАЛ.md вручную), а
  // подставлять дату сборки при каждом пуше вводит поисковик в заблуждение
  // о свежести контента. У статей блога дата есть по-настоящему (date
  // публикации) — её и используем.
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/produktsiya`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/opt`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/korporativnaya-odezhda`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/kontakty`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/o-fabrike`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/blog`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${site.url}/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
