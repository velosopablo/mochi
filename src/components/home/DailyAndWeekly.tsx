import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TodayMockup } from "./TodayMockup";
import { WeeklySummaryMockup } from "./WeeklySummaryMockup";

export function DailyAndWeekly() {
  return (
    <section aria-labelledby="resumenes-title" className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="resumenes-title"
          eyebrow="Tu día y tu semana"
          title="Todo en menos de un minuto."
          description="Un resumen cada mañana para saber qué pasa hoy. Una mirada a la semana para decidir por dónde empezar."
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-ink-muted">Resumen diario</h3>
            <TodayMockup />
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-ink-muted">Resumen semanal</h3>
            <WeeklySummaryMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
