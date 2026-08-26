import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "@/components/Logo";
import { MaxIcon, TelegramIcon, WhatsAppIcon, InstagramIcon } from "@/components/icons";

const socialLinks = [
  { icon: WhatsAppIcon, href: site.whatsapp, label: "WhatsApp" },
  { icon: TelegramIcon, href: site.telegram, label: "Telegram" },
  { icon: MaxIcon, href: site.max, label: "MAX" },
  { icon: InstagramIcon, href: site.instagram, label: "Instagram" },
] as const;

export function Footer() {
  return (
    <footer className="bg-invert-background text-invert-foreground/60">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-invert-background"
            >
              <Logo className="h-6 w-auto text-invert-foreground" />
            </Link>
            <Link
              href="/kontakty"
              className="text-sm font-semibold text-invert-foreground/80 transition-colors hover:text-invert-foreground rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-invert-background"
            >
              {site.phones[0].label}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-invert-foreground/50 transition-colors hover:text-invert-foreground rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-invert-background"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-6 border-t border-invert-foreground/15 pt-6 text-xs">
          © {new Date().getFullYear()} {site.name} · {site.legalName}, ИНН{" "}
          {site.inn}
        </p>
      </div>
    </footer>
  );
}
