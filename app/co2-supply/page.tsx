import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";

export const metadata: Metadata = {
  title: "CO₂ Supply | Domestic Beverage-Grade CO₂",
  description:
    "CleanCycleCarbon supplies FDA-certified, beverage-grade CO₂ to food, beverage, and industrial buyers. Domestic. Reliable. Commercial scale.",
  openGraph: {
    title: "Domestic CO₂ You Can Count On",
    description:
      "FDA-certified. Beverage grade. Produced in the US from captured industrial emissions. CleanCycleCarbon supplies reliable domestic CO₂.",
    url: "https://cleancyclecarbon.com/co2-supply",
    images: [{ url: "/images/supply-chain.jpg", width: 1200, height: 630, alt: "CleanCycleCarbon CO₂ Supply" }],
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "FDA-Certified Beverage-Grade CO₂",
  description:
    "CleanCycleCarbon supplies FDA-certified, beverage-grade CO₂ captured and purified from industrial emissions sources. Domestic. Reliable. Commercial scale.",
  brand: {
    "@type": "Brand",
    name: "CleanCycleCarbon",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "CleanCycleCarbon",
    },
  },
};

export default function CO2SupplyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
          <source src="/videos/supply-tanker.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5A]/70 via-[#0F2D5A]/40 to-[#0F2D5A]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="fade">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Domestic CO₂ You Can Count On
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-xl sm:text-2xl text-[#96C3E1] max-w-2xl mx-auto leading-relaxed">
              FDA-certified. Beverage grade. Produced in the US from captured industrial emissions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO NEEDS CO₂ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-14 text-center">
              CO₂ Powers More Than You Think
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Beverage Production",
                desc: "Carbonation of soft drinks, beer, sparkling water, and other beverages. Beverage-grade purity is required.",
                icon: "🥤",
              },
              {
                title: "Food Processing and Preservation",
                desc: "Modified atmosphere packaging, chilling and freezing, pH control, and produce preservation. Food-grade certification is required.",
                icon: "🥩",
              },
              {
                title: "Industrial Applications",
                desc: "Welding and metal fabrication, fire suppression systems, water treatment, chemical manufacturing, and pH adjustment in industrial processes.",
                icon: "🏭",
              },
              {
                title: "Agriculture",
                desc: "Greenhouse CO₂ enrichment for crop yield improvement.",
                icon: "🌱",
              },
              {
                title: "Research and Laboratory",
                desc: "Certified, traceable CO₂ for laboratory applications requiring precise specifications.",
                icon: "🔬",
              },
              {
                title: "Water Treatment",
                desc: "pH adjustment and treatment processes at water treatment facilities.",
                icon: "💧",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} direction="up" delay={i * 0.08}>
                <div className="group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#96C3E1]/50 h-full">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#0F2D5A]/5 mb-5 group-hover:bg-[#0F2D5A]/10 transition-colors duration-300">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="font-bold text-[#0F2D5A] text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-12 text-center text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Every one of these applications requires a consistent, certified, traceable supply. Disruptions have real costs: spoiled product, halted production lines, lost contracts.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SUPPLY RISK */}
      <section className="relative py-28 bg-[#0F2D5A] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D69B4]/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#96C3E1]/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats row */}
          <ScrollReveal direction="up">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={70} suffix="%" duration={2} />
                </div>
                <p className="text-[#96C3E1] text-sm">US CO₂ from concentrated sources</p>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={2022} duration={2} />
                </div>
                <p className="text-[#96C3E1] text-sm">Last major shortage year</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={100} suffix="%" duration={2} />
                </div>
                <p className="text-[#96C3E1] text-sm">Domestic production</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={0.1}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">The Supply Risk Is Real</h2>
                <div className="space-y-5 text-[#96C3E1] text-lg leading-relaxed">
                  <p>
                    The US CO₂ market depends on a small number of production sources concentrated in specific regions. When those sources reduce output, whether due to planned maintenance, feedstock shifts, or economic factors, supply drops and prices spike.
                  </p>
                  <p>
                    The 2022 shortage affected breweries, food processors, and manufacturers across the country.
                  </p>
                  <p>
                    CleanCycleCarbon addresses this by producing CO₂ directly from emissions sources at industrial facilities. Our plants produce regardless of commodity market conditions. Supply is local. Source is consistent. The product is certified.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/hose-connection.jpg"
                  alt="CO₂ supply connection at CleanCycleCarbon facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5A]/40 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HOW CCC SUPPLIES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-8">
              Direct from Capture to Customer
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                CleanCycleCarbon operates on-site at industrial host facilities. We capture CO₂ from the facility's emissions, purify it using our proprietary cryogenic process, and make it available to commercial buyers as a certified product.
              </p>
              <p>
                Current supply comes from the Lewiston, NC facility. Additional capacity is in development. As we bring new capture projects online, supply grows with it.
              </p>
              <p>
                Buyers can engage directly with CleanCycleCarbon for pricing, volume, and logistics.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-10 text-center">Industries We Serve</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Beverage manufacturers and bottlers",
              "Food processors and packagers",
              "Agricultural operations and greenhouse growers",
              "Industrial manufacturers and fabricators",
              "Water treatment facilities",
              "Research and laboratory applications",
            ].map((industry, i) => (
              <ScrollReveal key={industry} direction="up" delay={i * 0.06}>
                <div className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2D69B4] flex-shrink-0 ring-4 ring-[#2D69B4]/10" />
                  <span className="text-gray-700">{industry}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F2D5A] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need a Reliable CO₂ Source?</h2>
            <p className="text-[#96C3E1] text-lg mb-8">
              Contact us to discuss volume, specifications, and logistics.
            </p>
            <Link
              href="/contact?role=CO₂%20Buyer"
              className="inline-block px-10 py-4 bg-[#2D69B4] text-white font-semibold rounded-lg hover:bg-[#96C3E1] hover:text-[#0F2D5A] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Inquire About Supply
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
