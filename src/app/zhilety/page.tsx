import type { Metadata } from "next";
import { ProductPageContent } from "@/components/ProductPageContent";
import { products } from "@/lib/products";

const product = products.find((p) => p.slug === "zhilety")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  keywords: product.keywords,
  alternates: { canonical: "/zhilety" },
  openGraph: {
    title: product.metaTitle,
    description: product.metaDescription,
    url: "/zhilety",
  },
};

export default function Page() {
  return <ProductPageContent product={product} />;
}
