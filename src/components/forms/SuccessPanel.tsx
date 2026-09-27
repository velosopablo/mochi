"use client";

import { useEffect, useRef } from "react";
import { Mascot } from "@/components/brand/Mascot";

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
    <div ref={ref} tabIndex={-1} role="status" className="flex flex-col items-center py-6 text-center outline-none">
      <Mascot pose="ok" sizes="160px" className="w-32" decorative />
      <h3 className="type-h3 mt-4 text-ink">{title}</h3>
      <div className="mt-3 max-w-sm text-ink-muted">{children}</div>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
