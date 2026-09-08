import type { Metadata } from "next";
import { ProductPageContent } from "@/components/ProductPageContent";
import { products } from "@/lib/products";
import { ogImages, ogMeta } from "@/lib/seo";

const product = products.find((p) => p.slug === "kostyumy")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  keywords: product.keywords,
  alternates: { canonical: "/kostyumy" },
  ...ogMeta({
    title: product.metaTitle,
    description: product.metaDescription,
    path: "/kostyumy",
    image: ogImages.suits,
  }),
};

export default function Page() {
  return <ProductPageContent product={product} />;
}
