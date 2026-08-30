import { Reveal } from "@/components/Reveal";

export function TrustStatement() {
  return (
    <section className="bg-invert-background py-20 text-center text-invert-foreground sm:py-28">
      <Reveal className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="font-serif text-balance text-2xl leading-snug sm:text-3xl md:text-4xl">
          90% заказов приходит от постоянных клиентов.
          <br />
          Старейшему партнёрству — более 15 лет!
        </p>
        <p className="eyebrow mt-6 text-invert-foreground/50">
          Самый честный показатель качества в контрактном производстве
        </p>
      </Reveal>
    </section>
  );
}
