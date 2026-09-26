import Link from "next/link";
import { Baby, Eye, Minimize2, ShieldCheck, SlidersHorizontal, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { routes } from "@/lib/site";

const principles: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: ShieldCheck,
    title: "Privacidad desde el diseño",
    text: "La protección de los datos es parte de cómo pensamos el producto, no un agregado.",
  },
  {
    icon: Minimize2,
    title: "Minimización de datos",
    text: "Buscamos usar solo la información necesaria para ayudarte a organizarte.",
  },
  {
    icon: Eye,
    title: "Transparencia",
    text: "Queremos que sepas qué información usa Mochi y para qué.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control del usuario",
    text: "Vos decidís qué fuentes conectar y podés pedir que borremos tus datos.",
  },
  {
    icon: Baby,
    title: "Cuidado de menores",
    text: "La información de chicos y chicas requiere un tratamiento especialmente responsable.",
  },
];

export function PrivacySection() {
  return (
    <section id="privacidad" aria-labelledby="privacidad-title" className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="privacidad-title"
          eyebrow="Privacidad"
          title="Información familiar y escolar merece cuidado."
          description="Estos son los principios con los que estamos construyendo Mochi."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {principles.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-3xl border border-line bg-white p-6">
              <Icon className="size-5 text-brand-600" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-[15px] text-ink-soft">
          ¿Tenés preguntas sobre cómo tratamos los datos?{" "}
          <Link
            href={routes.contact}
            className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600"
          >
            Escribinos
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
