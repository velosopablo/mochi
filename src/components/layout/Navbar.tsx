"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { anchors, navLinks, PRIMARY_CTA, routes } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200",
        scrolled || open
          ? "border-line bg-white/90 shadow-[0_1px_12px_-6px_rgb(61_74_99/0.15)] backdrop-blur-xl"
          : "border-transparent bg-white",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link
          href={routes.home}
          onClick={close}
          className="rounded-lg focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-label="Mochi, ir al inicio"
        >
          <Logo priority />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-xl px-3 py-2.5 text-[15px] font-bold text-ink transition-colors hover:bg-primary-50 hover:text-deep focus-visible:outline-3 focus-visible:outline-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={anchors.earlyAccess} size="md" className="max-[379px]:hidden" onClick={close}>
            {PRIMARY_CTA}
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl text-ink hover:bg-primary-50 focus-visible:outline-3 focus-visible:outline-primary lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div id="mobile-menu" hidden={!open} className="border-t border-line bg-white lg:hidden">
        <Container className="py-4">
          <nav aria-label="Principal móvil">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="block rounded-xl px-3 py-3 text-base font-bold text-ink hover:bg-primary-50 focus-visible:outline-3 focus-visible:outline-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href={anchors.earlyAccess} size="lg" className="mt-3 w-full" onClick={close}>
            {PRIMARY_CTA}
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
