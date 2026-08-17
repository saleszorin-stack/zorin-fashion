"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { navLinks } from "@/lib/nav";
import { Logo } from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const primaryPhone = site.phones[0];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 text-foreground">
          <Logo className="h-6 w-auto" />
          <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-muted sm:inline">
            Fashion
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
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
          {navLinks.map((link) => (
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
