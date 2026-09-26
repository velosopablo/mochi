import { AppCard, MockupFigure, Tag, type Tone } from "@/components/ui/mockup";

const today: Array<{ label: string; tone: Tone; text: string }> = [
  { label: "Importante", tone: "orange", text: "Autorización vence mañana." },
  { label: "Próxima evaluación", tone: "red", text: "Matemática · Viernes." },
  { label: "Tarea", tone: "blue", text: "Inglés · Miércoles." },
  { label: "Evento", tone: "green", text: "Entrenamiento · 17:30." },
];

export function TodayMockup() {
  return (
    <MockupFigure label="Ejemplo ilustrativo del resumen diario de Mochi.">
      <AppCard className="p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <p className="font-display text-lg font-bold text-ink">Hoy con Mochi</p>
          <span className="text-xs text-ink-muted">Lectura: 40 s</span>
        </div>
        <ul className="mt-4 divide-y divide-line">
          {today.map((item) => (
            <li key={item.label} className="flex flex-col gap-1.5 py-3 first:pt-0 last:pb-0">
              <Tag tone={item.tone} className="self-start">
                {item.label}
              </Tag>
              <p className="text-[15px] font-medium text-ink">{item.text}</p>
            </li>
          ))}
        </ul>
      </AppCard>
    </MockupFigure>
  );
}
