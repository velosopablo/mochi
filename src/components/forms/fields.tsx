"use client";

import { useId } from "react";
import { AlertCircle, Check, Loader2 } from "lucide-react";
import { buttonClasses } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";
import type { FormStatus } from "@/lib/forms/types";

const inputBase =
  "block w-full rounded-xl border bg-white px-4 text-base text-ink placeholder:text-ink-muted/70 transition-colors focus:border-brand-500 focus:ring-4 focus:ring-brand-100 focus:outline-none";

function stateClass(error?: string) {
  return error ? "border-rose-400" : "border-line hover:border-brand-200";
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
    <label htmlFor={htmlFor} className="mb-1.5 block text-[15px] font-semibold text-ink">
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
        className={cn(inputBase, "h-12", stateClass(error))}
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
  options: ReadonlyArray<{ value: string; label: string }>;
  error?: string;
  variant?: "list" | "chips";
  onToggle?: (value: string, checked: boolean) => void;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  return (
    <fieldset aria-describedby={describedBy(hint && hintId, error && errorId)}>
      <legend className="text-[15px] font-semibold text-ink">{legend}</legend>
      {hint && (
        <p id={hintId} className="mt-0.5 text-sm text-ink-muted">
          {hint}
        </p>
      )}
      <div className={cn("mt-3", variant === "chips" ? "flex flex-wrap gap-2" : "grid gap-2")}>
        {options.map((opt, i) => (
          <label
            key={opt.value}
            className={cn(
              "group relative flex cursor-pointer items-center gap-3 border bg-white text-[15px] text-ink transition-colors hover:border-brand-300 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand-100",
              variant === "chips" ? "rounded-full px-4 py-2 font-medium" : "rounded-xl px-4 py-3",
              error ? "border-rose-300" : "border-line",
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
            {variant === "list" && <CheckIndicator />}
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
      <FieldError id={errorId} message={error} />
    </fieldset>
  );
}

function CheckIndicator() {
  return (
    <span
      aria-hidden="true"
      className="grid size-5 shrink-0 place-items-center rounded-md border border-slate-300 bg-white text-transparent transition-colors group-has-[:checked]:border-brand-600 group-has-[:checked]:bg-brand-600 group-has-[:checked]:text-white"
    >
      <Check className="size-3.5" strokeWidth={3} />
    </span>
  );
}

export function CheckboxField({
  name,
  label,
  description,
  defaultChecked,
}: {
  name: string;
  label: string;
  description?: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="group flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand-300 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand-100">
      <input type="checkbox" name={name} defaultChecked={defaultChecked} className="sr-only" />
      <span className="mt-0.5">
        <CheckIndicator />
      </span>
      <span>
        <span className="block text-[15px] font-semibold text-ink">{label}</span>
        {description && <span className="mt-0.5 block text-sm text-ink-muted">{description}</span>}
      </span>
    </label>
  );
}

/** Campo trampa para bots: invisible para personas y lectores de pantalla. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        No completar
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

export function SubmitButton({ status, children }: { status: FormStatus; children: React.ReactNode }) {
  const loading = status === "loading";
  return (
    <button type="submit" disabled={loading} aria-disabled={loading} className={buttonClasses({ size: "lg", className: "w-full" })}>
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
        <p className="flex gap-2 rounded-xl border border-rose-200 bg-rose-50 p-4 text-[15px] text-rose-800">
          <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          {message}
        </p>
      )}
    </div>
  );
}
