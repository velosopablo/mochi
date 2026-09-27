import { HeartHandshake, Layers, MessagesSquare, Sprout, type LucideIcon } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { routes } from "@/lib/site";

const items: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Layers, title: "Convive con lo que ya existe", text: "Plataformas, calendarios y canales del colegio siguen siendo la fuente." },
  { icon: MessagesSquare, title: "La información llega más clara", text: "Cada familia entiende qué le corresponde y qué acción requiere." },
  { icon: Sprout, title: "Más autonomía en los chicos", text: "Un objetivo compartido: que aprendan a organizarse." },
  { icon: HeartHandshake, title: "Una experiencia más simple", text: "Colegios y familias, del mismo lado." },
];

export function ForSchools() {
  return (
    <Section id="colegios" labelledBy="colegios-title" tone="bg">
      <Container>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <SectionHeading
            id="colegios-title"
            align="responsive"
            eyebrow="Colegios"
            title="Del mismo lado que los colegios."
            description="Mochi está pensado para convivir con las herramientas que familias y colegios ya utilizan. A futuro, los colegios pueden convertirse en socios fundamentales para ofrecer una experiencia de información más simple a las familias."
          />
          <Mascot pose="lee" sizes="160px" className="w-28 shrink-0 lg:w-36" decorative />
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-3xl border border-line bg-white p-6">
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-extrabold text-ink">{title}</h3>
              <p className="mt-1 text-[15px] text-ink-muted">{text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-[15px] text-ink-muted">¿Representás a un colegio y querés conversar?</p>
          <ButtonLink href={routes.contactSchools} variant="secondary">
            Hablemos
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
