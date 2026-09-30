import "server-only";
import { headers } from "next/headers";
import { after } from "next/server";
import { escapeHtml, getMailer, mailFrom, mailTo } from "./mail";
import { site } from "./site";

/** Shared server-side helpers for website forms (contact, website audit). */

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_RE = /^[+\d][\d\s()-]{6,}$/;

export const clean = (value: FormDataEntryValue | null, max: number) =>
  String(value ?? "")
    .replace(/\r\n?/g, "\n")
    .trim()
    .slice(0, max);

export const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

/** Spam traps: a hidden "website" field real visitors never fill, and a minimum time on the form. */
export function looksLikeBot(formData: FormData) {
  const honeypot = clean(formData.get("website"), 200);
  const startedAt = Number(formData.get("startedAt") ?? 0);
  return Boolean(honeypot) || !startedAt || Date.now() - startedAt < 3000;
}

// Best-effort, per-instance rate limit: 5 submissions per IP every 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export async function isRateLimited() {
  const headerList = await headers();
  const ip = (headerList.get("x-forwarded-for") ?? "").split(",")[0].trim() || headerList.get("x-real-ip") || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

export const sendFailedMessage = `Sorry, we couldn't send your request right now. Please email ${site.email.display} or call ${site.phone.display}.`;
export const rateLimitedMessage = `Too many requests in a short time. Please try again later or call us on ${site.phone.display}.`;

const londonNow = () => new Date().toLocaleString("en-GB", { timeZone: "Europe/London", dateStyle: "full", timeStyle: "short" });

/** Branded HTML + plain-text email for the team. */
export function internalEmail(input: {
  eyebrow: string;
  title: string;
  rows: [string, string][];
  noteLabel: string;
  note: string;
  source: string;
  replyName: string;
}) {
  const submittedAt = londonNow();
  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f8fafc;padding:24px">
    <table role="presentation" width="100%" style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
      <tr><td style="background:#0b1220;padding:20px 28px;color:#ffffff">
        <div style="font-size:12px;letter-spacing:2px;color:#7bd0ff;text-transform:uppercase">${escapeHtml(input.eyebrow)}</div>
        <div style="font-size:20px;font-weight:bold;margin-top:6px">${escapeHtml(input.title)}</div>
      </td></tr>
      <tr><td style="padding:24px 28px">
        <table role="presentation" width="100%" style="border-collapse:collapse;font-size:14px">
          ${input.rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px 0;color:#64748b;width:120px;vertical-align:top">${escapeHtml(k)}</td><td style="padding:8px 0;color:#0f172a;font-weight:bold">${escapeHtml(v)}</td></tr>`,
            )
            .join("")}
        </table>
        ${
          input.note
            ? `<div style="margin-top:20px;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:1px">${escapeHtml(input.noteLabel)}</div>
        <div style="margin-top:8px;padding:16px;background:#f8fafc;border-radius:8px;color:#0f172a;font-size:14px;line-height:1.6;white-space:pre-wrap">${escapeHtml(input.note)}</div>`
            : ""
        }
        <p style="margin-top:24px;font-size:12px;color:#94a3b8">Sent from the ${escapeHtml(input.source)} on ${escapeHtml(submittedAt)}. Reply to this email to respond to ${escapeHtml(input.replyName)} directly.</p>
      </td></tr>
    </table>
  </div>`;
  const text = [
    ...input.rows.map(([k, v]) => `${k}: ${v}`),
    ...(input.note ? ["", `${input.noteLabel}:`, input.note] : []),
    "",
    `Submitted: ${submittedAt}`,
  ].join("\n");
  return { html, text };
}

/**
 * Confirmation email to the visitor, sent after the response.
 * Fixed wording (only their first name is included) so forms can't be used to send spam.
 */
export function queueAutoReply(input: { to: string; name: string; subject: string; body: string }) {
  if (process.env.CONTACT_AUTOREPLY === "false") return;
  const mailer = getMailer();
  if (!mailer) return;
  const first = input.name.split(" ")[0].slice(0, 40);
  after(() =>
    mailer
      .sendMail({
        from: mailFrom(),
        to: input.to,
        replyTo: mailTo(),
        subject: input.subject,
        text: `Hi ${first},\n\n${input.body}\n\nIf it's urgent, call us on ${site.phone.display}.\n\nKind regards,\nSignature Marketing & Tech Ltd\n${site.url}`,
        html: `<div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;font-size:15px;line-height:1.6;max-width:560px">
          <p>Hi ${escapeHtml(first)},</p>
          <p>${escapeHtml(input.body)}</p>
          <p>If it's urgent, call us on <a href="${site.phone.href}" style="color:#2563eb">${site.phone.display}</a>.</p>
          <p>Kind regards,<br/>Signature Marketing &amp; Tech Ltd<br/><a href="${site.url}" style="color:#2563eb">${site.url.replace(/^https?:\/\//, "")}</a></p>
        </div>`,
      })
      .catch((error) => console.error("Form auto-reply failed", error)),
  );
}
