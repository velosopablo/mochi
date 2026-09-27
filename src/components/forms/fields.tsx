"use client";

import { useId } from "react";
import { AlertCircle, Check, Loader2 } from "lucide-react";
import { buttonClasses } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";

const inputBase =
  "block w-full rounded-[14px] border bg-white px-4 text-base text-ink placeholder:text-ink-muted/80 transition-colors focus:border-primary focus:ring-4 focus:ring-primary-100 focus:outline-none";

function stateClass(error?: string) {
  return error ? "border-rose-500" : "border-field hover:border-primary/60";
}

function describedBy(...ids: Array<string | false | undefined>) {
  const value = ids.filter(Boolean).join(" ");
  return value || undefined;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-rose-700">
      <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

function Label({ htmlFor, children, optional }: { htmlFor: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-[15px] font-bold text-ink">
      {children}
      {optional && <span className="ml-1.5 text-sm font-normal text-ink-muted">(opcional)</span>}
    </label>
  );
}

type InputProps = Omit<React.ComponentProps<"input">, "id"> & {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
};

export function TextField({ label, name, error, optional, className, ...rest }: InputProps) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      <Label htmlFor={id} optional={optional}>
        {label}
      </Label>
      <input
        id={id}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(error && errorId)}
        className={cn(inputBase, "h-13", stateClass(error))}
        {...rest}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

type TextAreaProps = Omit<React.ComponentProps<"textarea">, "id"> & {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
};

export function TextAreaField({ label, name, error, optional, className, ...rest }: TextAreaProps) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      <Label htmlFor={id} optional={optional}>
        {label}
      </Label>
      <textarea
        id={id}
        name={name}
        rows={4}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(error && errorId)}
        className={cn(inputBase, "resize-y py-3 leading-relaxed", stateClass(error))}
        {...rest}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export function CheckboxGroup({
  legend,
  hint,
  name,
  options,
  error,
  variant = "list",
  onToggle,
}: {
  legend: string;
  hint?: string;
  name: string;
  options: ReadonlyArray<string | { value: string; label: string }>;
  error?: string;
  variant?: "list" | "chips";
  onToggle?: (value: string, checked: boolean) => void;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  return (
    <fieldset aria-describedby={describedBy(hint && hintId, error && errorId)}>
      <legend className="text-[15px] font-bold text-ink">{legend}</legend>
      {hint && (
        <p id={hintId} className="mt-0.5 text-sm text-ink-muted">
          {hint}
        </p>
      )}
      <div className={cn("mt-3", variant === "chips" ? "flex flex-wrap gap-2" : "grid gap-2")}>
        {options.map(toOption).map((opt, i) => (
          <label
            key={opt.value}
            className={cn(
              "group relative flex cursor-pointer items-center gap-2 border bg-white text-[15px] text-ink transition-colors hover:border-primary/60 has-[:checked]:border-primary has-[:checked]:bg-primary-50 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-primary-100",
              variant === "chips" ? "min-h-11 rounded-2xl px-4 py-2 font-bold" : "min-h-12 rounded-[14px] px-4 py-3",
              error ? "border-rose-400" : "border-field",
            )}
          >
            <input
              type="checkbox"
              name={name}
              value={opt.value}
              aria-invalid={error && i === 0 ? true : undefined}
              className="sr-only"
              onChange={(e) => onToggle?.(opt.value, e.target.checked)}
            />
            {variant === "list" ? (
              <CheckIndicator />
            ) : (
              <Check className="hidden size-4 text-deep group-has-[:checked]:block" strokeWidth={3} aria-hidden="true" />
            )}
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
      <FieldError id={errorId} message={error} />
    </fieldset>
  );
}

export function RadioChips({
  legend,
  hint,
  name,
  options,
}: {
  legend: string;
  hint?: string;
  name: string;
  options: ReadonlyArray<string | { value: string; label: string }>;
}) {
  const id = useId();
  return (
    <fieldset aria-describedby={hint ? `${id}-hint` : undefined}>
      <legend className="text-[15px] font-bold text-ink">{legend}</legend>
      {hint && (
        <p id={`${id}-hint`} className="mt-0.5 text-sm text-ink-muted">
          {hint}
        </p>
      )}
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map(toOption).map((opt) => (
          <label
            key={opt.value}
            className="group flex min-h-11 cursor-pointer items-center gap-1.5 rounded-2xl border border-field bg-white px-4 py-2 text-[15px] font-bold text-ink transition-colors hover:border-primary/60 has-[:checked]:border-primary has-[:checked]:bg-primary-50 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-primary-100"
          >
            <input type="radio" name={name} value={opt.value} className="sr-only" />
            <Check className="hidden size-4 text-deep group-has-[:checked]:block" strokeWidth={3} aria-hidden="true" />
            {opt.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function toOption(opt: string | { value: string; label: string }) {
  return typeof opt === "string" ? { value: opt, label: opt } : opt;
}

type SelectProps = Omit<React.ComponentProps<"select">, "id"> & {
  label: string;
  name: string;
  options: ReadonlyArray<string>;
  placeholder: string;
  error?: string;
  optional?: boolean;
};

export function SelectField({ label, name, options, placeholder, error, optional, className, ...rest }: SelectProps) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      <Label htmlFor={id} optional={optional}>
        {label}
      </Label>
      <select
        id={id}
        name={name}
        defaultValue=""
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(error && errorId)}
        className={cn(inputBase, "h-13 appearance-auto pr-3", stateClass(error))}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <FieldError id={errorId} message={error} />
    </div>
  );
}

function CheckIndicator() {
  return (
    <span
      aria-hidden="true"
      className="grid size-5 shrink-0 place-items-center rounded-md border-2 border-field bg-white text-transparent transition-colors group-has-[:checked]:border-primary-strong group-has-[:checked]:bg-primary-strong group-has-[:checked]:text-white"
    >
      <Check className="size-3.5" strokeWidth={3} />
    </span>
  );
}

export function CheckboxField({
  name,
  value,
  label,
  description,
  defaultChecked,
}: {
  name: string;
  /** Valor que se envía si está marcado. */
  value?: string;
  label: string;
  description?: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="group flex cursor-pointer items-start gap-3 rounded-[14px] border border-field bg-white p-4 transition-colors hover:border-primary/60 has-[:checked]:border-primary has-[:checked]:bg-primary-50 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-primary-100">
      <input type="checkbox" name={name} value={value} defaultChecked={defaultChecked} className="sr-only" />
      <span className="mt-0.5">
        <CheckIndicator />
      </span>
      <span>
        <span className="block text-[15px] font-bold text-ink">{label}</span>
        {description && <span className="mt-0.5 block text-sm text-ink-muted">{description}</span>}
      </span>
    </label>
  );
}

/**
 * Campo trampa para bots: invisible para personas y lectores de pantalla.
 * `_gotcha` es el nombre que Formspree reconoce: si llega completo, descarta el envío.
 */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        No completar
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function SubmitButton({ submitting, children }: { submitting: boolean; children: React.ReactNode }) {
  const loading = submitting;
  return (
    <button type="submit" disabled={loading} aria-disabled={loading} className={buttonClasses({ className: "w-full" })}>
      {loading ? (
        <>
          <Loader2 className="size-5 animate-spin" aria-hidden="true" />
          Enviando…
        </>
      ) : (
        children
      )}
    </button>
  );
}

export function FormErrorAlert({ message }: { message: string | null }) {
  return (
    <div role="alert" aria-live="assertive">
      {message && (
        <p className="flex gap-2 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-[15px] text-rose-800">
          <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          {message}
        </p>
      )}
    </div>
  );
}
