import Link from "next/link";
import { Eye, Lock, Minimize2, ShieldCheck, SlidersHorizontal, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/SectionHeading";
import { routes } from "@/lib/site";

const principles: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: ShieldCheck, title: "Privacidad desde el diseño", text: "Cuidar los datos es parte de cómo pensamos Mochi." },
  { icon: Minimize2, title: "Sólo lo necesario", text: "Usamos la información justa para ayudarte." },
  { icon: Eye, title: "Transparencia", text: "Queremos que sepas qué usa Mochi y para qué." },
  { icon: SlidersHorizontal, title: "Vos decidís", text: "Qué compartís con Mochi y cuándo dejar de hacerlo." },
  { icon: Lock, title: "Cuidado de menores", text: "La información de chicos y chicas requiere especial responsabilidad." },
];

export function Privacy() {
  return (
    <Section id="privacidad" labelledBy="privacidad-title">
      <Container>
        <div className="rounded-3xl border border-line bg-bg p-6 sm:p-10">
          <h2 id="privacidad-title" className="type-h3 text-center text-ink">
            La información de tu familia merece cuidado.
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-2 font-extrabold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-[15px] text-ink-muted">
            ¿Preguntas sobre cómo tratamos los datos?{" "}
            <Link
              href={routes.contact}
              className="font-bold text-deep underline decoration-primary/40 underline-offset-4 hover:decoration-deep"
            >
              Escribinos
            </Link>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}
