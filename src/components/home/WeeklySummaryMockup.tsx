import { Lightbulb } from "lucide-react";
import { AppCard, MockButton, MockupFigure } from "@/components/ui/mockup";
import { cn } from "@/lib/cn";

const totals = [
  { count: 2, label: "evaluaciones" },
  { count: 2, label: "tareas" },
  { count: 1, label: "autorización" },
  { count: 1, label: "evento" },
];

/** Carga relativa por día (0–4), solo ilustrativa. */
const load = [
  { day: "L", value: 1 },
  { day: "M", value: 1 },
  { day: "Mi", value: 3 },
  { day: "J", value: 4 },
  { day: "V", value: 4 },
];

export function WeeklySummaryMockup() {
  return (
    <MockupFigure label="Ejemplo ilustrativo del resumen semanal de Mochi: la mayor carga académica está entre miércoles y viernes.">
      <AppCard className="p-5 sm:p-6">
        <p className="font-display text-lg font-bold text-ink">Esta semana</p>
        <ul className="mt-4 grid grid-cols-2 gap-2">
          {totals.map(({ count, label }) => (
            <li key={label} className="rounded-xl bg-canvas px-3 py-2.5">
              <span className="font-display text-2xl font-bold text-ink tabular-nums">{count}</span>{" "}
              <span className="text-sm text-ink-soft">{label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex h-20 items-end gap-2" aria-hidden="true">
          {load.map(({ day, value }, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
              <span
                className={cn("w-full rounded-md", value >= 3 ? "bg-brand-500" : "bg-brand-100")}
                style={{ height: `${value * 13}px` }}
              />
              <span className="text-[11px] font-medium text-ink-muted">{day}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 flex gap-2 rounded-xl bg-brand-50 p-3 text-sm text-brand-900">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
          La mayor carga académica está entre miércoles y viernes.
        </p>
        <MockButton className="mt-4 h-10 w-full text-sm">Organizar mi semana</MockButton>
      </AppCard>
    </MockupFigure>
  );
}
