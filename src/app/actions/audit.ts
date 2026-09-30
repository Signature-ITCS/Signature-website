"use server";

import { getMailer, mailBcc, mailFrom, mailTo } from "@/lib/mail";
import {
  EMAIL_RE,
  PHONE_RE,
  clean,
  internalEmail,
  isRateLimited,
  looksLikeBot,
  oneLine,
  queueAutoReply,
  rateLimitedMessage,
  sendFailedMessage,
} from "@/lib/forms";
import { auditGoals } from "@/content/audit";

export type AuditField = "url" | "name" | "email" | "phone" | "company" | "goal" | "message" | "consent";

export type AuditState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<AuditField, string>>;
};


/** Accepts "example.co.uk", "www.example.co.uk" or a full URL and returns a normalised https URL. */
function normaliseUrl(raw: string) {
  const value = raw.trim();
  if (!value) return null;
  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    const validHost = /^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(url.hostname) && !/^(localhost|\d+\.\d+\.\d+\.\d+)$/i.test(url.hostname);
    if (!validHost) return null;
    return `${url.protocol}//${url.hostname}${url.pathname === "/" ? "" : url.pathname}`;
  } catch {
    return null;
  }
}

export async function requestAudit(_prev: AuditState, formData: FormData): Promise<AuditState> {
  if (looksLikeBot(formData)) return { status: "success", message: "Thank you. Your audit request has been received." };

  const data = {
    url: normaliseUrl(clean(formData.get("url"), 300)),
    name: oneLine(clean(formData.get("name"), 100)),
    email: oneLine(clean(formData.get("email"), 200)).toLowerCase(),
    phone: oneLine(clean(formData.get("phone"), 40)),
    company: oneLine(clean(formData.get("company"), 150)),
    goal: clean(formData.get("goal"), 80),
    message: clean(formData.get("message"), 3000),
    consent: formData.get("consent") === "on",
  };

  const errors: AuditState["errors"] = {};
  if (!data.url) errors.url = "Please enter a valid website address, e.g. yourbusiness.co.uk.";
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (!PHONE_RE.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (data.goal && !auditGoals.includes(data.goal)) errors.goal = "Please choose an option.";
  if (!data.consent) errors.consent = "Please confirm you agree to us contacting you.";
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors };
  }

  if (await isRateLimited()) return { status: "error", message: rateLimitedMessage };

  const mailer = getMailer();
  if (!mailer) {
    console.error("Audit form: SMTP is not configured");
    return { status: "error", message: sendFailedMessage };
  }

  const host = new URL(data.url!).hostname.replace(/^www\./, "");
  const { html, text } = internalEmail({
    eyebrow: "Free website audit request",
    title: host,
    rows: [
      ["Website", data.url!],
      ["Name", data.name],
      ["Company", data.company || "–"],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Main goal", data.goal || "–"],
    ],
    noteLabel: "Notes from the visitor",
    note: data.message,
    source: "free website audit form",
    replyName: data.name,
  });

  try {
    await mailer.sendMail({
      from: mailFrom(),
      to: mailTo(),
      bcc: mailBcc(),
      replyTo: { name: data.name, address: data.email },
      subject: oneLine(`Free website audit request: ${host} – ${data.name}`).slice(0, 200),
      text,
      html,
    });
  } catch (error) {
    console.error("Audit form: failed to send request", error);
    return { status: "error", message: sendFailedMessage };
  }

  queueAutoReply({
    to: data.email,
    name: data.name,
    subject: "Your free website audit request – Signature Marketing & Tech",
    body: "Thank you for requesting a free website audit from Signature Marketing & Tech. Our team will review your website's SEO, speed, mobile experience and conversion setup, and send your findings within two working days.",
  });

  return {
    status: "success",
    message: "Thank you! Your audit request has been received. We'll review your website and send your findings within two working days.",
  };
}
