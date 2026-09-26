import { CheckCircle2, MapPin } from "lucide-react";
import { AppCard, MochiBadge, MockupFigure, Tag } from "@/components/ui/mockup";

export function MeetingVisual() {
  return (
    <MockupFigure label="Ejemplo ilustrativo: Mochi muestra la reunión de padres del miércoles a las 8:10 como horario confirmado, por sobre un mensaje anterior.">
      <div className="mb-3 rounded-xl border border-dashed border-slate-300 bg-white/60 px-3 py-2 text-xs text-ink-muted">
        <span className="font-semibold">Mensaje anterior:</span>{" "}
        <span className="line-through">Reunión el miércoles a las 7:45</span>
      </div>
      <AppCard className="p-5">
        <div className="flex items-center justify-between gap-2">
          <MochiBadge />
          <Tag tone="green">Horario confirmado</Tag>
        </div>
        <p className="mt-4 font-display text-lg font-bold text-ink">Reunión de padres</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-canvas p-3">
            <p className="text-xs text-ink-muted">Día</p>
            <p className="text-sm font-semibold text-ink">Miércoles</p>
          </div>
          <div className="rounded-xl bg-canvas p-3">
            <p className="text-xs text-ink-muted">Hora</p>
            <p className="text-sm font-semibold text-ink">8:10</p>
          </div>
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-sm text-ink-soft">
          <MapPin className="size-4 text-ink-muted" aria-hidden="true" /> Colegio
        </p>
        <p className="mt-3 flex items-center gap-1.5 border-t border-line pt-3 text-xs text-ink-muted">
          <CheckCircle2 className="size-3.5 text-emerald-500" aria-hidden="true" />
          Última actualización: comunicación institucional
        </p>
      </AppCard>
    </MockupFigure>
  );
}
