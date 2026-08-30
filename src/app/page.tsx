import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustStatement } from "@/components/TrustStatement";
import { PartnersAndCases } from "@/components/PartnersAndCases";
import { About } from "@/components/About";
import { WhyZorin } from "@/components/WhyZorin";
import { Products } from "@/components/Products";
import { Wholesale } from "@/components/Wholesale";
import { Faq } from "@/components/Faq";
import { faqItems } from "@/lib/faq";
import { faqPageJsonLd, jsonLdScript } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(faqPageJsonLd(faqItems)),
        }}
      />
      <main>
        <Hero />

        <section className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-10 sm:px-8">
            <Link
              href="/kontakty"
              className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-[opacity,transform] hover:opacity-85 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Оставить заявку
            </Link>
            <Link
              href="/produktsiya"
              className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70 active:opacity-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Смотреть продукцию →
            </Link>
          </div>
        </section>

        <TrustStatement />
        <PartnersAndCases />
        <About />
        <WhyZorin />
        <Products />
        <Wholesale />
        <Faq limit={6} moreHref="/opt#faq" />
      </main>
    </>
  );
}
