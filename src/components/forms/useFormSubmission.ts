"use client";

import { useCallback, useState } from "react";
import type { FieldErrors, FormStatus, SubmitResult } from "@/lib/forms/types";

/**
 * Maneja el ciclo idle → loading → success | error de un formulario,
 * incluida la validación y el foco en el primer campo con error.
 */
export function useFormSubmission<T extends object>(
  validate: (data: T) => FieldErrors<T>,
  submit: (data: T) => Promise<SubmitResult>,
) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors<T>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const run = useCallback(
    async (data: T, form: HTMLFormElement) => {
      setSubmitError(null);

      // Si un bot completó el campo trampa, simulamos éxito sin enviar nada.
      const trap = form.elements.namedItem("website");
      if (trap instanceof HTMLInputElement && trap.value) {
        setStatus("success");
        return;
      }

      const found = validate(data);
      setErrors(found);
      const firstInvalid = Object.keys(found)[0];
      if (firstInvalid) {
        const el = form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`);
        el?.focus();
        setStatus("idle");
        return;
      }

      setStatus("loading");
      const result = await submit(data);
      if (result.ok) {
        setStatus("success");
      } else {
        setSubmitError(result.message);
        setStatus("error");
      }
    },
    [validate, submit],
  );

  const clearError = useCallback((name: string) => {
    setErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name as keyof T];
      return next;
    });
  }, []);

  /** Para `onChange` del <form>: limpia el error del campo que se está editando. */
  const onFormChange = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const target = e.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        clearError(target.name);
      }
    },
    [clearError],
  );

  return { status, errors, submitError, run, onFormChange };
}

export function readString(fd: FormData, name: string) {
  const value = fd.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export function readAll<T extends string>(fd: FormData, name: string) {
  return fd.getAll(name).filter((v): v is T => typeof v === "string");
}
