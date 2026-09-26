import { ArrowDown, CalendarX2, Mail, MessageSquareQuote } from "lucide-react";
import { AppCard, MochiBadge, MockupFigure, Tag } from "@/components/ui/mockup";

const inputs = [
  { icon: MessageSquareQuote, source: "Tu hijo/a", text: "“Creo que mañana hay prueba de Música.”" },
  { icon: CalendarX2, source: "Calendario", text: "Sin evaluaciones cargadas" },
  { icon: Mail, source: "Comunicación", text: "“Repasar la unidad para la evaluación.” Sin fecha." },
];

export function UncertainTestVisual() {
  return (
    <MockupFigure label="Ejemplo ilustrativo: tres fuentes con información distinta y Mochi marcando la evaluación como pendiente de confirmación.">
      <ul className="space-y-2">
        {inputs.map(({ icon: Icon, source, text }) => (
          <li key={source} className="flex items-start gap-2.5 rounded-xl border border-line bg-white/80 px-3 py-2.5">
            <Icon className="mt-0.5 size-4 shrink-0 text-ink-muted" aria-hidden="true" />
            <p className="text-xs leading-snug">
              <span className="block font-semibold text-ink">{source}</span>
              <span className="text-ink-muted">{text}</span>
            </p>
          </li>
        ))}
      </ul>
      <ArrowDown className="mx-auto my-2.5 size-5 text-brand-400" aria-hidden="true" />
      <AppCard className="border-amber-200 p-5">
        <div className="flex items-center justify-between gap-2">
          <MochiBadge />
          <Tag tone="amber">Pendiente de confirmación</Tag>
        </div>
        <p className="mt-4 text-xs font-semibold text-ink-muted">Posible evaluación</p>
        <p className="font-display text-lg font-bold text-ink">Música</p>
        <p className="text-sm text-ink-soft">Próxima semana · fecha sin confirmar</p>
        <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-900">
          Las fuentes no coinciden. Conviene confirmarlo con el docente.
        </p>
      </AppCard>
    </MockupFigure>
  );
}
