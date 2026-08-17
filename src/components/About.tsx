import Image from "next/image";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="grid md:grid-cols-2">
        <div className="relative h-72 md:h-auto">
          <Image
            src="/images/about.jpg"
            alt="Готовый костюм на манекене в мастерской"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center bg-accent-soft px-5 py-14 sm:px-8 sm:py-20 md:px-14">
          <p className="eyebrow text-accent">
            О фабрике
          </p>
          <h2 className="font-serif mt-4 max-w-md text-3xl font-semibold text-foreground sm:text-4xl">
            Производство полного цикла для мужской классики
          </h2>

          <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-muted">
            <p>
              ZORIN работает на рынке Кыргызстана с {site.stats.foundedYear}{" "}
              года и специализируется на пошиве классической мужской
              одежды — костюмов, пиджаков, брюк и жилетов. Производство
              расположено в с. Новопавловка, в пригороде Бишкека.
            </p>
            <p>
              Мы выстроили поточный пошив: от раскроя и конструирования до
              финальной отделки изделия проходят внутри одной фабрики, без
              подрядчиков на стороне — {site.stats.employees} сотрудников на{" "}
              {site.stats.areaSqm.toLocaleString("ru-RU")} м².
            </p>
            <p>
              Основной фокус — сотрудничество с российскими брендами,
              оптовыми компаниями и корпоративными заказчиками в
              Кыргызстане, России и Казахстане.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
