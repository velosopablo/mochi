import { BellRing } from "lucide-react";
import { AppCard, MockItem, MockupFigure } from "@/components/ui/mockup";

export function PickupVisual() {
  return (
    <MockupFigure label="Ejemplo ilustrativo: la pantalla Hoy de Mochi muestra una salida especial a las 10:00 con un recordatorio.">
      <AppCard className="p-5">
        <p className="font-display text-lg font-bold text-ink">Hoy</p>
        <div className="mt-3 rounded-2xl bg-brand-600 p-4 text-white">
          <p className="text-xs font-medium text-brand-100">Salida especial</p>
          <p className="font-display text-4xl font-bold tracking-tight">10:00</p>
          <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-brand-50">
            <BellRing className="size-3.5" aria-hidden="true" /> Llegar 10 minutos antes
          </p>
        </div>
        <div className="mt-3 space-y-2">
          <MockItem tone="blue" title="Tarea de Inglés" meta="Para el miércoles" />
          <MockItem tone="green" title="Entrenamiento" meta="17:30" />
        </div>
      </AppCard>
    </MockupFigure>
  );
}
