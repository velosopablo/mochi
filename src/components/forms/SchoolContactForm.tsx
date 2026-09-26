"use client";

import { submitContactForm } from "@/lib/forms/submit";
import type { SchoolContactPayload } from "@/lib/forms/types";
import { validateSchoolContact } from "@/lib/forms/validation";
import {
  CheckboxField,
  FormErrorAlert,
  Honeypot,
  SubmitButton,
  TextAreaField,
  TextField,
} from "./fields";
import { SuccessPanel } from "./SuccessPanel";
import { readString, useFormSubmission } from "./useFormSubmission";

export function SchoolContactForm() {
  const { status, errors, submitError, run, onFormChange } = useFormSubmission<SchoolContactPayload>(
    validateSchoolContact,
    submitContactForm,
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    await run(
      {
        type: "colegio",
        institution: readString(fd, "institution"),
        name: readString(fd, "name"),
        role: readString(fd, "role"),
        email: readString(fd, "email"),
        message: readString(fd, "message"),
        wantsDemo: fd.get("wantsDemo") === "on",
      },
      form,
    );
  }

  if (status === "success") {
    return (
      <SuccessPanel title="¡Gracias por escribirnos!">
        <p>Recibimos tu mensaje y te vamos a responder por email para coordinar una conversación.</p>
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
      <TextField
        label="Institución"
        name="institution"
        autoComplete="organization"
        error={errors.institution}
        required
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Nombre" name="name" autoComplete="name" error={errors.name} required />
        <TextField
          label="Rol"
          name="role"
          autoComplete="organization-title"
          placeholder="Ej.: dirección, docente"
          error={errors.role}
          required
        />
      </div>
      <TextField
        label="Email"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        error={errors.email}
        required
      />
      <TextAreaField
        label="Mensaje"
        name="message"
        maxLength={2000}
        placeholder="Contanos sobre la institución y qué te gustaría explorar."
        error={errors.message}
        required
      />
      <CheckboxField name="wantsDemo" label="Me interesa conocer Mochi en una conversación." />
      <FormErrorAlert message={submitError} />
      <SubmitButton status={status}>Enviar mensaje</SubmitButton>
    </form>
  );
}
