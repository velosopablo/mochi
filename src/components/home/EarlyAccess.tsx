import { Check } from "lucide-react";
import { EarlyAccessForm } from "@/components/forms/EarlyAccessForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

const expectations = [
  "Probar las primeras versiones de Mochi.",
  "Contarnos qué te sirve y qué no.",
  "Ayudarnos a decidir qué construir primero.",
];

export function EarlyAccess() {
  return (
    <section id="probar" aria-labelledby="probar-title" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_20%_20%,rgb(219_216_254/0.7),transparent_70%),radial-gradient(40%_30%_at_90%_90%,rgb(255_236_220/0.8),transparent_70%)]"
      />
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Acceso anticipado</Eyebrow>
          <h2
            id="probar-title"
            className="mt-5 font-display text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl lg:text-5xl lg:leading-[1.05]"
          >
            Estamos construyendo Mochi junto a familias reales.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-pretty text-ink-soft">
            Buscamos padres y madres interesados en probar las primeras versiones y ayudarnos a
            construir una mejor forma de organizar la vida escolar.
          </p>
          <ul className="mt-8 space-y-3">
            {expectations.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-ink">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-medium text-ink-muted">
            Participar del piloto inicial no implica compromiso de compra.
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8">
          <h3 className="font-display text-xl font-bold text-ink">Anotate para probar Mochi</h3>
          <p className="mt-1 mb-6 text-[15px] text-ink-soft">Te lleva menos de 2 minutos.</p>
          <EarlyAccessForm />
        </div>
      </Container>
    </section>
  );
}
