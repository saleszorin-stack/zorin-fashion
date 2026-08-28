"use client";

import { site } from "@/lib/site";
import { trackGoal } from "@/lib/metrika";
import {
  EmailIcon,
  InstagramIcon,
  MaxIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/icons";

const channels = [
  {
    icon: PhoneIcon,
    label: "Телефон",
    value: site.phones[0].label,
    href: `tel:${site.phones[0].raw}`,
    external: false,
    goal: "contact_phone",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Написать в WhatsApp",
    href: site.whatsapp,
    external: true,
    goal: "contact_whatsapp",
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    value: "Написать в Telegram",
    href: site.telegram,
    external: true,
    goal: "contact_telegram",
  },
  {
    icon: MaxIcon,
    label: "MAX",
    value: "Написать в MAX",
    href: site.max,
    external: true,
    goal: "contact_max",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "Открыть Instagram",
    href: site.instagram,
    external: true,
    goal: "contact_instagram",
  },
  {
    icon: EmailIcon,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
    goal: "contact_email",
  },
] as const;

export function ContactChannels() {
  return (
    <dl className="mt-12 divide-y divide-border border-t border-border">
      {channels.map((c) => (
        <div key={c.label} className="flex items-center gap-4 py-5">
          <c.icon className="h-6 w-6 shrink-0 text-accent" />
          <dt className="w-24 shrink-0 font-display text-sm font-bold text-foreground sm:w-28">
            {c.label}
          </dt>
          <dd>
            <a
              href={c.href}
              onClick={() => trackGoal(c.goal)}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-base font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70 active:opacity-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {c.value}
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}
