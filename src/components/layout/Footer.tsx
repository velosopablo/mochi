import Link from "next/link";
import { ArrowRight, School } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { footerLinks, routes, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="py-12 sm:py-16">
        <SchoolsNote />

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Pie de página">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] font-medium text-ink-soft hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-sm text-ink-muted">
          © {year} Mochi. Los ejemplos de esta página son ilustrativos y usan datos ficticios.
        </p>
      </Container>
    </footer>
  );
}

function SchoolsNote() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
          <School className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-semibold text-ink">¿Representás a un colegio?</p>
          <p className="mt-0.5 text-[15px] text-ink-soft">
            También estamos conversando con instituciones interesadas en explorar Mochi.
          </p>
        </div>
      </div>
      <Link
        href={routes.contactSchools}
        className="inline-flex items-center gap-1.5 self-start rounded-full px-1 text-[15px] font-semibold text-brand-700 hover:text-brand-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:self-center"
      >
        Contactarnos <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
