"use client";

import { useState } from "react";
import { ValidationError } from "@formspree/react";
import { ORIGEN, PRIVACY_NOTE, SUCCESS_BODY, SUCCESS_TITLE } from "@/lib/forms/formspree";
import { buildFamilyMessage } from "@/lib/forms/message";
import { canales, edadHijoRangos, SITUACION_OTRO, situaciones } from "@/lib/forms/options";
import { validateFamily } from "@/lib/forms/validation";
import { PRIMARY_CTA } from "@/lib/site";
import {
  CheckboxField,
  CheckboxGroup,
  FormErrorAlert,
  Honeypot,
  RadioChips,
  SubmitButton,
  TextAreaField,
  TextField,
} from "./fields";
import { SuccessPanel } from "./SuccessPanel";
import { useMochiForm } from "./useMochiForm";

const ageOptions = edadHijoRangos.map((r) => ({ value: r, label: `${r} años` }));

/**
 * Formulario para familias (home y /contacto). Envía a Formspree:
 * tipo_contacto, nombre, email, edad_hijo_rango[], situaciones[], situaciones_otro,
 * canal_preferido, detalle, interes_piloto, origen, message (resumen) y _subject.
 * No pide datos del menor (nombre, colegio, curso, DNI, domicilio ni salud).
 */
export function FamilyForm() {
  const { state, errors, submitError, onSubmit, onFormChange } = useMochiForm(validateFamily, buildFamilyMessage);
  const [showOther, setShowOther] = useState(false);

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
      aria-describedby="familia-privacidad"
    >
      <Honeypot />
      <input type="hidden" name="tipo_contacto" value="Familia" />
      <input type="hidden" name="origen" value={ORIGEN} />
      <input type="hidden" name="_subject" value="Nuevo contacto Mochi — Familia" />
      <input type="hidden" name="message" defaultValue="" />

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField label="Tu nombre" name="nombre" autoComplete="given-name" error={errors.nombre} required />
        <div>
          <TextField
            label="Email"
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
      </div>

      <CheckboxGroup
        legend="Edad de tu hijo/a"
        hint="Si tenés más de un hijo/a, podés marcar varias. No necesitamos su nombre."
        name="edad_hijo_rango"
        options={ageOptions}
        variant="chips"
        error={errors.edad_hijo_rango}
      />

      <div>
        <CheckboxGroup
          legend="¿Cuál de estas situaciones te pasa con mayor frecuencia?"
          hint="Podés elegir más de una."
          name="situaciones"
          options={situaciones}
          error={errors.situaciones}
          onToggle={(value, checked) => value === SITUACION_OTRO && setShowOther(checked)}
        />
        {showOther && (
          <TextField
            className="mt-3"
            label="¿Cuál?"
            name="situaciones_otro"
            optional
            maxLength={200}
            placeholder="Contanos brevemente"
          />
        )}
      </div>

      <RadioChips
        legend="¿Por dónde te gustaría hablar con Mochi?"
        hint="Opcional."
        name="canal_preferido"
        options={canales}
      />

      <TextAreaField
        label="¿Qué es lo que más te cuesta hoy de organizar la vida escolar?"
        name="detalle"
        optional
        maxLength={1500}
        placeholder="Por ejemplo: “Me entero de las cosas el día anterior…”"
        error={errors.detalle}
      />

      <CheckboxField
        name="interes_piloto"
        value="Sí"
        label="Me interesa participar del piloto de Mochi."
        description="Participar no implica ningún compromiso."
      />

      <FormErrorAlert message={submitError} />

      <div>
        <SubmitButton submitting={state.submitting}>{PRIMARY_CTA}</SubmitButton>
        <p id="familia-privacidad" className="mt-3 text-center text-sm text-ink-muted">
          {PRIVACY_NOTE}
        </p>
      </div>
    </form>
  );
}
