import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata: Metadata = {
  title: "CO₂ Capture Facility | Lewiston, NC",
  description:
    "CleanCycleCarbon operates a commercial CO₂ capture facility in Lewiston, NC at the Perdue Farms campus. FDA-registered, beverage-grade CO₂.",
  openGraph: {
    title: "CO₂ Capture Facility | Lewiston, NC | CleanCycleCarbon",
    description:
      "CleanCycleCarbon operates a commercial-scale CO₂ capture facility in Lewiston, NC. FDA-registered, beverage-grade CO₂ produced on-site at the Perdue Farms campus.",
    url: "https://cleancyclecarbon.com/locations/lewiston-nc",
    images: [{ url: "/images/facility-golden-hour.jpg", width: 1200, height: 630, alt: "CleanCycleCarbon Lewiston NC Facility" }],
  },
  alternates: { canonical: "/locations/lewiston-nc" },
};

const facilitySchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CleanCycleCarbon — Lewiston Facility",
  image: "https://cleancyclecarbon.com/images/facility-golden-hour.jpg",
  url: "https://cleancyclecarbon.com/locations/lewiston-nc",
  telephone: "+1-307-264-0309",
  email: "info@cleancyclecarbon.com",
  description:
    "Commercial-scale CO₂ capture and purification facility producing FDA-registered, beverage-grade CO₂ from industrial emissions.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lewiston",
    addressRegion: "NC",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.133,
    longitude: -77.167,
  },
};

export default function LewistonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(facilitySchema) }}
      />

      {/* Hero */}
      <section className="relative py-32 sm:py-40 bg-[#0F2D5A] overflow-hidden">
        <Image
          src="/images/facility-golden-hour.jpg"
          alt="CleanCycleCarbon CO₂ capture facility in Lewiston, North Carolina at sunset"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5A]/60 via-transparent to-[#0F2D5A]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="fade">
            <p className="text-[#96C3E1] text-sm font-semibold uppercase tracking-widest mb-4">
              Operating Facility
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              CleanCycleCarbon&apos;s Operating Facility — Lewiston, North Carolina
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-xl sm:text-2xl text-[#96C3E1] max-w-2xl mx-auto leading-relaxed">
              Commercial-scale CO₂ capture and purification. FDA-registered. Beverage grade. Operating now.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Facility Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="up">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-8">
                  The Lewiston Facility
                </h2>
                <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                  <p>
                    CleanCycleCarbon&apos;s first commercial facility is located on the Perdue Farms campus in Lewiston, North Carolina. The plant captures CO₂ from Perdue&apos;s processing operations and purifies it using CleanCycleCarbon&apos;s <Link href="/technology" className="text-[#2D69B4] font-semibold hover:underline">proprietary cryogenic process</Link> to FDA-registered, beverage-grade quality.
                  </p>
                  <p>
                    This is not a pilot or demonstration project. The Lewiston facility operates at commercial scale, producing <Link href="/co2-supply" className="text-[#2D69B4] font-semibold hover:underline">certified CO₂</Link> that enters the supply chain through established distribution partners and reaches food, beverage, and industrial end users across the Southeast.
                  </p>
                  <p>
                    The facility runs continuously, 24/7. It validated CleanCycleCarbon&apos;s technology in real-world conditions and established the company as an operational CO₂ supplier — not a concept.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <div className="space-y-4">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                  <Image
                    src="/images/facility-golden-hour.jpg"
                    alt="Aerial view of CleanCycleCarbon Lewiston NC facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-44 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
                    <Image
                      src="/images/first-delivery.jpg"
                      alt="First CO₂ product delivery from Lewiston facility"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-44 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
                    <Image
                      src="/images/vapor-action.jpg"
                      alt="CO₂ purification process in operation at Lewiston"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What This Proves */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-10">
              What Lewiston Proves
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              {
                title: "Commercial scale works",
                desc: "The Lewiston plant produces CO₂ at volumes that supply real commercial buyers — not a lab demo.",
              },
              {
                title: "The technology is proven",
                desc: "CleanCycleCarbon's cryogenic purification process has been validated in continuous, real-world operating conditions.",
              },
              {
                title: "The product is certified",
                desc: "Output meets FDA food-grade and beverage-grade registration requirements. The CO₂ enters the commercial supply chain as a registered, traceable product.",
              },
              {
                title: "The model is replicable",
                desc: "Lewiston is the first of many. The same technology and operating model are being deployed at additional sites across the U.S.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={i * 0.1}>
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-[#0F2D5A]/5 flex items-center justify-center group-hover:bg-[#2D69B4]/10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#2D69B4]" />
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0F2D5A] text-lg">{item.title}: </span>
                    <span className="text-gray-700 text-lg">{item.desc}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-bold text-[#0F2D5A] mb-6 text-center">Facility Location</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200 h-80">
              <iframe
                title="CleanCycleCarbon Lewiston NC Facility"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d-77.167!3d36.133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA3JzU4LjgiTiA3N8KwMTAnMDEuMiJX!5e0!3m2!1sen!2sus!4v1"
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
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F2D5A] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Interested in CO₂ Supply or Hosting a Project?
            </h2>
            <p className="text-[#96C3E1] text-lg mb-8">
              Whether you need <Link href="/co2-supply" className="underline hover:text-white transition-colors">reliable CO₂ supply</Link> or want to explore hosting a capture project at your facility, we&apos;d like to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#2D69B4] text-white font-semibold rounded-lg hover:bg-[#96C3E1] hover:text-[#0F2D5A] active:opacity-80 transition-all duration-300 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
