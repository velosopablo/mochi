import { Download, FileText, Printer, Store } from "lucide-react";
import { AppCard, MochiBadge, MockupFigure, Tag } from "@/components/ui/mockup";

const actions = [
  { icon: Download, label: "Descargar" },
  { icon: Printer, label: "Imprimir" },
  { icon: Store, label: "Comprar en librería" },
];

export function LostDocumentVisual() {
  return (
    <MockupFigure label="Ejemplo ilustrativo: Mochi muestra el cuadernillo de lectura en PDF junto con las acciones sugeridas.">
      <AppCard className="p-5">
        <div className="flex items-center justify-between">
          <MochiBadge />
          <Tag tone="violet">Material escolar</Tag>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-line p-3">
          <span className="grid h-12 w-10 shrink-0 place-items-center rounded-md bg-rose-50 text-rose-600">
            <FileText className="size-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">Cuadernillo de lectura</p>
            <p className="text-xs text-ink-muted">PDF · 164 páginas</p>
          </div>
        </div>
        <p className="mt-4 text-xs font-medium text-ink-muted">Acción sugerida</p>
        <ul className="mt-2 grid grid-cols-3 gap-2">
          {actions.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center gap-1 rounded-xl bg-canvas px-1 py-2.5 text-center text-[11px] leading-tight font-semibold text-ink-soft">
              <Icon className="size-4 text-brand-600" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-ink-muted">
          Imprimirlo o comprarlo: ambas opciones son válidas.
        </p>
        <p className="mt-2 text-[11px] text-ink-muted">Llegó por WhatsApp · unido al comunicado original</p>
      </AppCard>
    </MockupFigure>
  );
}
