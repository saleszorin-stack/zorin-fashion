import type { Metadata } from "next";
import { ProductPageContent } from "@/components/ProductPageContent";
import { products } from "@/lib/products";
import { ogImages, ogMeta } from "@/lib/seo";

const product = products.find((p) => p.slug === "bryuki")!;

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
  keywords: product.keywords,
  alternates: { canonical: "/bryuki" },
  ...ogMeta({
    title: product.metaTitle,
    description: product.metaDescription,
    path: "/bryuki",
    image: ogImages.trousers,
  }),
};

export default function Page() {
  return <ProductPageContent product={product} />;
}
