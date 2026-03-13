import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata: Metadata = {
  title: "CO₂ Capture Company | North Charleston, SC",
  description:
    "CleanCycleCarbon is headquartered in North Charleston, SC. We develop and operate carbon capture facilities serving industrial partners across the Southeast.",
  openGraph: {
    title: "CO₂ Capture Company | North Charleston, SC | CleanCycleCarbon",
    description:
      "CleanCycleCarbon is headquartered in North Charleston, SC. We develop and operate carbon capture facilities serving industrial partners across the Southeast.",
    url: "https://cleancyclecarbon.com/locations/north-charleston-sc",
  },
  alternates: { canonical: "/locations/north-charleston-sc" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CleanCycleCarbon — North Charleston Office",
  image: "https://cleancyclecarbon.com/images/ccc-logo.png",
  url: "https://cleancyclecarbon.com",
  telephone: "+1-307-264-0309",
  email: "info@cleancyclecarbon.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4287 Spruill Avenue, Suite 203",
    addressLocality: "North Charleston",
    addressRegion: "SC",
    postalCode: "29405",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.854,
    longitude: -79.974,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
};

export default function NorthCharlestonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Hero */}
      <section className="relative py-32 sm:py-40 bg-[#0F2D5A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5A]/60 via-transparent to-[#0F2D5A]/80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D69B4]/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="fade">
            <p className="text-[#96C3E1] text-sm font-semibold uppercase tracking-widest mb-4">
              Headquarters
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Carbon Capture &amp; CO₂ Supply — North Charleston, SC
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-xl sm:text-2xl text-[#96C3E1] max-w-2xl mx-auto leading-relaxed">
              CleanCycleCarbon&apos;s headquarters and business operations are based in North Charleston, South Carolina.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* About the Office */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-8">
              Our Home Base
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                CleanCycleCarbon is headquartered at 4287 Spruill Avenue, Suite 203, North Charleston, SC 29405. From here, our leadership and business development teams manage project development, commercial partnerships, and strategic growth across the United States.
              </p>
              <p>
                North Charleston positions CleanCycleCarbon at the center of the Southeast&apos;s industrial corridor, providing direct access to agricultural processors, manufacturing facilities, and renewable natural gas operations that produce capturable CO₂ emissions.
              </p>
              <p>
                Our team works with industrial site hosts to deploy <Link href="/technology" className="text-[#2D69B4] font-semibold hover:underline">proprietary cryogenic purification technology</Link> that captures waste CO₂ and converts it into a certified, commercial product. The result is a new source of <Link href="/co2-supply" className="text-[#2D69B4] font-semibold hover:underline">FDA-registered, beverage-grade CO₂</Link> for buyers across the region.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map + Contact */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="up">
              <div>
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-6">Visit Us</h2>
                <address className="not-italic space-y-3 text-gray-700 text-lg">
                  <p className="font-semibold text-[#0F2D5A]">CleanCycleCarbon</p>
                  <p>4287 Spruill Avenue, Suite 203<br />North Charleston, SC 29405</p>
                  <p>
                    <a href="tel:+13072640309" className="text-[#2D69B4] hover:underline">(307) 264-0309</a>
                  </p>
                  <p>
                    <a href="mailto:info@cleancyclecarbon.com" className="text-[#2D69B4] hover:underline">info@cleancyclecarbon.com</a>
                  </p>
                </address>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3.5 bg-[#0F2D5A] text-white font-semibold rounded-lg hover:bg-[#2D69B4] transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200 h-80">
                <iframe
                  title="CleanCycleCarbon North Charleston Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8!2d-79.974!3d32.854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDUxJzE0LjQiTiA3OcKwNTgnMjYuNCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F2D5A] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Explore Our Projects
            </h2>
            <p className="text-[#96C3E1] text-lg mb-8">
              See our <Link href="/projects" className="underline hover:text-white transition-colors">operating facility in Lewiston, NC</Link> and learn about projects in development.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#2D69B4] text-white font-semibold rounded-lg hover:bg-[#96C3E1] hover:text-[#0F2D5A] transition-all duration-300 hover:shadow-lg"
            >
              Partner With Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
