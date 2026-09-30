import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

/**
 * SMTP settings come only from server-side environment variables, so the
 * mailbox password never reaches the browser or the repository.
 */
function smtpConfig() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  const port = Number(SMTP_PORT ?? 465);
  return {
    host: SMTP_HOST,
    port,
    // Port 465 uses implicit TLS; 587 upgrades with STARTTLS.
    secure: (process.env.SMTP_SECURE ?? String(port === 465)) === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  };
}

let transporter: Transporter | null = null;

export function getMailer() {
  const config = smtpConfig();
  if (!config) return null;
  transporter ??= nodemailer.createTransport(config);
  return transporter;
}

export const mailFrom = () => process.env.SMTP_FROM ?? `Signature Website <${process.env.SMTP_USER}>`;
export const mailTo = () => process.env.CONTACT_TO ?? "info@signature24hrs.com";
/** Optional hidden copy of every enquiry (comma-separated addresses). */
export const mailBcc = () => process.env.CONTACT_BCC?.trim() || undefined;

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
