import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const products = [
  {
    slug: "kostyumy",
    image: "/images/product-suits.jpg",
    alt: "Классический мужской костюм в клетку с галстуком",
    title: "Костюмы",
  },
  {
    slug: "pidzhaki",
    image: "/images/product-jackets.jpg",
    alt: "Застёгивание пуговицы классического пиджака",
    title: "Пиджаки",
  },
  {
    slug: "bryuki",
    image: "/images/product-trousers.jpg",
    alt: "Классические мужские брюки в мелкую клетку",
    title: "Брюки",
  },
  {
    slug: "zhilety",
    image: "/images/product-vests.jpg",
    alt: "Классический жилет с галстуком",
    title: "Жилеты",
  },
  {
    slug: "shkolnaya-forma",
    image: "/images/product-school.jpg",
    alt: "Значок префекта на школьном пиджаке классического кроя",
    title: "Школьная форма",
  },
];

export function Products() {
  return (
    <section id="products" className="border-b border-border">
      <Reveal className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-serif max-w-xl text-3xl font-semibold text-foreground sm:text-4xl">
              Продуктовая линия
            </h2>
            <Link
              href="/produktsiya"
              className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70 active:opacity-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Вся продукция →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className="group rounded-sm transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-90"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-background-panel">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display mt-4 text-base font-bold text-foreground sm:text-lg">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
