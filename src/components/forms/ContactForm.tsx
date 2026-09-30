"use client";

import { startTransition, useActionState, useEffect, useRef, type FormEvent } from "react";
import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { sendEnquiry, type ContactField, type ContactState } from "@/app/actions/contact";
import { fieldClass, labelClass } from "./styles";

export type ServiceOption = { value: string; label: string };

const budgets = [
  "Under £2,500",
  "£2,500 – £5,000",
  "£5,000 – £15,000",
  "£15,000+",
  "Monthly retainer",
  "Not sure yet",
];

const field = fieldClass;
const label = labelClass;

const initialState: ContactState = { status: "idle", message: "" };

export function ContactForm({ services, defaultService = "" }: { services: ServiceOption[]; defaultService?: string }) {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  // When the visitor started filling in the form; used server-side to filter instant bot submissions.
  const startedAt = useRef(0);
  const markStart = () => {
    startedAt.current = Date.now();
  };

  useEffect(() => {
    markStart();
    // Preselect a service from links such as /contact?service=seo
    const wanted = new URLSearchParams(window.location.search).get("service");
    if (wanted && serviceRef.current && services.some((s) => s.value === wanted)) {
      serviceRef.current.value = wanted;
    }
  }, [services]);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      markStart();
    }
  }, [state]);

  // Submitting via startTransition (instead of the form `action` prop) keeps the
  // visitor's input in place if the server returns validation errors.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set("startedAt", String(startedAt.current));
    startTransition(() => formAction(data));
  }

  const err = (name: ContactField) => (state.status === "error" ? state.errors?.[name] : undefined);
  const invalid = (name: ContactField) => (err(name) ? true : undefined);
  const fieldError = (name: ContactField) =>
    err(name) ? (
      <p id={`cf-${name}-error`} className="text-xs font-medium text-red-600">
        {err(name)}
      </p>
    ) : null;
  const describedBy = (name: ContactField) => (err(name) ? `cf-${name}-error` : undefined);

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="flex flex-col gap-5 rounded-xl bg-surface p-6 shadow-card-hover ring-1 ring-line sm:p-8 lg:p-10"
      aria-describedby="form-note"
    >
      <div className="flex flex-col gap-1.5 pb-1">
        <h2 className="text-h2-sm lg:text-h2 text-ink">Request a Free Consultation</h2>
        <p id="form-note" className="text-sm text-muted">
          Tell us about your goals and we&apos;ll come back with a clear recommendation within one working day.
        </p>
      </div>

      {/* Spam traps: hidden from people, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-name" className={label}>Full name *</label>
          <input id="cf-name" name="name" required maxLength={100} autoComplete="name" className={field} placeholder="Jane Smith" aria-invalid={invalid("name")} aria-describedby={describedBy("name")} />
          {fieldError("name")}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-company" className={label}>Company name *</label>
          <input id="cf-company" name="company" required maxLength={150} autoComplete="organization" className={field} placeholder="Acme Ltd" aria-invalid={invalid("company")} aria-describedby={describedBy("company")} />
          {fieldError("company")}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-email" className={label}>Work email *</label>
          <input id="cf-email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} placeholder="jane@acme.co.uk" aria-invalid={invalid("email")} aria-describedby={describedBy("email")} />
          {fieldError("email")}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-phone" className={label}>Phone number</label>
          <input id="cf-phone" name="phone" type="tel" maxLength={40} autoComplete="tel" className={field} placeholder="07700 900000" aria-invalid={invalid("phone")} aria-describedby={describedBy("phone")} />
          {fieldError("phone")}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-service" className={label}>Service required *</label>
          <select ref={serviceRef} id="cf-service" name="service" required defaultValue={defaultService} className={field} aria-invalid={invalid("service")} aria-describedby={describedBy("service")}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
            <option value="multiple">Multiple services / not sure</option>
          </select>
          {fieldError("service")}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-budget" className={label}>Estimated budget</label>
          <select id="cf-budget" name="budget" defaultValue="" className={field} aria-invalid={invalid("budget")} aria-describedby={describedBy("budget")}>
            <option value="">Select a range</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {fieldError("budget")}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-message" className={label}>Project brief *</label>
        <textarea
          id="cf-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          className={`${field} h-auto resize-y py-3`}
          placeholder="Briefly outline your objectives, current setup or the challenges you’re facing…"
          aria-invalid={invalid("message")}
          aria-describedby={describedBy("message")}
        />
        {fieldError("message")}
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm text-muted">
          <input type="checkbox" name="consent" required className="mt-0.5 size-[18px] shrink-0 rounded-[3px] accent-brand-600" aria-invalid={invalid("consent")} />
          <span>
            I agree to Signature Marketing &amp; Tech Ltd processing my details to respond to this enquiry, in line with the{" "}
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
            Send Enquiry <Send aria-hidden className="size-4" />
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
