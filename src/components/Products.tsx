import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

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
      "Однобортные и двубортные модели с точной посадкой по плечу, отдельным пошивом под ассортиментную линию.",
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
  {
    slug: "shkolnaya-forma",
    index: "05",
    image: "/images/product-school.jpg",
    alt: "Значок префекта на школьном пиджаке классического кроя",
    title: "Школьная форма",
    description:
      "Костюмы, пиджаки и брюки для мальчиков — тот же уровень контроля, что и во взрослой линии.",
  },
];

export function Products() {
  return (
    <section id="products" className="border-b border-border">
      <Reveal className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-serif max-w-xl text-3xl font-semibold text-foreground sm:text-4xl">
            Продуктовая линия
          </h2>
        </div>
      </Reveal>

      {products.map((p, i) => (
        <Reveal key={p.slug}>
          <Link
            href={`/${p.slug}`}
            className={`group grid border-t border-border transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset active:opacity-90 md:grid-cols-2 ${i % 2 === 0 ? "bg-background" : "bg-background-panel"}`}
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden md:aspect-auto ${i % 2 === 1 ? "md:order-2" : ""}`}
            >
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-foreground/[0.04]" />
              )}
            </div>
            <div className="flex flex-col justify-center px-5 py-14 sm:px-8 sm:py-20 md:px-16">
              <span className="eyebrow text-accent">{p.index}</span>
              <h3 className="font-serif mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                {p.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                {p.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4">
                Подробнее →
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </section>
  );
}
