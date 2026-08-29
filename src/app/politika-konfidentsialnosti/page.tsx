import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности сайта ZORIN — какие данные собираются, как обрабатываются и с какой целью.",
  alternates: { canonical: "/politika-konfidentsialnosti" },
  robots: { index: false, follow: true },
};

export default function PolitikaKonfidentsialnostiPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Политика конфиденциальности" }]} />

      <section>
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="eyebrow text-accent">Правовая информация</p>
          <h1 className="font-serif mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            Политика конфиденциальности
          </h1>
          <p className="mt-4 text-sm text-muted">
            Действует с 29 августа 2026 года
          </p>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
            <p>
              Настоящая Политика определяет порядок обработки персональных
              данных посетителей сайта {site.url.replace("https://", "")}{" "}
              (далее — Сайт), принадлежащего {site.legalName} (далее —
              Оператор). Используя Сайт, посетитель соглашается с условиями
              настоящей Политики.
            </p>
          </div>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            1. Оператор персональных данных
          </h2>
          <div className="mt-4 space-y-1 text-base leading-relaxed text-muted">
            <p>{site.legalName}</p>
            <p>ИНН: {site.inn}</p>
            <p>Адрес: {site.address.full}</p>
            <p>Email: {site.email}</p>
          </div>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            2. Какие данные собираются
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Сайт не запрашивает у посетителей персональные данные напрямую —
              формы обратной связи на Сайте нет, связь происходит через
              мессенджеры и телефон, указанные на странице «Контакты». В
              фоновом режиме Сайт использует сервис веб-аналитики
              Яндекс.Метрика, который автоматически собирает:
            </p>
            <ul className="ml-5 list-disc space-y-2">
              <li>IP-адрес и связанные с ним данные о геолокации;</li>
              <li>файлы cookie и данные браузера/устройства;</li>
              <li>
                сведения о посещённых страницах, времени на сайте и переходах;
              </li>
              <li>
                данные веб-визора (клики, скролл, движения курсора) — для
                анализа удобства Сайта.
              </li>
            </ul>
            <p>
              Эти данные обрабатываются в обезличенном виде и используются
              только для анализа посещаемости и улучшения работы Сайта — не
              для идентификации конкретного человека.
            </p>
          </div>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            3. Цели обработки
          </h2>
          <ul className="mt-4 ml-5 list-disc space-y-2 text-base leading-relaxed text-muted">
            <li>анализ посещаемости и поведения посетителей Сайта;</li>
            <li>улучшение содержания и удобства Сайта;</li>
            <li>оценка эффективности продвижения Сайта в поисковых системах.</li>
          </ul>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            4. Передача данных третьим лицам
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Для сбора статистики Сайт использует сервис Яндекс.Метрика
            (оператор — ООО «Яндекс»); обработка данных этим сервисом
            регулируется отдельной политикой конфиденциальности Яндекса.
            Оператор Сайта не передаёт данные посетителей каким-либо иным
            третьим лицам и не использует их в рекламных или коммерческих
            целях, кроме указанных в разделе 3.
          </p>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            5. Файлы cookie
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Cookie — небольшие файлы, сохраняемые в браузере посетителя для
            работы счётчика аналитики. Вы можете отключить cookie в настройках
            своего браузера в любой момент — это не повлияет на доступность
            содержимого Сайта.
          </p>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            6. Срок хранения данных
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Обезличенные данные аналитики хранятся в системе Яндекс.Метрика в
            течение срока, определённого правилами этого сервиса, и отдельно
            Оператором не хранятся.
          </p>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            7. Права посетителя
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Вы вправе запросить у Оператора информацию о том, какие данные о
            вас обрабатываются, а также потребовать их удаления — напишите на
            email, указанный в разделе 1.
          </p>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            8. Изменения Политики
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Оператор вправе вносить изменения в настоящую Политику. Актуальная
            редакция всегда доступна на этой странице.
          </p>
        </div>
      </section>
    </>
  );
}
