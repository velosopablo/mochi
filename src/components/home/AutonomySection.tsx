import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const stages = [
  {
    step: "Etapa 1",
    title: "Recibís las alertas.",
    text: "Mochi te avisa a vos qué necesita atención. Vos acompañás.",
    parent: 80,
  },
  {
    step: "Etapa 2",
    title: "Planifican juntos.",
    text: "Tu hijo/a y vos comparten la misma planificación y la revisan juntos.",
    parent: 50,
  },
  {
    step: "Etapa 3",
    title: "Tu hijo/a se organiza.",
    text: "Administra sus responsabilidades. Vos seguís viendo lo importante.",
    parent: 20,
  },
];

export function AutonomySection() {
  return (
    <section aria-labelledby="autonomia-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="autonomia-title"
          eyebrow="Autonomía"
          title="El objetivo no es que vos organices mejor a tu hijo."
          description={
            <>
              <strong className="font-semibold text-ink">Es que tu hijo aprenda a organizarse solo.</strong>{" "}
              Mochi puede empezar ayudándote a vos y, de a poco, trasladar la responsabilidad al
              estudiante.
            </>
          }
        />

        <ol className="mt-14 grid gap-4 md:grid-cols-3 md:gap-6">
          {stages.map((s, i) => (
            <li key={s.step} className="relative rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-7">
              <p className="text-xs font-semibold tracking-wider text-brand-700 uppercase">{s.step}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
              <div className="mt-6" aria-hidden="true">
                <div className="flex h-2 overflow-hidden rounded-full">
                  <span className="bg-warm-300" style={{ width: `${s.parent}%` }} />
                  <span className={cn("flex-1", i === 2 ? "bg-brand-600" : "bg-brand-400")} />
                </div>
                <div className="mt-2 flex justify-between text-xs text-ink-muted">
                  <span>Madre / padre</span>
                  <span>Hijo/a</span>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-14 text-center font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Acompañar sin perseguir<span className="text-warm-500">.</span>
        </p>
      </Container>
    </section>
  );
}
