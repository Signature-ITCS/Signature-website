import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description: `Information about the cookies and similar technologies used on the ${site.name} website.`,
  path: "/cookie-policy",
});

const toc = [
  { id: "what-are-cookies", label: "What are cookies?" },
  { id: "cookies-we-use", label: "Cookies we use" },
  { id: "analytics", label: "Analytics & marketing" },
  { id: "managing", label: "Managing cookies" },
  { id: "contact", label: "Contact" },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="What cookies are, which ones we use and how you can control them."
      path="/cookie-policy"
      toc={toc}
    >
      <h2 id="what-are-cookies">1. What are cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, to remember your preferences and to provide information to site owners. Similar technologies include local storage and pixels.
      </p>

      <h2 id="cookies-we-use">2. Cookies we use</h2>
      <p>
        This website is designed to be privacy-friendly. At present we only use cookies and similar technologies that are <strong>strictly necessary</strong> for the website to function securely and efficiently, such as those set by our hosting provider to deliver pages and protect against abuse. These do not require your consent under the Privacy and Electronic Communications Regulations (PECR).
      </p>
      <p>We do not use advertising cookies or sell any information collected through cookies.</p>

      <h2 id="analytics">3. Analytics &amp; marketing</h2>
      <p>
        If we introduce analytics or marketing tools in the future (for example Google Analytics or advertising pixels), we will only set those cookies after you have given consent through a cookie banner, and we will update this policy to list them, their purpose and how long they last.
      </p>

      <h2 id="managing">4. Managing cookies</h2>
      <p>
        You can control and delete cookies through your browser settings. Most browsers allow you to block all or some cookies and to delete cookies already stored. Blocking strictly necessary cookies may affect how the website works. Guidance is available at{" "}
        <a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>
        .
      </p>

      <h2 id="contact">5. Contact</h2>
      <p>
        If you have any questions about our use of cookies, email <a href={site.email.href}>{site.email.display}</a>. For more on how we handle personal data, see our <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
