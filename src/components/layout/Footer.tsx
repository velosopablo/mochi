import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FullLogo } from "@/components/brand/Logo";
import { Mascot } from "@/components/brand/Mascot";
import { Container } from "@/components/ui/Container";
import { footerLinks, routes, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <Container className="py-12 sm:py-16">
        <SchoolsNote />

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xs">
            <FullLogo className="max-w-[240px]" />
            <p className="mt-2 text-[15px] text-ink-muted">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Pie de página">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-1 sm:flex sm:flex-wrap sm:gap-x-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center rounded-lg px-1 text-[15px] font-bold text-ink hover:text-deep focus-visible:outline-3 focus-visible:outline-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-sm text-ink-muted">
          © {year} Mochi. Mochi está en construcción. Las conversaciones de esta página son ejemplos con nombres y datos ficticios.
        </p>
      </Container>
    </footer>
  );
}

function SchoolsNote() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-line bg-bg p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex items-center gap-4">
        <Mascot pose="lee" decorative className="w-16 shrink-0" sizes="64px" />
        <div>
          <p className="text-lg font-extrabold text-ink">¿Representás a un colegio?</p>
          <p className="mt-0.5 text-[15px] text-ink-muted">
            Mochi está pensado para convivir con las herramientas que familias y colegios ya utilizan.
          </p>
        </div>
      </div>
      <Link
        href={routes.contactSchools}
        className="inline-flex min-h-11 items-center gap-1.5 self-start rounded-xl px-2 font-bold text-deep hover:bg-primary-50 focus-visible:outline-3 focus-visible:outline-primary sm:self-center"
      >
        Contactarnos <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
