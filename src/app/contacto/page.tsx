import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm, type Audience } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { anchors, PRIMARY_CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribinos si sos una familia interesada en Mochi o si representás a un colegio que quiere explorarlo.",
  alternates: { canonical: "/contacto" },
  openGraph: { url: "/contacto" },
};

export default async function ContactPage({ searchParams }: PageProps<"/contacto">) {
  const { tipo } = await searchParams;
  const initialAudience: Audience = tipo === "colegio" ? "colegio" : "familia";

  return (
    <section aria-labelledby="contacto-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_80%_0%,rgb(219_216_254/0.7),transparent_70%)]"
      />
      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <Eyebrow>Contacto</Eyebrow>
          <h1
            id="contacto-title"
            className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl"
          >
            Hablemos.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Si tenés dudas, ideas o querés contarnos cómo se organizan en casa, nos encantaría
            leerte.
          </p>

          <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50 p-5">
            <p className="font-semibold text-ink">¿Querés probar Mochi?</p>
            <p className="mt-1 text-[15px] text-ink-soft">
              La forma más rápida es anotarte al piloto para familias.
            </p>
            <Link
              href={anchors.earlyAccess}
              className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              {PRIMARY_CTA} <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-line bg-white p-5 shadow-lift sm:p-8">
          <ContactForm initialAudience={initialAudience} />
        </div>
      </Container>
    </section>
  );
}
