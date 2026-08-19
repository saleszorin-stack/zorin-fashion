import { site } from "@/lib/site";

export function Contacts() {
  return (
    <section
      id="contacts"
      className="bg-invert-background text-invert-foreground"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-serif max-w-2xl text-3xl font-semibold sm:text-4xl">
          Свяжитесь с производством
        </h2>
        <p className="mt-4 max-w-lg text-invert-foreground/60">
          Оптовые заказы и сотрудничество — {site.contactPerson}. Звоните
          или пишите в WhatsApp/Telegram/MAX напрямую.
        </p>

        <div className="mt-14 grid gap-10 border-t border-invert-foreground/15 pt-10 sm:grid-cols-3">
          <div>
            <p className="eyebrow text-invert-foreground/50">
              Телефон
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {site.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={`tel:${phone.raw}`}
                  className="font-display rounded-sm text-xl font-bold transition-opacity hover:opacity-70 active:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-invert-background sm:text-2xl"
                >
                  {phone.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-invert-foreground/50">
              Мессенджеры
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display rounded-sm text-xl font-bold transition-opacity hover:opacity-70 active:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-invert-background sm:text-2xl"
              >
                WhatsApp
              </a>
              <a
                href={site.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display rounded-sm text-xl font-bold transition-opacity hover:opacity-70 active:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-invert-background sm:text-2xl"
              >
                Telegram
              </a>
              <a
                href={site.max}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display rounded-sm text-xl font-bold transition-opacity hover:opacity-70 active:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-invert-background sm:text-2xl"
              >
                MAX
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-invert-foreground/50">
              Адрес
            </p>
            <p className="mt-4 max-w-xs text-lg leading-snug text-invert-foreground/85">
              {site.address.full}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
