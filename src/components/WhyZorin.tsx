const reasons = [
  {
    title: "Раскрой на Gerber, не на глаз",
    description:
      "Крой и конструирование ведём на системах Gerber и Julivi. Шьём на Juki, Brother, Jack, Pfaff и ASS. Отделку делаем на прессах Indupress и Malkan.",
  },
  {
    title: "Стабильное качество: одни и те же поставщики каждый раз",
    description:
      "Ткани, подклад и фурнитуру закупаем у постоянных партнёров в Германии, Турции, Беларуси и Китае. Они поставляют всё в срок и без потери качества, партия за партией.",
  },
  {
    title: "Штраф себе за просрочку",
    description:
      "Сроки поставки закреплены в договоре. Если срываем их по своей вине, платим штраф. Это не обещание, а обязательство.",
  },
  {
    title: "Три проверки до упаковки",
    description:
      "Входной контроль ткани и фурнитуры, контроль в процессе пошива, финальная проверка перед упаковкой: брак отсекается внутри цеха, не на складе клиента.",
  },
  {
    title: "Ваши лекала не уходят к другим",
    description:
      "По запросу подписываем обязательство не использовать модель и лекала заказчика для других клиентов фабрики. То, что мы шьём для вас, остаётся вашим.",
  },
];

export function WhyZorin() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="font-serif max-w-xl text-3xl font-semibold text-foreground sm:text-4xl">
          Почему выбирают нас
        </h2>
        <div className="mt-6">
          {reasons.map((item) => (
            <details key={item.title} className="group border-t border-border py-6 last:border-b">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-sm text-left transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent active:opacity-70">
                <span className="font-display text-lg font-bold text-foreground sm:text-xl">
                  {item.title}
                </span>
                <span className="shrink-0 text-2xl font-light leading-none text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
