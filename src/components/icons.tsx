type IconProps = { className?: string };

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.3 8.6c.3-.6.6-.6.9-.6h.6c.2 0 .4.1.5.4l.8 1.9c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4-.1.6.6 1.1 1.6 2.1 2.7 2.7.2.1.4.1.6-.1l.6-.5c.2-.1.4-.2.6-.1l1.9.8c.3.1.4.3.4.5v.6c0 .3 0 .6-.6.9-.7.4-1.6.5-2.4.3-2.5-.7-4.7-2.9-5.4-5.4-.2-.8-.1-1.7.3-2.4Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6.8 12.3 16.6 8.4c.5-.2.9.2.7.7l-1.7 8.1c-.1.5-.6.6-1 .3l-2.6-2-1.3 1.3c-.2.2-.5.1-.5-.2l-.2-2.7-3.2-1.1c-.5-.2-.5-.9 0-1.1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MaxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="6" stroke="currentColor" strokeWidth="1.6" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="10"
        fontWeight="700"
        fill="currentColor"
      >
        M
      </text>
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function EmailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 3.5h2.3c.5 0 .9.3 1 .8l.8 3.1c.1.4 0 .8-.3 1.1l-1.6 1.5a13.7 13.7 0 0 0 5.2 5.2l1.5-1.6c.3-.3.7-.4 1.1-.3l3.1.8c.5.1.8.5.8 1v2.3c0 .7-.6 1.2-1.3 1.1C11.9 17.6 6.4 12.1 5.5 4.8c-.1-.7.4-1.3 1.1-1.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
