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
import { services } from "@/lib/services";

export type ContactField = "name" | "company" | "email" | "phone" | "service" | "budget" | "message" | "consent";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<ContactField, string>>;
};

const BUDGETS = ["Under £2,500", "£2,500 – £5,000", "£5,000 – £15,000", "£15,000+", "Monthly retainer", "Not sure yet"];

export async function sendEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Pretend success so bots learn nothing.
  if (looksLikeBot(formData)) return { status: "success", message: "Thank you. Your enquiry has been sent." };

  const data = {
    name: oneLine(clean(formData.get("name"), 100)),
    company: oneLine(clean(formData.get("company"), 150)),
    email: oneLine(clean(formData.get("email"), 200)).toLowerCase(),
    phone: oneLine(clean(formData.get("phone"), 40)),
    service: clean(formData.get("service"), 80),
    budget: clean(formData.get("budget"), 40),
    message: clean(formData.get("message"), 5000),
    consent: formData.get("consent") === "on",
  };

  const errors: ContactState["errors"] = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (data.company.length < 2) errors.company = "Please enter your company name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  const serviceName = data.service === "multiple" ? "Multiple services / not sure" : services.find((s) => s.slug === data.service)?.name;
  if (!serviceName) errors.service = "Please choose a service.";
  if (data.budget && !BUDGETS.includes(data.budget)) errors.budget = "Please choose a budget range.";
  if (data.message.length < 10) errors.message = "Please tell us a little more about your project.";
  if (!data.consent) errors.consent = "Please confirm you agree to us contacting you.";
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors };
  }

  if (await isRateLimited()) return { status: "error", message: rateLimitedMessage };

  const mailer = getMailer();
  if (!mailer) {
    console.error("Contact form: SMTP is not configured");
    return { status: "error", message: sendFailedMessage };
  }

  const { html, text } = internalEmail({
    eyebrow: "New website enquiry",
    title: serviceName!,
    rows: [
      ["Name", data.name],
      ["Company", data.company],
      ["Email", data.email],
      ["Phone", data.phone || "–"],
      ["Service", serviceName!],
      ["Budget", data.budget || "–"],
    ],
    noteLabel: "Project brief",
    note: data.message,
    source: "website contact form",
    replyName: data.name,
  });

  try {
    await mailer.sendMail({
      from: mailFrom(),
      to: mailTo(),
      bcc: mailBcc(),
      replyTo: { name: data.name, address: data.email },
      subject: oneLine(`New enquiry: ${serviceName} – ${data.company}`).slice(0, 200),
      text,
      html,
    });
  } catch (error) {
    console.error("Contact form: failed to send enquiry", error);
    return { status: "error", message: sendFailedMessage };
  }

  queueAutoReply({
    to: data.email,
    name: data.name,
    subject: "We've received your enquiry – Signature Marketing & Tech",
    body: "Thank you for contacting Signature Marketing & Tech. We've received your enquiry and a member of our team will be in touch within one working day.",
  });

  return {
    status: "success",
    message: "Thank you. Your enquiry has been sent and our team will be in touch within one working day.",
  };
}
