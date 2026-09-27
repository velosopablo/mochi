"use client";

import { ValidationError } from "@formspree/react";
import { ORIGEN, PRIVACY_NOTE, SUCCESS_BODY, SUCCESS_TITLE } from "@/lib/forms/formspree";
import { buildSchoolMessage } from "@/lib/forms/message";
import { cantidadAlumnos } from "@/lib/forms/options";
import { validateSchool } from "@/lib/forms/validation";
import {
  CheckboxField,
  FormErrorAlert,
  Honeypot,
  SelectField,
  SubmitButton,
  TextAreaField,
  TextField,
} from "./fields";
import { SuccessPanel } from "./SuccessPanel";
import { useMochiForm } from "./useMochiForm";

/**
 * Contacto institucional. Envía a Formspree: tipo_contacto, nombre, email, institucion, rol,
 * cantidad_alumnos, interes_piloto, detalle, origen, message (resumen) y _subject.
 */
export function SchoolForm() {
  const { state, errors, submitError, onSubmit, onFormChange } = useMochiForm(validateSchool, buildSchoolMessage);

  if (state.succeeded) {
    return (
      <SuccessPanel title={SUCCESS_TITLE}>
        <p>{SUCCESS_BODY}</p>
      </SuccessPanel>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      onChange={onFormChange}
      className="relative space-y-6"
      aria-describedby="colegio-privacidad"
    >
      <Honeypot />
      <input type="hidden" name="tipo_contacto" value="Colegio" />
      <input type="hidden" name="origen" value={ORIGEN} />
      <input type="hidden" name="_subject" value="Nuevo contacto Mochi — Colegio" />
      <input type="hidden" name="message" defaultValue="" />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Tu nombre" name="nombre" autoComplete="name" error={errors.nombre} required />
        <div>
          <TextField
            label="Email institucional"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            error={errors.email}
            required
          />
          <ValidationError
            field="email"
            prefix="Email:"
            errors={state.errors}
            className="mt-1.5 text-sm font-medium text-rose-700"
          />
        </div>
        <TextField
          label="Institución"
          name="institucion"
          autoComplete="organization"
          error={errors.institucion}
          required
        />
        <TextField
          label="Tu rol"
          name="rol"
          autoComplete="organization-title"
          placeholder="Dirección, coordinación, tecnología…"
          error={errors.rol}
          required
        />
      </div>

      <SelectField
        label="Cantidad aproximada de alumnos"
        name="cantidad_alumnos"
        placeholder="Elegí una opción"
        options={cantidadAlumnos}
        optional
      />

      <TextAreaField
        label="¿Qué te gustaría explorar con Mochi?"
        name="detalle"
        maxLength={2000}
        placeholder="Contanos sobre tu comunidad y qué herramientas usan hoy."
        error={errors.detalle}
        required
      />

      <CheckboxField
        name="interes_piloto"
        value="Sí"
        label="Nos interesa explorar un piloto de Mochi."
        description="Una primera conversación, sin compromiso."
      />

      <FormErrorAlert message={submitError} />

      <div>
        <SubmitButton submitting={state.submitting}>Enviar consulta</SubmitButton>
        <p id="colegio-privacidad" className="mt-3 text-center text-sm text-ink-muted">
          {PRIVACY_NOTE}
        </p>
      </div>
    </form>
  );
}
