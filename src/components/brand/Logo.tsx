import Image from "next/image";
import { cn } from "@/lib/cn";
import wordmark from "../../../public/brand/mochi-wordmark.webp";
import fullLogo from "../../../public/brand/mochi-logo.webp";

/** Logotipo oficial (recorte del lockup provisto). No se redibuja: se usa la imagen original. */
export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={wordmark}
      alt="Mochi"
      priority={priority}
      sizes="160px"
      className={cn("h-9 w-auto", className)}
    />
  );
}

/** Lockup completo: mascota + logotipo + "Aprende · Organiza · Avanza". */
export function FullLogo({ className }: { className?: string }) {
  return (
    <Image
      src={fullLogo}
      alt="Mochi, la mochila que saluda. Aprende, organiza, avanza."
      sizes="(min-width: 768px) 280px, 220px"
      className={cn("h-auto w-full", className)}
    />
  );
}
