export const site = {
  // Зарегистрированная торговая марка — "ZORIN" (см. бриф). "Zorin Fashion"
  // оставлено как рабочее маркетинговое название сайта до подтверждения
  // клиентом — см. AGENT_START_HERE.md.
  name: "Zorin Fashion",
  brandMark: "ZORIN",
  legalName: "ИП Зорин Юрий Сергеевич",
  inn: "20909196510025",
  url: "https://zorin-fashion.com",
  // Корпоративный email ещё не зарегистрирован (на 2026-08-17) — не показывать
  // на сайте, пока не появится реальный адрес на домене.
  email: null as string | null,
  phones: [{ raw: "+996555185959", label: "+996 (555) 18-59-59" }],
  whatsapp: "https://wa.me/996555185959",
  telegram: "https://t.me/+996555185959",
  max: "https://max.ru/u/f9LHodD0cOL5IvE_-G9nXi2-wmf8lIqUkMWXtnGiPmNAxKOmW7654JcMKLg",
  contactPerson: "Антон Зорин, отдел продаж",
  address: {
    full: "Кыргызская Республика, 720000, г. Бишкек, Ленинский район, с. Новопавловка, ул. Степная, 10",
    short: "с. Новопавловка, ул. Степная, 10",
    region: "Чуйская область",
    district: "Ленинский район",
    locality: "с. Новопавловка (пригород Бишкека)",
    streetAddress: "ул. Степная, 10",
    postalCode: "720000",
    mapsQuery: "с. Новопавловка, ул. Степная 10, Бишкек, Кыргызстан",
  },
  stats: {
    foundedYear: 1997,
    employees: 160,
    areaSqm: 1800,
    annualOutput: 80000,
  },
} as const;
