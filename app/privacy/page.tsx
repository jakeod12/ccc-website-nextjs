import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy | CleanCycleCarbon",
  description:
    "CleanCycleCarbon privacy policy. Learn how we collect, use, and protect your information when you visit our website or contact us.",
  openGraph: {
    title: "Privacy Policy | CleanCycleCarbon",
    description:
      "How CleanCycleCarbon collects, uses, and protects your information.",
    url: "https://cleancyclecarbon.com/privacy",
    images: [{ url: "/images/og-preview.jpg", width: 1200, height: 630, alt: "CleanCycleCarbon Privacy Policy" }],
  },
  alternates: { canonical: "/privacy" },
};

const effectiveDate = "March 13, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0F2D5A] pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up">
            <p className="text-[#96C3E1] text-sm font-semibold uppercase tracking-widest mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-[#96C3E1]/80">
              Effective {effectiveDate}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose-lg">
          <ScrollReveal direction="fade" delay={0.1}>
            <div className="space-y-10 text-gray-700 leading-relaxed">
              {/* Intro */}
              <div>
                <p>
                  CleanCycleCarbon (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
                  privacy. This Privacy Policy explains how we collect, use, and
                  protect information when you visit{" "}
                  <Link href="/" className="text-[#2D69B4] hover:underline">
                    cleancyclecarbon.com
                  </Link>{" "}
                  (the &quot;Site&quot;) or communicate with us.
                </p>
              </div>

              {/* 1 */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-4">
                  1. Information We Collect
                </h2>

                <h3 className="text-lg font-semibold text-[#0F2D5A] mt-6 mb-2">
                  Information you provide
                </h3>
                <p className="mb-3">
                  When you submit our{" "}
                  <Link href="/contact" className="text-[#2D69B4] hover:underline">
                    contact form
                  </Link>
                  , you may provide your name, email address, company name, phone
                  number, and a message describing your inquiry. We collect this
                  information only when you voluntarily submit it.
                </p>

                <h3 className="text-lg font-semibold text-[#0F2D5A] mt-6 mb-2">
                  Information collected automatically
                </h3>
                <p className="mb-3">
                  We use{" "}
                  <strong>Vercel Analytics</strong> and{" "}
                  <strong>Vercel Speed Insights</strong> to understand how
                  visitors use our Site. These services collect anonymized,
                  aggregated data such as page views, referral sources, device
                  type, browser, country, and page load performance. Vercel
                  Analytics is privacy-focused and does not use cookies or track
                  individual users across sites.
                </p>
                <p>
                  Our hosting provider (Vercel) may also collect standard server
                  logs, including IP addresses and request timestamps, as part of
                  normal web infrastructure operations.
                </p>
              </div>

              {/* 2 */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-4">
                  2. How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>Contact form submissions:</strong> To respond to your
                    inquiry, discuss potential partnerships, and follow up on CO₂
                    supply or project opportunities.
                  </li>
                  <li>
                    <strong>Analytics data:</strong> To understand Site usage
                    patterns, improve content and performance, and measure the
                    effectiveness of our pages.
                  </li>
                  <li>
                    <strong>Server logs:</strong> To maintain security,
                    troubleshoot issues, and ensure Site availability.
                  </li>
                </ul>
                <p className="mt-4">
                  We do not sell, rent, or trade your personal information to third
                  parties.
                </p>
              </div>

              {/* 3 */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-4">
                  3. Third-Party Services
                </h2>
                <p className="mb-3">
                  We use the following third-party services that may process data
                  on our behalf:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>Vercel</strong> — Hosting, analytics, and performance
                    monitoring.
                  </li>
                  <li>
                    <strong>Google Maps</strong> — Embedded maps on our location
                    pages. Google may collect usage data in accordance with its own
                    privacy policy.
                  </li>
                </ul>
                <p className="mt-4">
                  Each third-party service operates under its own privacy policy.
                  We encourage you to review those policies for details on their
                  data practices.
                </p>
              </div>

              {/* 4 */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-4">
                  4. Cookies
                </h2>
                <p>
                  Our Site does not use first-party cookies for tracking or
                  advertising. Vercel Analytics is a cookieless analytics solution.
                  Embedded third-party content (such as Google Maps) may set its
                  own cookies according to its provider&apos;s policies.
                </p>
              </div>

              {/* 5 */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-4">
                  5. Data Retention
                </h2>
                <p>
                  Contact form submissions are retained for as long as necessary
                  to respond to your inquiry and maintain our business
                  relationship. Analytics data is retained in aggregated,
                  anonymized form by Vercel. You may request deletion of your
                  personal information at any time by contacting us.
                </p>
              </div>

              {/* 6 */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-4">
                  6. Your Rights
                </h2>
                <p className="mb-3">
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction or deletion of your personal information</li>
                  <li>Opt out of any future communications from us</li>
                  <li>Request information about what data we have collected</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, contact us at{" "}
                  <a
                    href="mailto:info@cleancyclecarbon.com"
                    className="text-[#2D69B4] hover:underline"
                  >
                    info@cleancyclecarbon.com
                  </a>
                  .
                </p>
              </div>

              {/* 7 */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-4">
                  7. Data Security
                </h2>
                <p>
                  We implement reasonable administrative and technical safeguards
                  to protect the information we collect. Our Site is served over
                  HTTPS, and we use security headers to help prevent common web
                  vulnerabilities. However, no method of transmission over the
                  Internet is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </div>

              {/* 8 */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-4">
                  8. Children&apos;s Privacy
                </h2>
                <p>
                  Our Site is not directed at children under the age of 13. We do
                  not knowingly collect personal information from children. If you
                  believe a child has provided us with personal information, please
                  contact us so we can remove it.
                </p>
              </div>

              {/* 9 */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-4">
                  9. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page with an updated effective date. Your
                  continued use of the Site after any changes constitutes
                  acceptance of the updated policy.
                </p>
              </div>

              {/* 10 */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-4">
                  10. Contact Us
                </h2>
                <p className="mb-3">
                  If you have questions about this Privacy Policy or our data
                  practices, contact us at:
                </p>
                <address className="not-italic text-gray-700">
                  <p className="font-semibold text-[#0F2D5A]">CleanCycleCarbon</p>
                  <p>4287 Spruill Avenue, Suite 203</p>
                  <p>North Charleston, SC 29405</p>
                  <p className="mt-2">
                    <a
                      href="mailto:info@cleancyclecarbon.com"
                      className="text-[#2D69B4] hover:underline"
                    >
                      info@cleancyclecarbon.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+13072640309"
                      className="text-[#2D69B4] hover:underline"
                    >
                      (307) 264-0309
                    </a>
                  </p>
                </address>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
