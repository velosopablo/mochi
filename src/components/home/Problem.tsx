import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { sources } from "./sources";

export function Problem() {
  return (
    <Section labelledBy="problema-title" tone="bg">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="problema-title"
            align="responsive"
            eyebrow="El problema"
            title="La información de la escuela llega por todos lados."
            description="Grupos de WhatsApp, mails, PDFs, la plataforma, el cuaderno, lo que cuentan los chicos… Todo está en algún lugar, pero encontrar lo importante se vuelve un trabajo más."
          />
          <p className="mt-6 text-center text-lg font-bold text-ink lg:text-left">
            Menos mensajes perdidos. Más tranquilidad. <span className="text-deep">Mochi encuentra lo importante por vos.</span>
          </p>
        </div>

        <div className="relative">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Lugares por donde llega la información escolar">
            {sources.map(({ icon: Icon, label, snippet }, i) => (
              <li
                key={label}
                className={
                  "rounded-2xl border border-line bg-white p-3 shadow-soft " +
                  (i % 3 === 0 ? "sm:-rotate-2" : i % 3 === 1 ? "sm:rotate-1" : "sm:rotate-2") +
                  (i === sources.length - 1 ? " col-span-2 sm:col-span-3 sm:mx-auto sm:w-1/2" : "")
                }
              >
                <span className="flex items-center gap-2 text-sm font-extrabold text-ink">
                  <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {label}
                </span>
                <span className="mt-1 block truncate text-[13px] text-ink-muted">{snippet}</span>
              </li>
            ))}
          </ul>

          <div aria-hidden="true" className="mx-auto my-4 h-10 w-px bg-gradient-to-b from-field to-primary" />

          <div className="mx-auto max-w-xs rounded-3xl rounded-tr-lg bg-bubble-out px-5 py-4 text-center shadow-soft">
            <p className="text-xs font-extrabold tracking-wide text-ink-muted uppercase">Una familia, a las 22:40</p>
            <p className="type-h4 mt-1 text-ink">“¿Qué tengo que hacer mañana?” 😵‍💫</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
