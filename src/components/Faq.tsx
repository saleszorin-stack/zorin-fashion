import { faqItems } from "@/lib/faq";

type FaqItem = { question: string; answer: string };

export function Faq({
  items = faqItems,
  heading = "Частые вопросы",
  id = "faq",
  bordered = true,
}: {
  items?: readonly FaqItem[];
  heading?: string;
  id?: string;
  bordered?: boolean;
}) {
  return (
    <section id={id} className={bordered ? "border-b border-border" : undefined}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-serif max-w-xl text-4xl font-semibold text-foreground sm:text-5xl">
          {heading}
        </h2>

        <div className="mt-10 divide-y divide-border border-t border-border">
          {items.map((item) => (
            <details key={item.question} className="group py-6">
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
      </div>
    </section>
  );
}
