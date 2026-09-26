"use client";

import { childAgeRanges, type ChildAgeRange } from "@/lib/forms/options";
import { submitContactForm } from "@/lib/forms/submit";
import type { FamilyContactPayload } from "@/lib/forms/types";
import { validateFamilyContact } from "@/lib/forms/validation";
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

export function FamilyContactForm() {
  const { status, errors, submitError, run, onFormChange } = useFormSubmission<FamilyContactPayload>(
    validateFamilyContact,
    submitContactForm,
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    await run(
      {
        type: "familia",
        name: readString(fd, "name"),
        email: readString(fd, "email"),
        childAges: readAll<ChildAgeRange>(fd, "childAges"),
        message: readString(fd, "message"),
        pilotInterest: fd.get("pilotInterest") === "on",
      },
      form,
    );
  }

  if (status === "success") {
    return (
      <SuccessPanel title="¡Mensaje enviado!">
        <p>Gracias por escribirnos. Leemos cada mensaje y te vamos a responder por email.</p>
      </SuccessPanel>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onChange={onFormChange}
      className="relative space-y-6"
    >
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Nombre" name="name" autoComplete="name" error={errors.name} required />
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
        legend="Edad de tus hijos"
        hint="Opcional. Podés marcar varias."
        name="childAges"
        options={ageOptions}
        variant="chips"
      />
      <TextAreaField
        label="Mensaje"
        name="message"
        maxLength={2000}
        placeholder="Contanos lo que quieras: dudas, ideas o cómo se organizan hoy en casa."
        error={errors.message}
        required
      />
      <CheckboxField
        name="pilotInterest"
        label="Me interesa participar del piloto de Mochi."
        description="Sin compromiso de compra."
      />
      <FormErrorAlert message={submitError} />
      <SubmitButton status={status}>Enviar mensaje</SubmitButton>
    </form>
  );
}
