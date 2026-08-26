const reasons = [
  {
    title: "Один комплекс оборудования на весь цикл",
    description:
      "Раскройный комплекс Gerber и Julivi, швейное оборудование Juki, Brother, Jack, Pfaff и ASS — из Германии, Японии, Турции и США. Один стандарт на все операции, от раскроя до отделки.",
  },
  {
    title: "Одни и те же поставщики фурнитуры",
    description:
      "Клеевые прокладки, нитки и фурнитуру закупаем в Германии, Беларуси, Турции и Китае — у постоянных поставщиков, а не у тех, кто окажется под рукой к сроку партии.",
  },
  {
    title: "Полная размерная сетка",
    description:
      "От 26-го размера при росте 110 для мальчиков до 72-го при росте 200 для взрослых — детская и мужская линии закрываются на одном производстве.",
  },
  {
    title: "Своя база моделей и работа по вашим лекалам",
    description:
      "Берёте готовую модель из коллекции разработок фабрики — либо мы шьём точно по вашим лекалам и образцу.",
  },
  {
    title: "Три уровня контроля на каждой партии",
    description:
      "Входной контроль тканей и фурнитуры, межоперационный контроль в процессе, финальная приёмка готовой продукции — на каждом этапе.",
  },
];

export function WhyZorin() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <h2 className="font-serif max-w-xl text-3xl font-semibold text-foreground sm:text-4xl">
          Почему выбирают ZORIN
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-3">
          {reasons.map((item) => (
            <div key={item.title} className="border-t border-border pt-5">
              <h3 className="font-display text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
