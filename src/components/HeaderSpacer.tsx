"use client";

import { usePathname } from "next/navigation";
import { transparentHeaderPaths } from "@/lib/nav";

export function HeaderSpacer() {
  const pathname = usePathname();
  const isHeroPage = (transparentHeaderPaths as readonly string[]).includes(pathname);
  if (isHeroPage) return null;
  return <div className="h-[76px]" aria-hidden />;
}
