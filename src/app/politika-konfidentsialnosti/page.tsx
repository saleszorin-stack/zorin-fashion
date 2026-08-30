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
            Действует с 30 августа 2026 года
          </p>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
            <p>
              Настоящая Политика определяет порядок обработки персональных
              данных посетителей сайта {site.url.replace("https://", "")}{" "}
              (далее — Сайт), принадлежащего {site.legalName} (далее —
              Оператор), в соответствии с законодательством Кыргызской
              Республики, включая Закон КР «Об информации персонального
              характера». Используя Сайт, посетитель соглашается с условиями
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
            2. Какие данные собираются и зачем
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
            <p>
              Если вы пишете нам через мессенджер, звоните или обращаетесь
              через контакты, указанные на странице «Контакты», — эти данные
              используются только для того, чтобы ответить на обращение, и
              никуда дальше не передаются.
            </p>
            <p>
              Отдельно от этого Сайт использует сервис веб-аналитики
              Яндекс.Метрика, который автоматически собирает IP-адрес,
              файлы cookie, данные браузера и устройства, а также сведения о
              посещённых страницах и переходах. Если на Сайте включён
              веб-визор Метрики, он дополнительно записывает движения
              курсора, клики и прокрутку в рамках сессии — это запись
              поведения конкретного посетителя, связанная с его IP-адресом,
              а не полностью анонимная статистика. Мы используем эти данные
              только для того, чтобы понять, насколько удобно пользоваться
              Сайтом, и оценить, откуда приходят посетители — не для того,
              чтобы устанавливать личность конкретного человека.
            </p>
          </div>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            3. Передача данных третьим лицам
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Данные аналитики обрабатываются сервисом Яндекс.Метрика
            (ООО «Яндекс») по его собственной политике конфиденциальности.
            Больше мы никому эти данные не передаём и не используем в
            рекламных или коммерческих целях, кроме описанного в разделе 2.
          </p>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            4. Cookie и хранение данных
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Cookie — небольшие файлы в браузере посетителя, нужны для работы
            счётчика аналитики; отключить их можно в настройках браузера в
            любой момент, без потери доступа к содержимому Сайта. Сами данные
            хранятся на стороне сервиса Яндекс.Метрика, по его правилам
            хранения — отдельной базы данных о посетителях мы не ведём, но
            видим эту статистику через интерфейс Метрики.
          </p>

          <h2 className="font-serif mt-14 text-3xl font-semibold text-foreground sm:text-4xl">
            5. Права посетителя
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Вы вправе запросить у нас информацию о том, какие данные о вас
            обрабатываются, и потребовать их удаления — напишите на email,
            указанный в разделе 1. Актуальная редакция этой Политики всегда
            доступна на этой странице; при изменениях дата вверху документа
            обновляется.
          </p>
        </div>
      </section>
    </>
  );
}
