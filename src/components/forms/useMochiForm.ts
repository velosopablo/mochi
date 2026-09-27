"use client";

import { useCallback, useState } from "react";
import { useForm } from "@formspree/react";
import { FORMSPREE_FORM_ID, GENERIC_ERROR } from "@/lib/forms/formspree";
import type { FieldErrors } from "@/lib/forms/validation";

/**
 * Envío real a Formspree (`useForm` de @formspree/react) con validación previa en el cliente.
 *
 * 1. Valida los datos del <form>. Si hay errores, no envía y lleva el foco al primer campo inválido.
 * 2. Completa el campo oculto `message` con un resumen legible (los campos individuales se envían igual).
 * 3. Delega en `handleSubmit` de Formspree, que hace el POST a https://formspree.io/f/<id>.
 */
export function useMochiForm(validate: (fd: FormData) => FieldErrors, buildMessage: (fd: FormData) => string) {
  const [state, submitToFormspree] = useForm(FORMSPREE_FORM_ID);
  const [errors, setErrors] = useState<FieldErrors>({});

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const form = e.currentTarget;
      const fd = new FormData(form);

      const found = validate(fd);
      setErrors(found);
      const firstInvalid = Object.keys(found)[0];
      if (firstInvalid) {
        e.preventDefault();
        form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
        return;
      }

      const summary = form.elements.namedItem("message");
      if (summary instanceof HTMLInputElement) summary.value = buildMessage(fd);

      void submitToFormspree(e);
    },
    [validate, buildMessage, submitToFormspree],
  );

  /** Para `onChange` del <form>: limpia el error del campo que se está editando. */
  const onFormChange = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) {
      return;
    }
    setErrors((prev) => {
      if (!(target.name in prev)) return prev;
      const next = { ...prev };
      delete next[target.name];
      return next;
    });
  }, []);

  // Errores devueltos por Formspree (o de red). Los de campo se muestran con <ValidationError />.
  const submitError = state.errors
    ? state.errors.getAllFieldErrors().length > 0 && state.errors.getFormErrors().length === 0
      ? "Revisá los datos marcados e intentá de nuevo."
      : GENERIC_ERROR
    : null;

  return { state, errors, submitError, onSubmit, onFormChange };
}
