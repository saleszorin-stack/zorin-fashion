export const navLinks = [
  { href: "/produktsiya", label: "Продукция" },
  { href: "/opt", label: "Опт" },
  { href: "/o-fabrike", label: "О фабрике" },
  { href: "/blog", label: "Блог" },
  { href: "/#contacts", label: "Контакты" },
] as const;

export const productLines = [
  {
    slug: "kostyumy",
    title: "Костюмы",
    nav: "Костюмы",
    image: "/images/product-suits.jpg",
  },
  {
    slug: "pidzhaki",
    title: "Пиджаки",
    nav: "Пиджаки",
    image: "/images/product-jackets.jpg",
  },
  {
    slug: "bryuki",
    title: "Брюки",
    nav: "Брюки",
    image: "/images/product-trousers.jpg",
  },
  {
    slug: "zhilety",
    title: "Жилеты",
    nav: "Жилеты",
    image: "/images/product-vests.jpg",
  },
] as const;
