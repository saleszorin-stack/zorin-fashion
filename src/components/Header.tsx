"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/site";
import { navLinks, productLines, transparentHeaderPaths } from "@/lib/nav";
import { Logo } from "@/components/Logo";

function navClass(active: boolean) {
  return `rounded-sm text-[15px] font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
    active ? "text-foreground" : "text-foreground/70 hover:text-foreground"
  }`;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const primaryPhone = site.phones[0];
  const [productsLink, ...restLinks] = navLinks;
  const productSlugs = productLines.map((p) => `/${p.slug}`);
  const productsActive = pathname === productsLink.href || productSlugs.includes(pathname);
  const isActive = (href: string) => href === pathname;

  const isHeroPage = (transparentHeaderPaths as readonly string[]).includes(pathname);
  const transparent = isHeroPage && !scrolled && !open;

  useEffect(() => {
    if (!isHeroPage) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHeroPage]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparent ? "bg-transparent" : "bg-background/95 backdrop-blur border-b border-border"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 sm:px-8">
        <Link
          href="/"
          aria-label="ZORIN — на главную"
          className="rounded-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Logo className="h-6 w-auto" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          <div className="group relative py-2">
            <Link
              href={productsLink.href}
              aria-current={productsActive ? "page" : undefined}
              className={`flex items-center gap-1.5 ${navClass(productsActive)}`}
            >
              {productsLink.label}
              <span className="text-[10px] transition-transform duration-200 group-hover:-rotate-180 group-focus-within:-rotate-180">
                ▾
              </span>
            </Link>
            <div className="invisible absolute left-1/2 top-full min-w-[180px] -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="flex flex-col rounded-lg border border-border bg-background-panel py-2">
                {productLines.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="px-4 py-2 text-sm text-muted transition-colors hover:bg-background hover:text-foreground focus-visible:bg-background focus-visible:text-foreground focus-visible:outline-none"
                  >
                    {p.nav}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {restLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={navClass(isActive(link.href))}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakty"
          className="hidden items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-[opacity,transform] hover:opacity-85 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:flex"
        >
          {primaryPhone.label}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-sm transition-transform active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4 lg:hidden">
          <button
            type="button"
            onClick={() => setProductsOpen((v) => !v)}
            aria-expanded={productsOpen}
            className={`flex items-center justify-between rounded-md px-2 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              productsActive ? "text-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            {productsLink.label}
            <span className={`text-[10px] transition-transform ${productsOpen ? "-rotate-180" : ""}`}>
              ▾
            </span>
          </button>
          {productsOpen && (
            <div className="flex flex-col gap-1 pl-4">
              {productLines.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(`/${p.slug}`) ? "page" : undefined}
                  className={`rounded-md px-2 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive(`/${p.slug}`) ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {p.nav}
                </Link>
              ))}
            </div>
          )}
          {restLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-md px-2 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isActive(link.href) ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kontakty"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-foreground px-2 py-2.5 text-center text-sm font-semibold text-background transition-[opacity,transform] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {primaryPhone.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
