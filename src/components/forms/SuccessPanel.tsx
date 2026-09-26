"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

/** Reemplaza al formulario tras un envío exitoso y recibe el foco para anunciarlo. */
export function SuccessPanel({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => ref.current?.focus(), []);

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="status"
      className="flex flex-col items-center py-8 text-center outline-none"
    >
      <span className="grid size-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
        <CheckCircle2 className="size-7" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-2xl font-bold text-ink">{title}</h3>
      <div className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-soft">{children}</div>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
