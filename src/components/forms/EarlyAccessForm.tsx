"use client";

import { useState } from "react";
import { PRIMARY_CTA } from "@/lib/site";
import { childAgeRanges, painPoints, type ChildAgeRange, type PainPoint } from "@/lib/forms/options";
import { submitEarlyAccessForm } from "@/lib/forms/submit";
import type { EarlyAccessPayload } from "@/lib/forms/types";
import { validateEarlyAccess } from "@/lib/forms/validation";
import {
  CheckboxField,
  CheckboxGroup,
  FormErrorAlert,
  Honeypot,
  SubmitButton,
  TextAreaField,
  TextField,
} from "./fields";
import { SuccessPanel } from "./SuccessPanel";
import { readAll, readString, useFormSubmission } from "./useFormSubmission";

const ageOptions = childAgeRanges.map((r) => ({ value: r, label: `${r} años` }));

export function EarlyAccessForm() {
  const { status, errors, submitError, run, onFormChange } = useFormSubmission<EarlyAccessPayload>(
    validateEarlyAccess,
    submitEarlyAccessForm,
  );
  const [showOther, setShowOther] = useState(false);
  const [submitted, setSubmitted] = useState<{ name: string; email: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: EarlyAccessPayload = {
      name: readString(fd, "name"),
      email: readString(fd, "email"),
      childAges: readAll<ChildAgeRange>(fd, "childAges"),
      painPoints: readAll<PainPoint>(fd, "painPoints"),
      painPointOther: readString(fd, "painPointOther"),
      biggestStruggle: readString(fd, "biggestStruggle"),
      pilotInterest: fd.get("pilotInterest") === "on",
    };
    setSubmitted({ name: data.name, email: data.email });
    await run(data, form);
  }

  if (status === "success") {
    const firstName = submitted?.name.split(" ")[0];
    return (
      <SuccessPanel title={firstName ? `¡Gracias, ${firstName}!` : "¡Gracias!"}>
        <p>
          Recibimos tus respuestas. Te vamos a escribir
          {submitted?.email ? (
            <>
              {" "}a <strong className="font-semibold text-ink">{submitted.email}</strong>
            </>
          ) : null}{" "}
          cuando abramos el próximo grupo del piloto.
        </p>
        <p className="mt-3">Lo que nos contaste nos ayuda a construir Mochi con familias reales.</p>
      </SuccessPanel>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onChange={onFormChange}
      className="relative space-y-6"
      aria-describedby="early-access-note"
    >
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Nombre" name="name" autoComplete="given-name" error={errors.name} required />
        <TextField
          label="Email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          error={errors.email}
          required
        />
      </div>

      <CheckboxGroup
        legend="Edad de tu hijo/a"
        hint="Si tenés más de un hijo/a, podés marcar varias."
        name="childAges"
        options={ageOptions}
        variant="chips"
        error={errors.childAges}
      />

      <div>
        <CheckboxGroup
          legend="¿Cuál de estas situaciones te pasa con mayor frecuencia?"
          hint="Podés elegir más de una."
          name="painPoints"
          options={painPoints}
          error={errors.painPoints}
          onToggle={(value, checked) => value === "otro" && setShowOther(checked)}
        />
        {showOther && (
          <TextField
            className="mt-3"
            label="¿Cuál?"
            name="painPointOther"
            optional
            maxLength={200}
            placeholder="Contanos brevemente"
          />
        )}
      </div>

      <TextAreaField
        label="¿Qué es lo que más te cuesta hoy de organizar la vida escolar?"
        name="biggestStruggle"
        optional
        maxLength={1500}
        placeholder="Por ejemplo: “Me entero de las cosas el día anterior…”"
        error={errors.biggestStruggle}
      />

      <CheckboxField
        name="pilotInterest"
        label="Me interesa participar de un piloto de Mochi."
        description="Te contactaremos para contarte cómo funciona. Participar no implica compromiso de compra."
      />

      <FormErrorAlert message={submitError} />

      <div>
        <SubmitButton status={status}>{PRIMARY_CTA}</SubmitButton>
        <p id="early-access-note" className="mt-3 text-center text-sm text-ink-muted">
          Solo usaremos estos datos para contactarte sobre Mochi y entender mejor el problema.
        </p>
      </div>
    </form>
  );
}
