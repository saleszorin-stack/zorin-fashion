import type { Metadata } from "next";
import { ProductPageContent } from "@/components/ProductPageContent";
import { products } from "@/lib/products";

const product = products.find((p) => p.slug === "kostyumy")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  keywords: product.keywords,
  alternates: { canonical: "/kostyumy" },
  openGraph: {
    title: product.metaTitle,
    description: product.metaDescription,
    url: "/kostyumy",
  },
};

export default function Page() {
  return <ProductPageContent product={product} />;
}
