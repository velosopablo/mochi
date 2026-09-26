import { CheckCircle2, Music, XCircle } from "lucide-react";
import { AppCard, MochiBadge, MockupFigure } from "@/components/ui/mockup";

export function UpdatedLinkVisual() {
  return (
    <MockupFigure label="Ejemplo ilustrativo: un enlace original no disponible y la versión actualizada del recurso marcada como vigente.">
      <AppCard className="p-5">
        <div className="flex items-center justify-between">
          <MochiBadge />
          <span className="text-xs text-ink-muted">Recurso escolar</span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
            <Music className="size-5" aria-hidden="true" />
          </span>
          <p className="font-display text-lg font-bold text-ink">Canción para el acto</p>
        </div>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-2.5 rounded-xl border border-line bg-canvas px-3 py-2.5 text-sm text-ink-muted">
            <XCircle className="size-4 shrink-0 text-rose-400" aria-hidden="true" />
            <span className="line-through">Enlace original</span>
            <span className="ml-auto text-xs">No disponible</span>
          </li>
          <li className="flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm font-semibold text-emerald-900">
            <CheckCircle2 className="size-4 shrink-0 text-emerald-600" aria-hidden="true" />
            Recurso actualizado
            <span className="ml-auto text-xs font-medium text-emerald-700">Vigente</span>
          </li>
        </ul>
      </AppCard>
    </MockupFigure>
  );
}
