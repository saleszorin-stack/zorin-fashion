export const site = {
  // Единственное название бренда — "ZORIN", подтверждено клиентом
  // 2026-08-29 (см. AGENT_START_HERE.md). Домен zorin-fashion.com не
  // трогаем — это отдельный вопрос от текстового именования бренда.
  name: "ZORIN",
  legalName: "ИП Зорин Юрий Сергеевич",
  inn: "20909196510025",
  url: "https://zorin-fashion.com",
  email: "sales.zorin@gmail.com",
  phones: [{ raw: "+996555185959", label: "+996 (555) 18-59-59" }],
  whatsapp: "https://wa.me/996555185959",
  telegram: "https://t.me/+996555185959",
  max: "https://max.ru/u/f9LHodD0cOL5IvE_-G9nXi2-wmf8lIqUkMWXtnGiPmNAxKOmW7654JcMKLg",
  instagram: "https://www.instagram.com/zorin_manufactory1/",
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

export const YANDEX_METRIKA_ID = 112037194;
