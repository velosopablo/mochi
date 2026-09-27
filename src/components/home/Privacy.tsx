import Link from "next/link";
import {
  Baby,
  Eye,
  FileCheck2,
  Lock,
  Minimize2,
  Scale,
  ShieldCheck,
  UserCheck,
  UserRoundCog,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { routes } from "@/lib/site";

/** Marco normativo de referencia en Argentina. Se enuncia como marco a respetar, no como certificación. */
const framework: Array<{ title: string; text: string }> = [
  { title: "Ley 25.326", text: "Protección de los Datos Personales." },
  { title: "Ley 26.061", text: "Protección Integral de los Derechos de Niñas, Niños y Adolescentes." },
  {
    title: "Criterios de la AAIP",
    text: "Agencia de Acceso a la Información Pública, incluida la Resolución 4/2019 sobre consentimiento para el tratamiento de datos de menores y autonomía progresiva.",
  },
];

const principles: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: UserCheck,
    title: "Consentimiento",
    text: "Libre, expreso e informado cuando corresponda, explicando con claridad para qué se usan los datos.",
  },
  {
    icon: Eye,
    title: "Información y transparencia",
    text: "Qué información procesa Mochi, para qué, quién es responsable y con quién podría compartirse.",
  },
  {
    icon: Minimize2,
    title: "Minimización",
    text: "Pedir y conservar solo la información necesaria para ayudar a la familia.",
  },
  {
    icon: Lock,
    title: "Seguridad y confidencialidad",
    text: "Medidas técnicas y organizativas para proteger la información.",
  },
  {
    icon: FileCheck2,
    title: "Derechos sobre los datos",
    text: "Acceso, actualización, rectificación y supresión de la información.",
  },
  {
    icon: Baby,
    title: "Menores",
    text: "Respeto por la autonomía progresiva, con consentimiento o participación de quienes ejercen la responsabilidad parental o la tutela.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidad infantil",
    text: "No usar la información de niñas, niños y adolescentes para publicidad comportamental ni para crear perfiles innecesarios.",
  },
  {
    icon: UserRoundCog,
    title: "Control humano",
    text: "La IA asiste, ordena y recomienda. No sustituye decisiones educativas o familiares relevantes.",
  },
];

export function Privacy() {
  return (
    <Section id="privacidad" labelledBy="privacidad-title">
      <Container>
        <SectionHeading
          id="privacidad-title"
          eyebrow="Privacidad"
          title="Privacidad desde el diseño, especialmente cuando hay menores."
          description="Mochi puede trabajar con información vinculada a la vida escolar de niños y adolescentes. Por eso, la privacidad, la seguridad y el control de los datos no pueden ser una función adicional: deben formar parte del producto desde el inicio."
        />

        <blockquote className="mx-auto mt-10 max-w-3xl rounded-3xl bg-primary-50 px-6 py-7 text-center sm:px-10">
          <p className="type-h3 text-balance text-deep">
            “La inteligencia artificial debe reducir la carga de las familias sin apropiarse de sus decisiones.”
          </p>
        </blockquote>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="rounded-3xl border border-line bg-bg p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-white text-deep ring-1 ring-line">
                <Scale className="size-5" aria-hidden="true" />
              </span>
              <h3 className="type-h4 text-ink">Marco que debemos respetar en Argentina</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {framework.map(({ title, text }) => (
                <li key={title} className="border-l-4 border-primary-100 pl-4">
                  <p className="font-extrabold text-ink">{title}</p>
                  <p className="mt-0.5 text-[15px] text-ink-muted">{text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] font-bold text-ink">
              Mochi está siendo diseñado bajo principios de privacidad desde el diseño.
            </p>
          </div>

          <div>
            <h3 className="type-h4 text-ink">Principios con los que construimos Mochi</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {principles.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4 rounded-3xl border border-line bg-white p-5 shadow-soft">
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary-50 text-deep">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-extrabold text-ink">{title}</span>
                    <span className="mt-1 block text-[15px] text-ink-muted">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-ink-muted">
          Las políticas, integraciones y mecanismos definitivos de tratamiento de datos deberán ser validados técnica y
          legalmente antes de operar con información real. ¿Tenés preguntas sobre cómo pensamos los datos?{" "}
          <Link
            href={routes.contact}
            className="font-bold text-deep underline decoration-primary/40 underline-offset-4 hover:decoration-deep"
          >
            Escribinos
          </Link>
          .
        </p>
      </Container>
    </Section>
  );
}
