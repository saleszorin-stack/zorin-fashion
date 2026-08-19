import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { HeaderSpacer } from "@/components/HeaderSpacer";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const title = "ZORIN — швейная фабрика мужской классики в Бишкеке";
const description =
  "Фабрика ZORIN шьёт классические мужские костюмы, пиджаки, брюки и жилеты в Бишкеке с 1997 года. 160 сотрудников, 1800 м², поточное производство полного цикла. Опт от 500 единиц на модель, работа с Россией и Казахстаном.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s — Zorin Fashion",
  },
  description,
  keywords: [
    "швейная фабрика Бишкек",
    "швейное производство полного цикла Бишкек",
    "пошив мужских костюмов оптом",
    "пошив брюк оптом Кыргызстан",
    "пошив жилетов оптом",
    "производство пиджаков Бишкек",
    "контрактное производство одежды",
    "отшив по лекалам заказчика OEM",
    "производство одежды под своим брендом private label",
    "ZORIN Fashion",
    "производство одежды в Кыргызстане для России",
  ],
  authors: [{ name: "ZORIN" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    siteName: "Zorin Fashion",
    title,
    description,
    images: [{ url: "/images/hero.jpg", width: 1200, height: 800, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#12161c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    ...(site.email ? { email: site.email } : {}),
    telephone: site.phones.map((p) => p.raw),
    description,
    foundingDate: String(site.stats.foundedYear),
    numberOfEmployees: site.stats.employees,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: "с. Новопавловка",
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "KG",
    },
    areaServed: ["Кыргызстан", "Россия", "Казахстан"],
    knowsAbout: [
      "Мужские костюмы",
      "Пиджаки",
      "Брюки",
      "Жилеты",
      "Оптовый пошив одежды",
      "Контрактное производство одежды (OEM/ODM/private label)",
    ],
  };

  return (
    <html
      lang="ru"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-background"
        >
          Перейти к содержимому
        </a>
        <Header />
        <HeaderSpacer />
        <div id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
