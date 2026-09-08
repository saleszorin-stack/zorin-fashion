import type { Metadata } from "next";
import { ProductPageContent } from "@/components/ProductPageContent";
import { products } from "@/lib/products";
import { ogImages, ogMeta } from "@/lib/seo";

const product = products.find((p) => p.slug === "pidzhaki")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  keywords: product.keywords,
  alternates: { canonical: "/pidzhaki" },
  ...ogMeta({
    title: product.metaTitle,
    description: product.metaDescription,
    path: "/pidzhaki",
    image: ogImages.jackets,
  }),
};

export default function Page() {
  return <ProductPageContent product={product} />;
}
