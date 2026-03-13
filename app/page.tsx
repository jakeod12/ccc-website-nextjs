import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import { IconFDA, IconPatent, IconOperations, IconDomestic, IconPartner } from "./components/icons";
import LinkedInFeed from "./components/LinkedInFeed";
import type { LinkedInPost } from "./components/LinkedInFeed";
import linkedInPostsRaw from "../content/linkedin-posts.json";

const linkedInPosts = linkedInPostsRaw as LinkedInPost[];

export const metadata: Metadata = {
  title: "CO₂ Capture & Purification | CleanCycleCarbon",
  description:
    "CleanCycleCarbon captures industrial CO₂ emissions and purifies them to FDA-certified, beverage-grade quality. Commercial scale. Operating now in Lewiston, NC.",
  openGraph: {
    title: "Carbon Capture That Works. Operating Now.",
    description:
      "CleanCycleCarbon captures industrial CO₂ emissions and purifies them to FDA-certified, beverage-grade quality. Commercial scale. Proven technology. Domestic supply.",
    url: "https://cleancyclecarbon.com",
    images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: "CleanCycleCarbon Facility" }],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CleanCycleCarbon",
  url: "https://cleancyclecarbon.com",
  logo: "https://cleancyclecarbon.com/images/ccc-logo.png",
  description:
    "CleanCycleCarbon captures industrial CO₂ emissions and purifies them to FDA-certified, beverage-grade quality.",
  email: "info@cleancyclecarbon.com",
  telephone: "+13072640309",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4287 Spruill Avenue",
    addressLocality: "North Charleston",
    addressRegion: "SC",
    postalCode: "29405",
    addressCountry: "US",
  },
  sameAs: ["https://www.linkedin.com/company/cleancyclecarbon/"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/facility-golden-hour.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-loop.mp4" type="video/mp4" />
          </video>
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5A]/80 via-[#0F2D5A]/50 to-[#0F2D5A]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2D5A]/40 via-transparent to-[#0F2D5A]/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <ScrollReveal direction="fade" delay={0.1}>
            <p className="text-[#96C3E1] text-sm sm:text-base font-semibold tracking-[0.2em] uppercase mb-6">
              Carbon Capture &amp; Purification
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.25}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-8 tracking-tight">
              Carbon Capture That Works.<br />Operating Now.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-lg sm:text-xl text-[#96C3E1]/90 max-w-2xl mx-auto mb-12 leading-relaxed">
              CleanCycleCarbon captures industrial CO₂ emissions and purifies them to FDA-certified, beverage-grade quality. Commercial scale. Proven technology. Domestic supply.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.55}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/technology"
                className="px-8 py-3.5 bg-[#2D69B4] text-white font-semibold rounded hover:bg-[#96C3E1] hover:text-[#0F2D5A] transition-all duration-300 hover:shadow-lg hover:shadow-[#2D69B4]/25"
              >
                See Our Technology
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 border-2 border-white/80 text-white font-semibold rounded hover:bg-white hover:text-[#0F2D5A] transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
        {/* Bottom fade into stats bar */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F2D5A] to-transparent" />
      </section>

      {/* STATS BAR */}
      <section className="bg-[#0F2D5A] py-16 md:py-20 border-t border-[#2D69B4]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 text-center">
            {[
              { stat: "FDA Certified", label: "Beverage Grade CO₂", icon: <IconFDA size={28} /> },
              { stat: "Patent Pending", label: "Cryogenic Purification Process", icon: <IconPatent size={28} /> },
              { stat: "Commercial Scale", label: "Operating Facility", icon: <IconOperations size={28} /> },
              { stat: "100% In-House", label: "Technology and IP", icon: <IconDomestic size={28} /> },
              { stat: "Multiple Projects", label: "In Active Development", icon: <IconPartner size={28} /> },
            ].map((item, i) => (
              <ScrollReveal key={item.stat} direction="up" delay={i * 0.1} className="px-2">
                <div className="flex justify-center mb-3 text-[#96C3E1]/70">
                  {item.icon}
                </div>
                <div className="text-white font-bold text-xl sm:text-2xl lg:text-3xl leading-tight">{item.stat}</div>
                <div className="text-[#96C3E1]/80 text-xs sm:text-sm mt-2">{item.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-8">
              The CO₂ Supply Chain Is Broken
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-5">
              <p>
                CO₂ is not optional. It carbonates beverages, chills food, welds steel, and preserves pharmaceuticals. Every one of those industries depends on a continuous, reliable supply. And that supply has a structural problem.
              </p>
              <p>
                Most commercial CO₂ is a byproduct of industrial processes: ammonia production, ethanol fermentation, natural gas processing. When those industries slow down, CO₂ supply disappears. The 2022 CO₂ shortage disrupted food production and beverage distribution across the country. It was not an anomaly. It was a preview.
              </p>
              <p>
                Domestic supply is geographically concentrated and controlled by a small number of suppliers. Buyers have limited alternatives and limited leverage. The market needs a new class of supplier: one that captures CO₂ directly from emissions sources, purifies it on-site, and delivers it reliably and locally.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-6">
                  Capture It. Purify It. Deliver It.
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    CleanCycleCarbon captures CO₂ directly from industrial emissions sources and purifies it to the highest commercial standards. The result is FDA-certified, beverage-grade CO₂ available to food, beverage, and industrial buyers.
                  </p>
                  <p>
                    Our technology deploys on-site at industrial facilities that emit CO₂ as part of their operations. We convert what would be a waste stream into a high-value product. The host facility benefits. The environment benefits. The buyer gets a local, reliable source they can count on.
                  </p>
                  <p>
                    This is not a pilot program. It is not a research project. The first CleanCycleCarbon facility is operational today in Lewiston, North Carolina, and additional projects are in active development.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.15}>
              <div className="relative h-80 lg:h-[28rem] rounded-xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/vapor-action.jpg"
                  alt="CO₂ capture operations at CleanCycleCarbon's Lewiston facility"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY HIGHLIGHT */}
      <section className="relative py-28 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#0F2D5A]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "url('/images/stats-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5A]/60 via-transparent to-[#0F2D5A]/80" />
        {/* Decorative accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#2D69B4]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="fade">
            <p className="text-[#96C3E1]/80 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Proprietary Technology
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Patent-Pending Cryogenic Purification
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[#96C3E1] text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              CleanCycleCarbon developed a cryogenic CO₂ purification process entirely in-house. The technology captures raw CO₂ from industrial emissions and purifies it to food-grade and beverage-grade specifications through a proprietary low-temperature process.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="text-[#96C3E1]/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              The process is modular, scalable, and deployable across a wide range of feedstock types. A patent application is filed. The IP belongs to CleanCycleCarbon.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <Link
              href="/technology"
              className="inline-block px-8 py-3.5 bg-[#2D69B4] text-white font-semibold rounded hover:bg-[#96C3E1] hover:text-[#0F2D5A] transition-all duration-300 hover:shadow-lg hover:shadow-[#2D69B4]/30"
            >
              Learn More About Our Technology
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* LEWISTON SHOWCASE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right" className="order-2 lg:order-1">
              <div className="relative h-80 lg:h-[28rem] rounded-xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/ccc-facility.jpg"
                  alt="CleanCycleCarbon Lewiston North Carolina facility"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.15} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-6">
                  Operational in Lewiston, NC
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    CleanCycleCarbon's first facility operates at the Perdue Farms campus in Lewiston, North Carolina. The plant captures CO₂ from the facility's operations and purifies it to FDA-certified, beverage-grade quality at commercial scale.
                  </p>
                  <p>
                    This is a working plant. It produces real product. It supplies real buyers. Lewiston proved the technology works at scale and established CleanCycleCarbon as an operational CO₂ supplier, not a concept.
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="inline-block mt-8 px-6 py-3 bg-[#0F2D5A] text-white font-semibold rounded hover:bg-[#2D69B4] transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PIPELINE TEASER */}
      <section className="py-20 bg-[#0F2D5A] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">Growing the Network</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-[#96C3E1] text-lg leading-relaxed mb-4">
              CleanCycleCarbon is actively developing additional capture projects across multiple feedstock types and geographies. Each project applies the same proven, patent-pending technology that powers the Lewiston facility.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-[#96C3E1] mb-10">We are not in the idea phase. We are in the execution phase.</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <Link
              href="/projects"
              className="inline-block px-8 py-3.5 bg-[#2D69B4] text-white font-semibold rounded hover:bg-[#96C3E1] hover:text-[#0F2D5A] transition-all duration-300 hover:shadow-lg hover:shadow-[#2D69B4]/30"
            >
              View Projects
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* LATEST FROM LINKEDIN */}
      <section className="py-24 bg-[#0F2D5A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <p className="text-[#96C3E1]/80 text-sm font-semibold tracking-[0.2em] uppercase text-center mb-4">
              Latest Updates
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Latest from LinkedIn
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <LinkedInFeed posts={linkedInPosts} />
          </ScrollReveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] text-center mb-14">
              The Team
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Erica Chase, PE", title: "President", img: "/images/erica-chase.jpg" },
              { name: "Jake O'Donnell", title: "Vice President", img: "/images/jake-odonnell.jpg" },
              { name: "Hector Cumba, PhD", title: "Director of Process Design", img: "/images/hector-cumba.jpg" },
              { name: "Becky Atkinson", title: "Commercial Director", img: "/images/becky-atkinson.jpg" },
              { name: "Griff Walker", title: "Business Development Manager", img: "/images/griff-walker.jpg" },
              { name: "Marc Fetten", title: "Board Member", img: "/images/marc-fetten.png" },
              { name: "Dennis Shanklin", title: "Board Member", img: "/images/dennis-shanklin.webp" },
              { name: "Paul Raffle", title: "Board Member", img: "/images/paul-raffle.webp" },
            ].map((person, i) => (
              <ScrollReveal key={person.name} direction="up" delay={i * 0.08}>
                <div className="group bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      style={
                        person.name === "Griff Walker"
                          ? { objectPosition: "center 35%" }
                          : person.name === "Dennis Shanklin"
                          ? { objectPosition: "center 35%" }
                          : person.name === "Paul Raffle"
                          ? { objectPosition: "center 55%" }
                          : undefined
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-base font-bold text-[#0F2D5A]">{person.name}</h3>
                    <p className="text-[#2D69B4] font-medium text-xs mt-1">{person.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA CARDS */}
      <section className="py-24 bg-[#0F2D5A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
              Let&apos;s Work Together
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Investors",
                body: "Interested in financing or co-developing a capture project? We are actively expanding and building relationships with capital partners who want direct exposure to the carbon capture market.",
                cta: "Talk to Us About Investing",
                role: "Investor",
              },
              {
                title: "CO₂ Buyers",
                body: "Need a reliable, domestic source of food-grade or beverage-grade CO₂? CleanCycleCarbon produces and supplies CO₂ you can count on.",
                cta: "Inquire About Supply",
                role: "CO₂ Buyer",
              },
              {
                title: "Site Hosts & Partners",
                body: "Own or operate an industrial facility with CO₂ emissions? CleanCycleCarbon deploys on-site capture technology with no capital outlay required from the host.",
                cta: "Explore a Capture Project",
                role: "Site Host",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} direction="up" delay={i * 0.12}>
                <div className="bg-white/5 backdrop-blur-sm border border-[#2D69B4]/30 rounded-xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-[#96C3E1]/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F2D5A]/50 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-[#96C3E1]/90 leading-relaxed mb-8 text-sm flex-grow">{card.body}</p>
                  <Link
                    href={`/contact?role=${encodeURIComponent(card.role)}`}
                    className="inline-block px-5 py-2.5 bg-[#2D69B4] text-white text-sm font-semibold rounded hover:bg-[#96C3E1] hover:text-[#0F2D5A] transition-all duration-300 self-start"
                  >
                    {card.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
