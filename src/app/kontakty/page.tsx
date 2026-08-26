import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";
import {
  EmailIcon,
  InstagramIcon,
  MaxIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/icons";

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

const channels = [
  {
    icon: PhoneIcon,
    label: "Телефон",
    value: site.phones[0].label,
    href: `tel:${site.phones[0].raw}`,
    external: false,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Написать в WhatsApp",
    href: site.whatsapp,
    external: true,
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    value: "Написать в Telegram",
    href: site.telegram,
    external: true,
  },
  {
    icon: MaxIcon,
    label: "MAX",
    value: "Написать в MAX",
    href: site.max,
    external: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "Открыть Instagram",
    href: site.instagram,
    external: true,
  },
  {
    icon: EmailIcon,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
] as const;

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`;

export default function KontaktyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Контакты" }]} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow text-accent">Контакты</p>
          <h1 className="font-serif mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            Свяжитесь с производством
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
            Оптовые заказы и сотрудничество — {site.contactPerson}. Выберите
            удобный способ связи.
          </p>

          <dl className="mt-12 divide-y divide-border border-t border-border">
            {channels.map((c) => (
              <div key={c.label} className="flex items-center gap-4 py-5">
                <c.icon className="h-6 w-6 shrink-0 text-accent" />
                <dt className="w-24 shrink-0 font-display text-sm font-bold text-foreground sm:w-28">
                  {c.label}
                </dt>
                <dd>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-base font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70 active:opacity-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

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
      </section>
    </>
  );
}
