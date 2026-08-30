import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactChannels } from "@/components/ContactChannels";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты — как связаться с ZORIN",
  description:
    "Телефон, WhatsApp, Telegram, MAX и email швейной фабрики ZORIN. Адрес производства в Бишкеке. Свяжитесь напрямую с отделом продаж.",
  keywords: [
    "контакты zorin fashion",
    "швейная фабрика бишкек телефон",
    "заказать пошив контакты",
  ],
  alternates: { canonical: "/kontakty" },
};

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`;

export default function KontaktyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Контакты" }]} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow text-accent">Контакты</p>
          <h1 className="font-serif mt-4 max-w-2xl text-4xl font-semibold text-foreground sm:text-5xl">
            Свяжитесь с производством
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            Оптовые заказы и сотрудничество — {site.contactPerson}. Выберите
            удобный способ связи.
          </p>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <ContactChannels />

              <div className="mt-14 border-t border-border pt-10">
                <p className="eyebrow text-accent">Адрес</p>
                <p className="mt-4 max-w-md text-base leading-relaxed text-foreground">
                  {site.address.full}
                </p>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70 active:opacity-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Открыть на карте →
                </a>
              </div>
            </div>

            <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-xl lg:mt-16">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`}
                className="h-full w-full border-0 invert-[90%] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Расположение производства ZORIN на карте"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
