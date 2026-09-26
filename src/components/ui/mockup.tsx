import { LogoMark } from "@/components/layout/Logo";
import { cn } from "@/lib/cn";

/**
 * Piezas para dibujar pantallas de producto con HTML real (no imágenes):
 * nítidas en cualquier densidad, livianas y legibles para lectores de pantalla.
 * Todos los datos que se muestran son ficticios.
 */

export type Tone = "red" | "orange" | "blue" | "green" | "amber" | "violet" | "neutral";

const toneStyles: Record<Tone, { dot: string; pill: string; bar: string }> = {
  red: { dot: "bg-rose-500", pill: "bg-rose-50 text-rose-700 ring-rose-100", bar: "bg-rose-500" },
  orange: {
    dot: "bg-warm-500",
    pill: "bg-warm-50 text-warm-700 ring-warm-100",
    bar: "bg-warm-500",
  },
  blue: { dot: "bg-sky-500", pill: "bg-sky-50 text-sky-700 ring-sky-100", bar: "bg-sky-500" },
  green: {
    dot: "bg-emerald-500",
    pill: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    bar: "bg-emerald-500",
  },
  amber: {
    dot: "bg-amber-400",
    pill: "bg-amber-50 text-amber-800 ring-amber-100",
    bar: "bg-amber-400",
  },
  violet: {
    dot: "bg-brand-500",
    pill: "bg-brand-50 text-brand-700 ring-brand-100",
    bar: "bg-brand-500",
  },
  neutral: {
    dot: "bg-slate-400",
    pill: "bg-slate-50 text-slate-600 ring-slate-200",
    bar: "bg-slate-300",
  },
};

export function MockupFigure({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className={className}>
      {children}
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

export function PhoneFrame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[340px] rounded-[2.6rem] bg-ink p-2.5 shadow-[0_40px_80px_-30px_rgb(31_23_71/0.45)] ring-1 ring-black/5",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[2.1rem] bg-canvas">
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-semibold text-ink" aria-hidden="true">
          <span>8:02</span>
          <span className="h-5 w-20 rounded-full bg-ink" />
          <span className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-[2px] bg-ink/80" />
            <span className="h-2 w-4 rounded-[3px] border border-ink/70" />
          </span>
        </div>
        <div className="px-4 pt-3 pb-6">{children}</div>
      </div>
    </div>
  );
}

export function AppCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-2xl border border-line bg-white p-4 shadow-soft", className)}>
      {children}
    </div>
  );
}

export function Tag({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  const t = toneStyles[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset",
        t.pill,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", t.dot)} aria-hidden="true" />
      {children}
    </span>
  );
}

/** Fila de un pendiente dentro de una pantalla de Mochi. */
export function MockItem({
  tone,
  title,
  meta,
  hint,
  className,
}: {
  tone: Tone;
  title: string;
  meta?: string;
  hint?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex gap-3 rounded-xl border border-line bg-white p-3", className)}>
      <span className={cn("mt-1 w-1 shrink-0 self-stretch rounded-full", toneStyles[tone].bar)} aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-ink">{title}</p>
        {meta && <p className="text-[13px] text-ink-muted">{meta}</p>}
        {hint && <p className="mt-1.5 text-xs font-medium text-brand-700">{hint}</p>}
      </div>
    </div>
  );
}

/** Botón dentro de un mockup. Es decorativo: no es interactivo. */
export function MockButton({
  variant = "primary",
  className,
  children,
}: {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-lg px-3 text-xs font-semibold select-none",
        variant === "primary" ? "bg-brand-600 text-white" : "border border-line bg-white text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Marca "Mochi" dentro de las tarjetas de escenario. */
export function MochiBadge({ className, label = "Mochi" }: { className?: string; label?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700", className)}>
      <LogoMark className="size-5" />
      {label}
    </span>
  );
}
