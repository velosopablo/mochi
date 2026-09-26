import { ClipboardCheck, NotebookPen, LayoutGrid } from "lucide-react";
import { AppCard, MochiBadge, MockButton, MockupFigure, Tag } from "@/components/ui/mockup";

export function AuthorizationVisual() {
  return (
    <MockupFigure label="Ejemplo ilustrativo: Mochi muestra una autorización pendiente que vence mañana, con la acción a realizar.">
      <div className="mb-3 flex flex-wrap gap-2 text-xs text-ink-muted">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-slate-300 bg-white/70 px-2.5 py-1">
          <LayoutGrid className="size-3.5" aria-hidden="true" /> Comunicado en plataforma
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-slate-300 bg-white/70 px-2.5 py-1">
          <NotebookPen className="size-3.5" aria-hidden="true" /> Nota en el cuaderno
        </span>
      </div>
      <AppCard className="p-5">
        <div className="flex items-center justify-between">
          <MochiBadge />
          <Tag tone="orange">Vence mañana</Tag>
        </div>
        <div className="mt-4 flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-warm-50 text-warm-600">
            <ClipboardCheck className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold text-warm-700">Autorización pendiente</p>
            <p className="font-display text-lg font-bold text-ink">Salida escolar</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-canvas p-3">
          <p className="text-xs font-medium text-ink-muted">Acción</p>
          <p className="text-sm font-semibold text-ink">Completar autorización en la plataforma</p>
        </div>
        <div className="mt-4 flex gap-2">
          <MockButton className="flex-1">Ver instrucciones</MockButton>
          <MockButton variant="secondary">Recordarme</MockButton>
        </div>
      </AppCard>
    </MockupFigure>
  );
}
