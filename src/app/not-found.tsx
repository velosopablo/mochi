import { Mascot } from "@/components/brand/Mascot";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="bg-white">
      <Container className="flex flex-col items-center py-20 text-center">
        <Mascot pose="lee" sizes="200px" className="w-40" decorative />
        <h1 id="nf-title" className="type-h2 mt-6 text-ink">
          No encontramos esta página.
        </h1>
        <p className="mt-3 max-w-md text-lg text-ink-muted">Mochi buscó por todos lados, pero acá no hay nada.</p>
        <ButtonLink href={routes.home} className="mt-8">
          Volver al inicio
        </ButtonLink>
      </Container>
    </section>
  );
}
