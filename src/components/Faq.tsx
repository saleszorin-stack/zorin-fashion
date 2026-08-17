import Link from "next/link";
import { faqItems } from "@/lib/faq";

type FaqItem = { question: string; answer: string };

export function Faq({
  items = faqItems,
  heading = "Частые вопросы",
  id = "faq",
  bordered = true,
  limit,
  moreHref,
}: {
  items?: readonly FaqItem[];
  heading?: string;
  id?: string;
  bordered?: boolean;
  limit?: number;
  moreHref?: string;
}) {
  const visible = limit ? items.slice(0, limit) : items;

  return (
    <section id={id} className={bordered ? "border-b border-border" : undefined}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-serif max-w-xl text-3xl font-semibold text-foreground sm:text-4xl">
          {heading}
        </h2>

        <div className={`mt-10 grid gap-x-10 ${limit ? "sm:grid-cols-2" : ""}`}>
          {visible.map((item) => (
            <details key={item.question} className="group border-t border-border py-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                <span className="font-display text-lg font-bold text-foreground sm:text-xl">
                  {item.question}
                </span>
                <span className="shrink-0 text-2xl font-light leading-none text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        {moreHref && (
          <div className="mt-8">
            <Link
              href={moreHref}
              className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Все вопросы →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
