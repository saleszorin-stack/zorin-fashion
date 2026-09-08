import type { Metadata } from "next";
import { ProductPageContent } from "@/components/ProductPageContent";
import { products } from "@/lib/products";
import { ogImages, ogMeta } from "@/lib/seo";

const product = products.find((p) => p.slug === "shkolnaya-forma")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  keywords: product.keywords,
  alternates: { canonical: "/shkolnaya-forma" },
  ...ogMeta({
    title: product.metaTitle,
    description: product.metaDescription,
    path: "/shkolnaya-forma",
    image: ogImages.school,
  }),
};

export default function Page() {
  return <ProductPageContent product={product} />;
}
