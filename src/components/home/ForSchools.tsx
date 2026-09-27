import { HeartHandshake, Megaphone, MessagesSquare, Repeat2, type LucideIcon } from "lucide-react";
import { Mascot } from "@/components/brand/Mascot";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { routes } from "@/lib/site";

const items: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Megaphone, title: "La información llega mejor", text: "Cada comunicado se convierte en un aviso claro para cada familia." },
  { icon: Repeat2, title: "Menos preguntas repetidas", text: "Las familias consultan a Mochi antes que al grupo o a la secretaría." },
  { icon: MessagesSquare, title: "Mejor comunicación", text: "Sin cambiar las herramientas que la escuela ya usa." },
  { icon: HeartHandshake, title: "Menos fricción", text: "Menos malentendidos, olvidos y horarios cruzados." },
];

export function ForSchools() {
  return (
    <Section id="escuelas" labelledBy="escuelas-title" tone="bg">
      <Container>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <SectionHeading
            id="escuelas-title"
            align="responsive"
            eyebrow="Para escuelas"
            title="Una mejor llegada a cada familia."
            description="Estamos conversando con instituciones interesadas en explorar Mochi junto a sus comunidades."
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
        <div className="mt-8 text-center">
          <ButtonLink href={routes.contactSchools} variant="secondary">
            Hablemos
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
