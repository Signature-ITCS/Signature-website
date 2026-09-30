import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: `The terms and conditions governing use of the ${site.name} website and the provision of our services.`,
  path: "/terms-conditions",
});

const toc = [
  { id: "about", label: "About these terms" },
  { id: "website-use", label: "Use of this website" },
  { id: "services", label: "Our services" },
  { id: "quotes", label: "Quotes & proposals" },
  { id: "fees", label: "Fees & payment" },
  { id: "client-responsibilities", label: "Client responsibilities" },
  { id: "ip", label: "Intellectual property" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "liability", label: "Limitation of liability" },
  { id: "termination", label: "Termination" },
  { id: "law", label: "Governing law" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="The terms that apply when you use our website and engage our services."
      path="/terms-conditions"
      toc={toc}
    >
      <h2 id="about">1. About these terms</h2>
      <p>
        These terms apply to your use of this website and to services provided by <strong>{site.legalName}</strong>, a company registered in {site.jurisdiction} (company number {site.companyNumber}) with its registered office at {fullAddress}.
      </p>
      <p>
        Where we agree a proposal, statement of work or service agreement with you, that document forms part of our contract and will take precedence over these terms if there is any conflict.
      </p>

      <h2 id="website-use">2. Use of this website</h2>
      <ul>
        <li>The content on this website is for general information only and does not constitute professional advice.</li>
        <li>We make reasonable efforts to keep information accurate and up to date but give no warranty that it is complete or error-free.</li>
        <li>You must not misuse the website, attempt to gain unauthorised access, introduce malicious code or use automated tools to scrape its content.</li>
        <li>Links to third-party websites are provided for convenience; we are not responsible for their content.</li>
      </ul>

      <h2 id="services">3. Our services</h2>
      <p>
        We provide digital marketing, technology, software development, call centre, customer support and business process outsourcing services. The scope, deliverables, timelines and service levels for each engagement are set out in the relevant proposal or agreement.
      </p>
      <p>
        Marketing results such as rankings, traffic, leads or sales depend on many factors outside our control, including search engine and platform algorithms, competition and market conditions. Unless expressly agreed in writing, we do not guarantee specific results.
      </p>

      <h2 id="quotes">4. Quotes &amp; proposals</h2>
      <p>
        Quotes are valid for 30 days unless stated otherwise. Work begins once a proposal has been accepted in writing and any agreed deposit has been received.
      </p>

      <h2 id="fees">5. Fees &amp; payment</h2>
      <ul>
        <li>All fees are quoted in pounds sterling and are exclusive of VAT unless stated otherwise.</li>
        <li>Project work is typically invoiced in stages; monthly services are invoiced in advance.</li>
        <li>Invoices are payable within 14 days unless otherwise agreed.</li>
        <li>Third-party costs such as advertising spend, software licences, hosting, domains and telephony are payable by the client, either directly or reimbursed at cost.</li>
        <li>We may charge statutory interest on late payments under the Late Payment of Commercial Debts (Interest) Act 1998 and may suspend services while invoices remain overdue.</li>
      </ul>

      <h2 id="client-responsibilities">6. Client responsibilities</h2>
      <p>
        You agree to provide timely access, information, approvals and materials reasonably required for us to deliver the services, and to ensure that any content or data you supply is accurate, lawful and does not infringe third-party rights.
      </p>

      <h2 id="ip">7. Intellectual property</h2>
      <p>
        On receipt of full payment, ownership of the bespoke deliverables we create for you (such as designs, content and custom code) transfers to you, unless otherwise agreed. We retain ownership of our pre-existing tools, frameworks and know-how, and grant you a licence to use any such elements incorporated into your deliverables. Third-party software remains subject to its own licence terms.
      </p>
      <p>Unless you ask us not to, we may reference your business name and non-confidential project details in our portfolio.</p>

      <h2 id="confidentiality">8. Confidentiality &amp; data protection</h2>
      <p>
        Each party will keep the other&apos;s confidential information secure and use it only for the purposes of the engagement. Where we process personal data on your behalf, we will do so in accordance with a data processing agreement and UK data protection law. See our <a href="/privacy-policy">Privacy Policy</a> for details.
      </p>

      <h2 id="liability">9. Limitation of liability</h2>
      <p>
        Nothing in these terms limits liability for death or personal injury caused by negligence, fraud or any other liability that cannot be limited by law. Subject to that, we are not liable for indirect or consequential loss, or loss of profit, revenue, data or goodwill, and our total liability under any engagement is limited to the fees paid by you for the services in the 12 months before the claim arose.
      </p>

      <h2 id="termination">10. Termination</h2>
      <p>
        Monthly services may be terminated by either party with 30 days&apos; written notice after any minimum term. Either party may terminate immediately if the other commits a material breach that is not remedied within 14 days of notice. You remain responsible for fees for work completed up to the termination date.
      </p>

      <h2 id="law">11. Governing law</h2>
      <p>These terms and any dispute arising from them are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction.</p>

      <h2 id="contact">12. Contact</h2>
      <p>
        Questions about these terms? Email <a href={site.email.href}>{site.email.display}</a> or call <a href={site.phone.href}>{site.phone.display}</a>.
      </p>
    </LegalPage>
  );
}
