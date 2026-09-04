import Image from "next/image";
import Link from "next/link";
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
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Раскрой, пошив и финальная отделка идут на одной площадке —
            без передачи заказа между случайными подрядчиками. Заказчику
            не нужно самому координировать разных исполнителей: одна
            команда отвечает за весь путь от лекал до готовой партии.
          </p>
          <Link
            href="/o-fabrike"
            className="mt-6 inline-flex w-fit items-center rounded-sm text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70 active:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Подробнее о фабрике →
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
