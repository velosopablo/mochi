import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/cn";
import hola from "../../../public/brand/mochi-hola.webp";
import feliz from "../../../public/brand/mochi-feliz.webp";
import ok from "../../../public/brand/mochi-ok.webp";
import lee from "../../../public/brand/mochi-lee.webp";
import abrazo from "../../../public/brand/mochi-abrazo.webp";
import avatar from "../../../public/brand/mochi-avatar.webp";

/** Poses oficiales de la mascota, tal como fueron provistas. */
const poses: Record<MascotPose, { src: StaticImageData; alt: string }> = {
  hola: { src: hola, alt: "Mochi, una mochila azul sonriente, saluda con la mano." },
  feliz: { src: feliz, alt: "Mochi sonríe con los ojos cerrados y saluda contento." },
  ok: { src: ok, alt: "Mochi guiña un ojo y hace el gesto de todo bien." },
  lee: { src: lee, alt: "Mochi, con anteojos, lee un libro con atención." },
  abrazo: { src: abrazo, alt: "Mochi abraza un cuaderno con cariño." },
};

export type MascotPose = "hola" | "feliz" | "ok" | "lee" | "abrazo";

export function Mascot({
  pose,
  className,
  sizes = "240px",
  priority,
  decorative = false,
}: {
  pose: MascotPose;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Si acompaña a un texto que ya dice lo mismo, se oculta a lectores de pantalla. */
  decorative?: boolean;
}) {
  const { src, alt } = poses[pose];
  return (
    <Image
      src={src}
      alt={decorative ? "" : alt}
      sizes={sizes}
      priority={priority}
      className={cn("h-auto select-none", className)}
      draggable={false}
    />
  );
}

export function MochiAvatar({ className }: { className?: string }) {
  return (
    <Image
      src={avatar}
      alt=""
      sizes="40px"
      className={cn("size-9 shrink-0 rounded-full bg-primary-50 object-cover ring-2 ring-white", className)}
    />
  );
}
