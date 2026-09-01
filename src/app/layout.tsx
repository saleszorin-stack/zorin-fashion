import type { Metadata, Viewport } from "next";
import { Manrope, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { HeaderSpacer } from "@/components/HeaderSpacer";
import { Footer } from "@/components/Footer";
import { site, YANDEX_METRIKA_ID } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const title = "ZORIN — контрактный пошив мужской классики в Кыргызстане";
const description =
  "ZORIN — контрактное производство мужской классики: костюмы, пиджаки, брюки, жилеты, школьная форма. Фабрика полного цикла в Кыргызстане с 1997 года, 160 сотрудников, 1800 м². Пошив на заказ от 300 единиц на модель одного цвета, работа с брендами из России и Казахстана.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s — ZORIN",
  },
  description,
  keywords: [
    "швейная фабрика Бишкек",
    "швейная фабрика Кыргызстан",
    "швейное производство полного цикла Бишкек",
    "пошив одежды на заказ",
    "контрактное производство одежды",
    "пошив мужских костюмов оптом",
    "пошив брюк оптом Кыргызстан",
    "пошив жилетов оптом",
    "производство пиджаков Бишкек",
    "контрактное производство одежды",
    "отшив по лекалам заказчика OEM",
    "производство одежды под своим брендом private label",
    "ZORIN",
    "производство одежды в Кыргызстане для России",
  ],
  authors: [{ name: "ZORIN" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    siteName: "ZORIN",
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
    taxID: site.inn,
    url: site.url,
    email: site.email,
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
      className={`${manrope.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}', 'ym');

            ym(${YANDEX_METRIKA_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
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
