import { ArrowDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MockItem, MockupFigure } from "@/components/ui/mockup";

const noise = [
  { count: 17, label: "mensajes" },
  { count: 3, label: "emails" },
  { count: 2, label: "notificaciones" },
  { count: 1, label: "PDF" },
  { count: 1, label: "calendario" },
];

export function SignalVsNoise() {
  return (
    <section aria-labelledby="diferencia-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="diferencia-title"
          title="Mochi no quiere mostrarte más información."
          description="Quiere evitar que tengas que revisarla toda."
        />

        <MockupFigure
          label="Comparación: hoy, 17 mensajes, 3 emails, 2 notificaciones, 1 PDF y 1 calendario. Con Mochi, 3 cosas requieren atención."
          className="mx-auto mt-14 grid max-w-4xl items-center gap-6 md:grid-cols-[1fr_auto_1fr]"
        >
          <div className="rounded-3xl border border-line bg-canvas p-6 sm:p-8">
            <p className="text-sm font-semibold text-ink-muted">Hoy</p>
            <ul className="mt-4 space-y-2" aria-hidden="true">
              {noise.map(({ count, label }) => (
                <li
                  key={label}
                  className="flex items-baseline gap-3 rounded-xl bg-white px-4 py-2.5 ring-1 ring-line"
                >
                  <span className="w-8 font-display text-2xl font-bold text-slate-500 tabular-nums">{count}</span>
                  <span className="text-[15px] text-ink-soft">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center text-brand-500" aria-hidden="true">
            <ArrowDown className="size-7 md:hidden" />
            <ArrowRight className="hidden size-7 md:block" />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lift ring-1 ring-brand-100 sm:p-8" aria-hidden="true">
            <p className="text-sm font-semibold text-brand-700">Con Mochi</p>
            <p className="mt-3 font-display text-3xl font-bold tracking-tight text-ink">
              3 cosas requieren atención.
            </p>
            <div className="mt-5 space-y-2">
              <MockItem tone="orange" title="Autorización" meta="Vence mañana" />
              <MockItem tone="red" title="Evaluación de Matemática" meta="Viernes" />
              <MockItem tone="blue" title="Reunión de padres" meta="Miércoles · 8:10" />
            </div>
          </div>
        </MockupFigure>
      </Container>
    </section>
  );
}
