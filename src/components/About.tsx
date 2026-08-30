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
            Полный производственный цикл в одном месте
          </h2>

          <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-muted">
            <p>
              С 1997 года производим мужскую классическую одежду в
              Новопавловке, Бишкек. На производственной площадке площадью
              1 800 м² работают 160 специалистов. Мощность предприятия
              составляет до 80 000 изделий в год.
            </p>
            <p>
              Каждый заказ проходит полный цикл внутри одного
              производства: конструирование и подготовку лекал, раскрой,
              пошив и финальную отделку. Мы не передаём отдельные этапы
              сторонним цехам, поэтому можем централизованно
              контролировать технологию, сроки и качество исполнения на
              всех этапах: от первого образца до серийной партии.
            </p>
            <p>
              Заказчику не нужно самостоятельно координировать разных
              подрядчиков. Подготовкой модели к производству и выпуском
              готовой партии занимается одна команда с единой зоной
              ответственности.
            </p>
            <p>
              Работаем с брендами одежды, оптовыми компаниями и
              корпоративными заказчиками. Поставляем продукцию в Россию и
              Казахстан.
            </p>
            <p>
              Поставки между странами ЕАЭС осуществляются без ввозных и
              вывозных таможенных пошлин. НДС и другие обязательные
              процедуры при ввозе оформляются импортёром по правилам
              своей страны.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
