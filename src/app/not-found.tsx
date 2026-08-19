import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-5 py-20 sm:px-8">
      <p className="eyebrow text-accent">404</p>
      <h1 className="font-serif mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
        Страница не найдена
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        Такой страницы нет — возможно, ссылка устарела или в адресе опечатка.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-[opacity,transform] hover:opacity-85 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          На главную
        </Link>
        <Link
          href="/produktsiya"
          className="text-sm font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70 active:opacity-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Смотреть продукцию →
        </Link>
      </div>
    </section>
  );
}
