import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Projects | Lewiston NC Facility & Pipeline",
  description:
    "CleanCycleCarbon operates a commercial CO₂ capture facility in Lewiston, NC and is developing additional projects across multiple feedstock types.",
  openGraph: {
    title: "Operational Today. Expanding Tomorrow.",
    description:
      "One facility operating at commercial scale in Lewiston, NC. Multiple CO₂ capture projects in active development.",
    url: "https://cleancyclecarbon.com/projects",
    images: [{ url: "/images/facility-golden-hour.jpg", width: 1200, height: 630, alt: "CleanCycleCarbon Lewiston NC Facility" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CO₂ Capture Project Development",
  provider: {
    "@type": "Organization",
    name: "CleanCycleCarbon",
    url: "https://cleancyclecarbon.com",
  },
  description:
    "CleanCycleCarbon develops, builds, and operates on-site CO₂ capture and purification facilities at industrial host locations.",
  areaServed: "US",
};

const galleryImages = [
  { file: "vapor-action.jpg", caption: "Facility Overview" },
  { file: "first-delivery.jpg", caption: "First CO₂ Delivery" },
  { file: "vapor-action.jpg", caption: "Purification in Action" },
  { file: "hose-connection.jpg", caption: "Product Loading" },
  { file: "facility-golden-hour.jpg", caption: "Operations at Sunset" },
];

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="relative py-32 sm:py-40 bg-[#0F2D5A] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/facility-golden-hour.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/projects-crew.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5A]/70 via-[#0F2D5A]/40 to-[#0F2D5A]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Operational Today. Expanding Tomorrow.
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-xl sm:text-2xl text-[#96C3E1] max-w-2xl mx-auto font-light">
              One facility operating at commercial scale. Multiple projects in active development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative -mt-8 z-20 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-3 divide-x divide-gray-100">
              <div className="py-8 px-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#0F2D5A]">
                  <AnimatedCounter target={1} duration={1} />
                </div>
                <p className="text-sm text-gray-500 mt-1 font-medium uppercase tracking-wider">Facility Operating</p>
              </div>
              <div className="py-8 px-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#2D69B4]">
                  <AnimatedCounter target={24} suffix="/7" duration={1.5} />
                </div>
                <p className="text-sm text-gray-500 mt-1 font-medium uppercase tracking-wider">Continuous Operation</p>
              </div>
              <div className="py-8 px-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#0F2D5A]">
                  FDA
                </div>
                <p className="text-sm text-gray-500 mt-1 font-medium uppercase tracking-wider">Registered Product</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LEWISTON FACILITY */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider border border-green-200">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Operational
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-6">
                  Lewiston, North Carolina
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg mb-10">
                  <p>
                    CleanCycleCarbon&apos;s first commercial facility is located on the Perdue Farms campus in Lewiston, North Carolina. The plant captures CO₂ from Perdue&apos;s processing operations and purifies it using CleanCycleCarbon&apos;s proprietary cryogenic process to FDA-registered, beverage-grade quality.
                  </p>
                </div>
                <h3 className="text-lg font-bold text-[#0F2D5A] mb-5 uppercase tracking-wider">What This Facility Represents</h3>
                <div className="space-y-5">
                  {[
                    {
                      label: "Commercial scale",
                      desc: "The Lewiston plant is not a pilot. It produces CO₂ at volumes that supply real commercial buyers.",
                    },
                    {
                      label: "Proven process",
                      desc: "The facility validated CleanCycleCarbon's purification technology in real-world operating conditions. It runs continuously, not as a demo.",
                    },
                    {
                      label: "Certified product",
                      desc: "Output meets FDA food-grade and beverage-grade registration requirements. The product enters the commercial supply chain as a registered, traceable input.",
                    },
                    {
                      label: "First of a kind",
                      desc: "Lewiston is the proof point that on-site CO₂ capture and purification from this class of emissions source works at commercial scale.",
                    },
                  ].map((item, i) => (
                    <ScrollReveal key={item.label} direction="up" delay={0.1 * i}>
                      <div className="flex gap-4 group">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 rounded-lg bg-[#0F2D5A]/5 flex items-center justify-center group-hover:bg-[#2D69B4]/10 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-[#2D69B4]" />
                          </div>
                        </div>
                        <div>
                          <span className="font-semibold text-[#0F2D5A]">{item.label}: </span>
                          <span className="text-gray-600">{item.desc}</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="space-y-4 lg:sticky lg:top-24">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                  <Image
                    src="/images/facility-golden-hour.jpg"
                    alt="CleanCycleCarbon Lewiston NC facility exterior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5A]/40 to-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-44 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 group">
                    <Image
                      src="/images/first-delivery.jpg"
                      alt="First CO₂ product delivery from Lewiston facility"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-white text-sm font-medium">First Delivery</span>
                    </div>
                  </div>
                  <div className="relative h-44 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 group">
                    <Image
                      src="/images/vapor-action.jpg"
                      alt="CO₂ purification process in operation at Lewiston"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="text-white text-sm font-medium">Purification in Action</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-[#2D69B4] uppercase tracking-widest mb-3">Inside the Facility</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A]">Facility Photos</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[240px] lg:auto-rows-[280px]">
            {galleryImages.map((img, i) => {
              const isLarge = i === 0 || i === 5;
              return (
                <ScrollReveal
                  key={img.file}
                  direction="fade"
                  delay={0.05 * i}
                  className={isLarge ? "col-span-2 row-span-2" : ""}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 group cursor-pointer">
                    <Image
                      src={`/images/${img.file}`}
                      alt="CleanCycleCarbon facility photo"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5A]/70 via-[#0F2D5A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-white text-sm font-semibold tracking-wide">{img.caption}</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="relative py-28 sm:py-36 bg-[#0F2D5A] overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2D69B4]/10 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <ScrollReveal direction="up">
                <p className="text-sm font-bold text-[#96C3E1] uppercase tracking-widest mb-4">What&apos;s Next</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Active Development</h2>
              </ScrollReveal>
              <div className="space-y-5">
                {[
                  "CleanCycleCarbon is actively developing additional capture projects across multiple feedstock types and geographies. Each project deploys the same patent-pending cryogenic technology proven at Lewiston.",
                  "Projects in development span a range of industrial CO₂ emissions sources. We identify host facilities with viable emissions streams, engineer the capture system for that specific source, and build and operate the plant.",
                  "We will announce new projects when contracts are signed and construction begins. Until then, the pipeline is real and the work is underway.",
                ].map((text, i) => (
                  <ScrollReveal key={i} direction="up" delay={0.1 * (i + 1)}>
                    <p className="text-[#96C3E1] leading-relaxed text-lg">{text}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 flex items-center">
              <ScrollReveal direction="right" delay={0.3} className="w-full">
                <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="space-y-6 mb-8">
                    {[
                      { icon: "🔬", label: "Multiple feedstock types" },
                      { icon: "📍", label: "Multiple geographies" },
                      { icon: "⚙️", label: "Patent-pending technology" },
                      { icon: "📋", label: "Contracts in progress" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span className="text-xl flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">{item.icon}</span>
                        <span className="text-white font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-white font-medium mb-4">
                      Interested in hosting a capture project at your facility?
                    </p>
                    <Link
                      href="/contact?role=Site%20Host"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D69B4] text-white font-semibold rounded-lg hover:bg-[#96C3E1] hover:text-[#0F2D5A] transition-all duration-300 hover:shadow-lg hover:shadow-[#2D69B4]/20"
                    >
                      Talk to Us
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
