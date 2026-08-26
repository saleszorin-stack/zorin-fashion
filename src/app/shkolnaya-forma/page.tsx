import type { Metadata } from "next";
import { ProductPageContent } from "@/components/ProductPageContent";
import { products } from "@/lib/products";

const product = products.find((p) => p.slug === "shkolnaya-forma")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  keywords: product.keywords,
  alternates: { canonical: "/shkolnaya-forma" },
  openGraph: {
    title: product.metaTitle,
    description: product.metaDescription,
    url: "/shkolnaya-forma",
  },
};

export default function Page() {
  return <ProductPageContent product={product} />;
}
