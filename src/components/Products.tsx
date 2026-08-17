import Image from "next/image";
import Link from "next/link";

const products = [
  {
    slug: "kostyumy",
    index: "01",
    image: "/images/product-suits.jpg",
    alt: "Классический мужской костюм в клетку с галстуком",
    title: "Костюмы",
    description:
      "Классические двойки и тройки строгого и делового кроя — для розничных сетей и корпоративного заказчика.",
  },
  {
    slug: "pidzhaki",
    index: "02",
    image: "/images/product-jackets.jpg",
    alt: "Застёгивание пуговицы классического пиджака",
    title: "Пиджаки",
    description:
      "Однобортные и двубортные модели с точной посадкой по плечу, отдельным пошивом под ассортиментную линейку.",
  },
  {
    slug: "bryuki",
    index: "03",
    image: "/images/product-trousers.jpg",
    alt: "Классические мужские брюки в мелкую клетку",
    title: "Брюки",
    description:
      "Классические мужские брюки прямого и зауженного кроя, стабильная лекальная база для крупных партий.",
  },
  {
    slug: "zhilety",
    index: "04",
    image: "/images/product-vests.jpg",
    alt: "Классический жилет с галстуком",
    title: "Жилеты",
    description:
      "Жилеты в комплект к костюмным тройкам и как отдельная позиция ассортимента.",
  },
];

export function Products() {
  return (
    <section id="products" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-8">
          <h2 className="font-serif max-w-xl text-3xl font-semibold text-foreground sm:text-4xl">
            Четыре линии мужской классики
          </h2>
          <p className="max-w-xs text-sm text-muted">
            Фото — иллюстративные, готовятся собственные съёмки изделий.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-10 lg:grid-cols-4">
          {products.map(({ slug, index, image, alt, title, description }) => (
            <Link key={slug} href={`/${slug}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-background-panel">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="mt-4 block text-xs font-semibold text-muted">
                {index}
              </span>
              <h3 className="font-display mt-1 text-xl font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
