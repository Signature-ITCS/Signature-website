"use client";

import { startTransition, useActionState, useEffect, useRef, type FormEvent } from "react";
import { CircleAlert, CircleCheck, Globe, LoaderCircle, ScanSearch } from "lucide-react";
import { requestAudit, type AuditField, type AuditState } from "@/app/actions/audit";
import { auditGoals } from "@/content/audit";
import { fieldClass as field, labelClass as label } from "./styles";

const initialState: AuditState = { status: "idle", message: "" };

export function AuditForm() {
  const [state, formAction, pending] = useActionState(requestAudit, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  // When the visitor started filling in the form; used server-side to filter instant bot submissions.
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      startedAt.current = Date.now();
    }
  }, [state]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set("startedAt", String(startedAt.current));
    startTransition(() => formAction(data));
  }

  const err = (name: AuditField) => (state.status === "error" ? state.errors?.[name] : undefined);
  const a11y = (name: AuditField) => ({
    "aria-invalid": err(name) ? true : undefined,
    "aria-describedby": err(name) ? `af-${name}-error` : undefined,
  });
  const fieldError = (name: AuditField) =>
    err(name) ? (
      <p id={`af-${name}-error`} className="text-xs font-medium text-red-600">
        {err(name)}
      </p>
    ) : null;

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      id="audit-form"
      className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-white/10 sm:p-8"
      aria-labelledby="audit-form-title"
    >
      <div className="flex items-center gap-3 pb-1">
        <span className="flex size-11 items-center justify-center rounded-lg bg-brand-600 text-white shadow-cta">
          <ScanSearch aria-hidden className="size-5" />
        </span>
        <div className="flex flex-col">
          <h2 id="audit-form-title" className="text-h3 text-ink">
            Get your free audit
          </h2>
          <p className="text-sm text-muted">Takes 30 seconds. No obligation.</p>
        </div>
      </div>

      {/* Spam trap: hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="af-website">Website</label>
        <input id="af-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="af-url" className={label}>
          Website address *
        </label>
        <div className="relative">
          <Globe aria-hidden className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-light" />
          <input
            id="af-url"
            name="url"
            type="text"
            inputMode="url"
            required
            maxLength={300}
            autoComplete="url"
            placeholder="yourbusiness.co.uk"
            className={`${field} pl-11`}
            {...a11y("url")}
          />
        </div>
        {fieldError("url")}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="af-name" className={label}>
            Full name *
          </label>
          <input id="af-name" name="name" required maxLength={100} autoComplete="name" placeholder="Jane Smith" className={field} {...a11y("name")} />
          {fieldError("name")}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="af-phone" className={label}>
            Phone number *
          </label>
          <input id="af-phone" name="phone" type="tel" required maxLength={40} autoComplete="tel" placeholder="07700 900000" className={field} {...a11y("phone")} />
          {fieldError("phone")}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="af-email" className={label}>
            Email *
          </label>
          <input id="af-email" name="email" type="email" required maxLength={200} autoComplete="email" placeholder="jane@yourbusiness.co.uk" className={field} {...a11y("email")} />
          {fieldError("email")}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="af-company" className={label}>
            Company name
          </label>
          <input id="af-company" name="company" maxLength={150} autoComplete="organization" placeholder="Your Business Ltd" className={field} {...a11y("company")} />
          {fieldError("company")}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="af-goal" className={label}>
          What matters most right now?
        </label>
        <select id="af-goal" name="goal" defaultValue="" className={field} {...a11y("goal")}>
          <option value="">Select an option</option>
          {auditGoals.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        {fieldError("goal")}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="af-message" className={label}>
          Anything we should know? <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          id="af-message"
          name="message"
          rows={3}
          maxLength={3000}
          placeholder="e.g. main competitors, services you want to rank for…"
          className={`${field} h-auto resize-y py-3`}
          {...a11y("message")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm text-muted">
          <input type="checkbox" name="consent" required className="mt-0.5 size-[18px] shrink-0 rounded-[3px] accent-brand-600" aria-invalid={err("consent") ? true : undefined} />
          <span>
            I agree to Signature Marketing &amp; Tech Ltd contacting me about my audit, in line with the{" "}
            <a href="/privacy-policy" className="font-semibold text-brand-600 underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {fieldError("consent")}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-14 cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand-600 font-label text-label-lg text-white shadow-cta transition-all hover:bg-brand-700 hover:shadow-cta-hover disabled:cursor-wait disabled:opacity-80"
      >
        {pending ? (
          <>
            Sending… <LoaderCircle aria-hidden className="size-4 animate-spin" />
          </>
        ) : (
          <>
            Get My Free Website Audit <ScanSearch aria-hidden className="size-4" />
          </>
        )}
      </button>

      <div aria-live="polite" role="status">
        {state.status === "success" ? (
          <p className="flex items-start gap-3 rounded-lg bg-emerald/10 p-4 text-sm text-emerald-deep ring-1 ring-emerald/25">
            <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0" />
            <span>{state.message}</span>
          </p>
        ) : null}
        {state.status === "error" ? (
          <p className="flex items-start gap-3 rounded-lg bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
            <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0" />
            <span>{state.message}</span>
          </p>
        ) : null}
      </div>
    </form>
  );
}
