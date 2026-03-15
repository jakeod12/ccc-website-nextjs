import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import ProcessFlow from "../components/ProcessFlow";

export const metadata: Metadata = {
  title: "Technology | Patent-Pending CO₂ Purification",
  description:
    "CleanCycleCarbon's patent-pending cryogenic process captures industrial CO₂ and purifies it to FDA-registered, beverage-grade quality.",
  openGraph: {
    title: "In-House Technology. Commercial Scale. Proven Results.",
    description:
      "CleanCycleCarbon's patent-pending cryogenic CO₂ purification process — modular, scalable, feedstock agnostic. Fully proprietary IP.",
    url: "https://cleancyclecarbon.com/technology",
    images: [{ url: "/images/technology-diagram.png", width: 1200, height: 630, alt: "CleanCycleCarbon Technology" }],
  },
  alternates: { canonical: "/technology" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CO₂ Capture and Cryogenic Purification",
  provider: {
    "@type": "Organization",
    name: "CleanCycleCarbon",
    url: "https://cleancyclecarbon.com",
  },
  description:
    "Patent-pending cryogenic CO₂ purification process that captures industrial CO₂ emissions and purifies them to FDA-registered, beverage-grade quality.",
  serviceType: "Carbon Capture and CO₂ Purification",
};


const howItWorksItems = [
  {
    label: "Modular",
    desc: "Each system is sized and configured for the specific emissions source. It deploys on the host facility's existing footprint.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    label: "Scalable",
    desc: "The same core technology operates across a wide range of CO₂ volumes, from mid-scale industrial sources to large-scale processing facilities.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    label: "Feedstock Agnostic",
    desc: "The technology captures and purifies CO₂ from multiple types of emissions sources, including fermentation, combustion, and biological processes.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
  {
    label: "Fully Proprietary",
    desc: "CleanCycleCarbon owns the process and the IP. A patent application is on file.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function TechnologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="relative py-32 md:py-40 bg-[#0F2D5A] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/facility-golden-hour.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/tech-vapor.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5A]/70 via-[#0F2D5A]/40 to-[#0F2D5A]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            In-House Technology. Commercial Scale. Proven Results.
          </h1>
          <p className="text-xl sm:text-2xl text-[#96C3E1] max-w-2xl mx-auto font-light">
            CleanCycleCarbon did not license this technology. We built it.
          </p>
        </div>
      </section>

      {/* THE PROBLEM WE SOLVE */}
      <section className="py-24 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-8">The Problem We Solve</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
              <p>
                Industrial CO₂ emissions are everywhere. Power plants, food processors, ethanol facilities, chemical manufacturers, and agricultural operations all produce CO₂ as a byproduct. Most of it goes into the atmosphere. None of it has to.
              </p>
              <p>
                The technical challenge is purification. Raw emissions-source CO₂ contains impurities that make it unusable for food, beverage, or industrial applications. Getting from raw gas to product-grade CO₂ requires a purification process that is efficient, scalable, and economically viable at commercial scale. That is exactly what CleanCycleCarbon built.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Process Flow Diagram */}
          <ScrollReveal direction="up">
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-4 text-center">How It Works</h2>
              <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">From emissions source to commercial product, in four steps.</p>
              <ProcessFlow />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal direction="up">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-6">The Details</h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <p className="text-gray-700 leading-relaxed mb-10 text-lg">
                  CleanCycleCarbon&apos;s process captures CO₂ from an industrial emissions source and runs it through a proprietary cryogenic purification system. At low temperatures, CO₂ separates from contaminants and is processed into a high-purity liquid or gaseous product that meets FDA and food-grade specifications.
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {howItWorksItems.map((item, i) => (
                  <ScrollReveal key={item.label} direction="up" delay={0.15 + i * 0.1}>
                    <div className="group relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#96C3E1]/50 transition-all duration-300 h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#0F2D5A]/5 group-hover:bg-[#2D69B4]/10 flex items-center justify-center text-[#2D69B4] transition-colors duration-300">
                          {item.icon}
                        </div>
                        <h3 className="font-bold text-[#0F2D5A] text-lg">{item.label}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-80 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/vapor-action.jpg"
                  alt="CleanCycleCarbon cryogenic purification process in operation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5A]/30 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY CRYOGENIC */}
      <section className="relative py-24 md:py-32 bg-[#0F2D5A] overflow-hidden">
        {/* Background video for tech feel */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/facility-golden-hour.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/tech-gauge.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0F2D5A]/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Cryogenic</h2>
              <div className="w-16 h-1 bg-[#2D69B4] mx-auto rounded-full" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#2D69B4]/20 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-[#96C3E1]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">Industrial-Grade Foundation</h3>
                <p className="text-[#96C3E1]/90 leading-relaxed">
                  Cryogenic separation is a mature, industrial-grade approach used across the gas processing industry. CleanCycleCarbon&apos;s innovation is in how we apply it specifically to CO₂ capture and purification at distributed, on-site deployments.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#2D69B4]/20 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-[#96C3E1]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">Cleaner Than Chemical Absorption</h3>
                <p className="text-[#96C3E1]/90 leading-relaxed">
                  Competing approaches often rely on chemical absorption processes that require significant reagent consumption, waste disposal, and ongoing operating costs. The cryogenic approach eliminates those dependencies and produces a cleaner product with a simpler operational footprint.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OUTPUT QUALITY */}
      <section className="py-24 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/first-delivery.jpg"
                  alt="CleanCycleCarbon first CO₂ product delivery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5A]/20 to-transparent" />
              </div>
            </ScrollReveal>
            <div>
              <ScrollReveal direction="up">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-6">Output Quality</h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.1}>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  CleanCycleCarbon produces CO₂ that meets:
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <ul className="space-y-4">
                  {[
                    "FDA food-grade registration",
                    "Beverage-grade purity standards (suitable for carbonation of beverages)",
                    "Industrial-grade specifications",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#2D69B4]/10 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-[#2D69B4]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <p className="mt-8 text-gray-500 leading-relaxed">
                  The <Link href="/projects" className="text-[#2D69B4] hover:underline">Lewiston, NC facility</Link> demonstrated this quality at commercial scale. The product goes directly to buyers who require certified, traceable CO₂. <Link href="/co2-supply" className="text-[#2D69B4] hover:underline">View available CO₂ supply</Link>.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* IP OWNERSHIP */}
      <section className="py-24 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-8">IP and Ownership</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              CleanCycleCarbon developed this technology entirely in-house. The engineering, process design, and system integration were done by our team. A patent application has been filed covering key aspects of the purification process. The IP belongs to CleanCycleCarbon.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={0.3}>
            <p className="text-[#0F2D5A] font-semibold text-xl leading-relaxed">
              This is not a licensed technology. This is not a white-label system from an equipment vendor. We own what we built.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-12 text-center">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-8">
            {[
              {
                q: "What is cryogenic CO₂ purification?",
                a: "Cryogenic CO₂ purification uses low temperatures to separate CO₂ from contaminants in industrial emissions. CleanCycleCarbon's patent-pending process purifies raw CO₂ to FDA-registered, beverage-grade quality without chemical reagents.",
              },
              {
                q: "What purity level does CleanCycleCarbon's CO₂ meet?",
                a: "CleanCycleCarbon produces CO₂ that meets FDA food-grade registration, beverage-grade purity standards suitable for carbonation, and industrial-grade specifications.",
              },
              {
                q: "Can the technology work with different emissions sources?",
                a: "Yes. CleanCycleCarbon's technology is feedstock agnostic and captures CO₂ from multiple types of industrial emissions including fermentation, combustion, and biological processes.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-lg font-bold text-[#0F2D5A] mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/faq"
                className="text-[#2D69B4] font-semibold hover:underline transition-colors"
              >
                View all frequently asked questions &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#0F2D5A] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to explore a project?</h2>
            <p className="text-[#96C3E1] text-lg mb-8">
              Learn how our technology can work at your facility.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?role=Site%20Host"
                className="w-full sm:w-auto text-center px-10 py-4 bg-[#2D69B4] text-white font-semibold rounded-lg hover:bg-[#96C3E1] hover:text-[#0F2D5A] active:opacity-80 transition-all duration-300 hover:shadow-lg hover:shadow-[#2D69B4]/25 text-lg"
              >
                Discuss a Project
              </Link>
              <Link
                href="/contact?role=Investor"
                className="w-full sm:w-auto text-center px-10 py-4 border-2 border-white/60 text-white font-semibold rounded-lg hover:bg-white hover:text-[#0F2D5A] active:opacity-80 transition-all duration-300 text-lg"
              >
                Investor Inquiries
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
