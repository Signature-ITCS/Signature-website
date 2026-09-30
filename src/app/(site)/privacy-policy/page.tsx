import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.legalName} collects, uses and protects your personal data under UK GDPR and the Data Protection Act 2018.`,
  path: "/privacy-policy",
});

const toc = [
  { id: "who-we-are", label: "Who we are" },
  { id: "data-we-collect", label: "Data we collect" },
  { id: "how-we-use", label: "How we use your data" },
  { id: "lawful-basis", label: "Lawful basis" },
  { id: "sharing", label: "Sharing your data" },
  { id: "client-data", label: "Client data we process" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Security" },
  { id: "international", label: "International transfers" },
  { id: "your-rights", label: "Your rights" },
  { id: "cookies", label: "Cookies" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact & complaints" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How we collect, use and protect your personal information."
      path="/privacy-policy"
      toc={toc}
    >
      <h2 id="who-we-are">1. Who we are</h2>
      <p>
        This website is operated by <strong>{site.legalName}</strong> (&ldquo;Signature&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a company registered in {site.jurisdiction} under company number {site.companyNumber}, with its registered office at {fullAddress}.
      </p>
      <p>
        We are the data controller for personal data collected through this website and in the course of dealing with prospective and existing clients. This policy explains what we collect, why, and the rights you have under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>

      <h2 id="data-we-collect">2. Data we collect</h2>
      <ul>
        <li><strong>Contact details</strong> such as your name, company, job title, email address and phone number when you submit an enquiry, email or call us.</li>
        <li><strong>Enquiry details</strong> including the services you are interested in, your budget range and any information you choose to include in your message.</li>
        <li><strong>Communications</strong> including emails, call notes and, where our services involve telephony, call recordings (you will be told when a call is recorded).</li>
        <li><strong>Technical data</strong> such as IP address, browser type, device information and pages visited, collected by our hosting provider for security and performance purposes.</li>
        <li><strong>Business relationship data</strong> such as contracts, invoices and payment records for clients.</li>
      </ul>
      <p>We do not intentionally collect special category data through this website. Please do not include sensitive personal information in enquiry forms.</p>

      <h2 id="how-we-use">3. How we use your data</h2>
      <ul>
        <li>To respond to your enquiry and provide quotes, proposals and consultations.</li>
        <li>To deliver the services you have contracted us to provide.</li>
        <li>To manage our client relationships, invoicing and accounts.</li>
        <li>To send relevant service updates and, where you have agreed or where permitted by law, occasional marketing about similar services. You can opt out at any time.</li>
        <li>To keep our website secure, prevent fraud and improve performance.</li>
        <li>To comply with legal, regulatory and tax obligations.</li>
      </ul>

      <h2 id="lawful-basis">4. Lawful basis for processing</h2>
      <p>We rely on the following lawful bases under UK GDPR:</p>
      <ul>
        <li><strong>Contract</strong> – where processing is needed to enter into or perform a contract with you.</li>
        <li><strong>Legitimate interests</strong> – to respond to business enquiries, manage our relationships, market our services to business contacts and keep our systems secure, where these interests are not overridden by your rights.</li>
        <li><strong>Consent</strong> – where you have given clear consent, for example to receive marketing emails. You can withdraw consent at any time.</li>
        <li><strong>Legal obligation</strong> – where we must keep records for tax, accounting or regulatory purposes.</li>
      </ul>

      <h2 id="sharing">5. Sharing your data</h2>
      <p>We never sell your personal data. We share it only with trusted service providers who help us run our business, under written contracts that require them to protect it, including:</p>
      <ul>
        <li>Website hosting and infrastructure providers.</li>
        <li>Email, CRM, telephony and productivity software providers.</li>
        <li>Accountants, legal and professional advisers.</li>
        <li>Regulators, law enforcement or other authorities where required by law.</li>
      </ul>

      <h2 id="client-data">6. Client data we process on your behalf</h2>
      <p>
        When we provide services such as call handling, customer support, BPO, CRM or software development, we may process personal data about your customers on your behalf. In those cases you are the data controller and we act as your data processor under a written data processing agreement, processing data only on your documented instructions.
      </p>

      <h2 id="retention">7. Data retention</h2>
      <p>
        We keep enquiry data for up to 24 months after our last contact unless you become a client. Client records are retained for the duration of the relationship and for six years afterwards to meet legal and tax requirements. Call recordings are retained for the period agreed with each client, typically no longer than 12 months.
      </p>

      <h2 id="security">8. Security</h2>
      <p>
        We use appropriate technical and organisational measures to protect your data, including encryption in transit, access controls, multi-factor authentication, staff confidentiality obligations and regular review of our security practices.
      </p>

      <h2 id="international">9. International transfers</h2>
      <p>
        Some of our service providers may process data outside the UK. Where this happens we ensure appropriate safeguards are in place, such as UK adequacy regulations or the International Data Transfer Agreement / Addendum approved by the Information Commissioner&apos;s Office.
      </p>

      <h2 id="your-rights">10. Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Ask us to correct inaccurate or incomplete data.</li>
        <li>Ask us to erase your data in certain circumstances.</li>
        <li>Restrict or object to our processing, including objecting to direct marketing at any time.</li>
        <li>Request a copy of your data in a portable format.</li>
        <li>Withdraw consent where processing is based on consent.</li>
      </ul>
      <p>
        To exercise any of these rights, email <a href={site.email.href}>{site.email.display}</a>. We will respond within one month.
      </p>

      <h2 id="cookies">11. Cookies</h2>
      <p>
        Information about the cookies used on this website is set out in our <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2 id="changes">12. Changes to this policy</h2>
      <p>We may update this policy from time to time. The latest version will always be available on this page, with the date of the most recent update shown above.</p>

      <h2 id="contact">13. Contact &amp; complaints</h2>
      <p>
        If you have questions about this policy or how we handle your data, contact us at <a href={site.email.href}>{site.email.display}</a>, call <a href={site.phone.href}>{site.phone.display}</a> or write to us at {fullAddress}.
      </p>
      <p>
        If you are unhappy with our response, you have the right to complain to the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a> or by calling 0303 123 1113.
      </p>
    </LegalPage>
  );
}
