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
            О производстве
          </p>
          <h2 className="font-serif mt-4 max-w-md text-3xl font-semibold text-foreground sm:text-4xl">
            Один цех. Полный цикл. Ноль субподряда.
          </h2>

          <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-muted">
            <p>
              С 1997 года шьём мужскую классику в Бишкеке, в
              с. Новопавловка, — сами, от первого лекала до готового
              изделия. 160 человек, 1800 м² цеха, до 80 000 изделий в год.
            </p>
            <p>
              Раскрой, конструирование, пошив и финальная отделка — под
              одной крышей, без подрядчиков на стороне: посадка не гуляет
              от партии к партии, потому что вещь от начала до конца ведёт
              одна команда.
            </p>
            <p>
              Работаем с российскими брендами, оптовыми компаниями и
              корпоративными заказчиками. Экспортируем в Россию и
              Казахстан — страны ЕАЭС, поставки без ввозных таможенных
              пошлин; налоговые обязательства импортёра — по правилам
              страны ввоза.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
