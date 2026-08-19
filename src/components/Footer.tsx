import Link from "next/link";
import { site } from "@/lib/site";
import { navLinks, productLines } from "@/lib/nav";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-invert-background text-invert-foreground/60">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 border-b border-invert-foreground/15 pb-10 sm:grid-cols-3">
          <div>
            <Logo className="h-6 w-auto text-invert-foreground" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {site.address.full}
            </p>
          </div>

          <div>
            <p className="eyebrow text-invert-foreground/40">
              Продукция
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {productLines.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="rounded-sm hover:text-invert-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-invert-background"
                  >
                    {p.nav}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/korporativnaya-odezhda"
                  className="rounded-sm hover:text-invert-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-invert-background"
                >
                  Корпоративная одежда
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-invert-foreground/40">
              Компания
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-sm hover:text-invert-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-invert-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.legalName}, ИНН{" "}
            {site.inn}
          </p>
          <p>{site.phones[0].label}</p>
        </div>
      </div>
    </footer>
  );
}
