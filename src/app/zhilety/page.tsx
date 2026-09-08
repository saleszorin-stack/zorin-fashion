import type { Metadata } from "next";
import { ProductPageContent } from "@/components/ProductPageContent";
import { products } from "@/lib/products";
import { ogImages, ogMeta } from "@/lib/seo";

const product = products.find((p) => p.slug === "zhilety")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  keywords: product.keywords,
  alternates: { canonical: "/zhilety" },
  ...ogMeta({
    title: product.metaTitle,
    description: product.metaDescription,
    path: "/zhilety",
    image: ogImages.vests,
  }),
};

export default function Page() {
  return <ProductPageContent product={product} />;
}
