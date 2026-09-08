export function faqPageJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

type OgImage = { url: string; width: number; height: number };

// Реальные пиксельные размеры файлов — сверены вручную (sips), не сочинять
// заново при добавлении новых фото.
export const ogImages = {
  hero: { url: "/images/hero.jpg", width: 1600, height: 2133 },
  suits: { url: "/images/product-suits.jpg", width: 1500, height: 2000 },
  jackets: { url: "/images/product-jackets.jpg", width: 1500, height: 2000 },
  trousers: { url: "/images/product-trousers.jpg", width: 1500, height: 2000 },
  vests: { url: "/images/product-vests.jpg", width: 1200, height: 1680 },
  school: { url: "/images/product-school.jpg", width: 1200, height: 1680 },
  ofabrike: { url: "/images/o-fabrike-hero.jpg", width: 1500, height: 2000 },
  wholesale: { url: "/images/wholesale.jpg", width: 1800, height: 1200 },
} as const satisfies Record<string, OgImage>;

/**
 * Единый Open Graph + Twitter блок для метаданных страницы. Next.js не
 * домерживает вложенный `openGraph`/`twitter` из layout.tsx — если страница
 * задаёт своё, оно целиком заменяет родительское, включая картинку. Поэтому
 * каждая страница должна явно передать сюда картинку, а не полагаться на
 * наследование.
 */
export function ogMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: OgImage | { url: string };
}) {
  const image = opts.image ?? ogImages.hero;
  return {
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.path,
      images: [{ ...image, alt: opts.title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: opts.title,
      description: opts.description,
      images: [image.url],
    },
  };
}
