import type { Metadata } from "next";
import { ProductPageContent } from "@/components/ProductPageContent";
import { products } from "@/lib/products";

const product = products.find((p) => p.slug === "bryuki")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  keywords: product.keywords,
  alternates: { canonical: "/bryuki" },
  openGraph: {
    title: product.metaTitle,
    description: product.metaDescription,
    url: "/bryuki",
  },
};

export default function Page() {
  return <ProductPageContent product={product} />;
}
