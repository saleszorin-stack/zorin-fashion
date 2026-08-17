import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Wholesale } from "@/components/Wholesale";
import { Faq } from "@/components/Faq";
import { Contacts } from "@/components/Contacts";
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
        <ClientLogos />
        <About />
        <Products />
        <Wholesale />
        <Faq />
        <Contacts />
      </main>
    </>
  );
}
