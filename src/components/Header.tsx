"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { navLinks, productLines } from "@/lib/nav";
import { Logo } from "@/components/Logo";

const navClass =
  "text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground";

export function Header() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const primaryPhone = site.phones[0];
  const [productsLink, ...restLinks] = navLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-foreground">
          <Logo className="h-6 w-auto" />
          <span className="eyebrow hidden text-muted sm:inline">
            Fashion
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <div className="group relative py-2">
            <Link href={productsLink.href} className={`flex items-center gap-1 ${navClass}`}>
              {productsLink.label}
              <span className="text-[9px] transition-transform duration-200 group-hover:-rotate-180">
                ▾
              </span>
            </Link>
            <div className="invisible absolute left-0 top-full min-w-[170px] pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="flex flex-col rounded-lg border border-border bg-background-panel py-2">
                {productLines.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="px-4 py-2 text-sm text-muted transition-colors hover:bg-background hover:text-foreground"
                  >
                    {p.nav}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {restLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${primaryPhone.raw}`}
          className="hidden items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85 lg:flex"
        >
          {primaryPhone.label}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Открыть меню"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
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
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-4 lg:hidden">
          <button
            type="button"
            onClick={() => setProductsOpen((v) => !v)}
            aria-expanded={productsOpen}
            className="flex items-center justify-between rounded-md px-2 py-2.5 text-sm text-muted hover:bg-background-panel hover:text-foreground"
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
                  className="rounded-md px-2 py-2 text-sm text-muted hover:bg-background-panel hover:text-foreground"
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
              className="rounded-md px-2 py-2.5 text-sm text-muted hover:bg-background-panel hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${primaryPhone.raw}`}
            className="mt-2 rounded-full bg-foreground px-2 py-2.5 text-center text-sm font-medium text-background"
          >
            {primaryPhone.label}
          </a>
        </nav>
      )}
    </header>
  );
}
