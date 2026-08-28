import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <Reveal className="grid md:grid-cols-2">
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
              Специализируемся на пошиве классической мужской одежды —
              костюмов, пиджаков, брюк и жилетов. Производство расположено
              в с. Новопавловка, в пригороде Бишкека.
            </p>
            <p>
              Раскрой, конструирование, пошив и финальная отделка — всё
              под одной крышей, без подрядчиков со стороны. Модель ведёт
              одна команда от лекал до готового изделия, поэтому посадка
              не расходится от партии к партии.
            </p>
            <p>
              Основной фокус — сотрудничество с российскими брендами,
              оптовыми компаниями и корпоративными заказчиками.
              Экспортируем в Россию и Казахстан — страны ЕАЭС, поставки
              без ввозных таможенных пошлин; налоговые обязательства
              импортёра — по правилам страны ввоза.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
