"use client";

import { useState } from "react";
import { School, Users } from "lucide-react";
import { cn } from "@/lib/cn";
import { FamilyContactForm } from "./FamilyContactForm";
import { SchoolContactForm } from "./SchoolContactForm";

export type Audience = "familia" | "escuela";

const audiences: Array<{ value: Audience; label: string; hint: string; icon: typeof Users }> = [
  { value: "familia", label: "Soy una familia", hint: "Dudas, ideas o el piloto", icon: Users },
  { value: "escuela", label: "Represento a una escuela", hint: "Explorar Mochi en tu institución", icon: School },
];

export function ContactForm({ initialAudience = "familia" }: { initialAudience?: Audience }) {
  const [audience, setAudience] = useState<Audience>(initialAudience);

  return (
    <div>
      <fieldset>
        <legend className="text-[15px] font-semibold text-ink">¿Quién nos escribe?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {audiences.map(({ value, label, hint, icon: Icon }) => (
            <label
              key={value}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-2xl border bg-white p-4 transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-primary-100",
                audience === value ? "border-primary bg-primary-50" : "border-line hover:border-primary/60",
              )}
            >
              <input
                type="radio"
                name="audience"
                value={value}
                checked={audience === value}
                onChange={() => setAudience(value)}
                className="sr-only"
              />
              <span
                className={cn(
                  "grid size-10 shrink-0 place-items-center rounded-xl",
                  audience === value ? "bg-primary-strong text-white" : "bg-primary-50 text-deep",
                )}
              >
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-ink">{label}</span>
                <span className="block text-sm text-ink-muted">{hint}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 border-t border-line pt-8">
        {audience === "familia" ? <FamilyContactForm /> : <SchoolContactForm />}
      </div>
    </div>
  );
}
