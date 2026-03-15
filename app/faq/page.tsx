import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "FAQ | CleanCycleCarbon",
  description:
    "FAQ about CleanCycleCarbon's CO₂ capture technology, beverage-grade supply options, project hosting, and investment opportunities.",
  openGraph: {
    title: "Frequently Asked Questions | CleanCycleCarbon",
    description:
      "Get answers about CO₂ capture technology, beverage-grade CO₂ supply, hosting a capture project, and investing in carbon capture.",
    url: "https://cleancyclecarbon.com/faq",
    images: [{ url: "/images/og-preview.jpg", width: 1200, height: 630, alt: "CleanCycleCarbon FAQ" }],
  },
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is cryogenic CO₂ purification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cryogenic CO₂ purification uses low temperatures to separate CO₂ from contaminants in industrial emissions. CleanCycleCarbon's patent-pending process purifies raw CO₂ to FDA-registered, beverage-grade quality without chemical reagents.",
      },
    },
    {
      "@type": "Question",
      name: "What purity level does CleanCycleCarbon's CO₂ meet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CleanCycleCarbon produces CO₂ that meets FDA food-grade registration, beverage-grade purity standards suitable for carbonation, and industrial-grade specifications.",
      },
    },
    {
      "@type": "Question",
      name: "Can the technology work with different emissions sources?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CleanCycleCarbon's technology is feedstock agnostic and captures CO₂ from multiple types of industrial emissions including fermentation, combustion, and biological processes.",
      },
    },
    {
      "@type": "Question",
      name: "How does CleanCycleCarbon's approach differ from chemical absorption?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chemical absorption processes require significant reagent consumption, waste disposal, and ongoing operating costs. CleanCycleCarbon's cryogenic approach eliminates those dependencies and produces a cleaner product with a simpler operational footprint.",
      },
    },
    {
      "@type": "Question",
      name: "Does the host facility need to invest capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. CleanCycleCarbon develops, builds, and operates the capture facility on-site. The host facility provides access to the emissions source. No capital outlay is required from the host.",
      },
    },
    {
      "@type": "Question",
      name: "Where does CleanCycleCarbon currently operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CleanCycleCarbon's first commercial facility operates at the Perdue Farms campus in Lewiston, North Carolina. Additional projects are in active development across multiple geographies and feedstock types.",
      },
    },
    {
      "@type": "Question",
      name: "How can I purchase CO₂ from CleanCycleCarbon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CleanCycleCarbon works with established distribution partners to deliver CO₂ to commercial end users. Contact us to discuss volume, specifications, and supply availability.",
      },
    },
    {
      "@type": "Question",
      name: "Is CleanCycleCarbon's CO₂ produced domestically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All CO₂ is captured and purified at facilities within the United States. CleanCycleCarbon is building domestic CO₂ supply capacity to reduce reliance on concentrated, geographically distant sources.",
      },
    },
  ],
};

const faqs = [
  {
    category: "Technology",
    questions: [
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
      {
        q: "How does CleanCycleCarbon's approach differ from chemical absorption?",
        a: "Chemical absorption processes require significant reagent consumption, waste disposal, and ongoing operating costs. CleanCycleCarbon's cryogenic approach eliminates those dependencies and produces a cleaner product with a simpler operational footprint.",
      },
    ],
  },
  {
    category: "CO₂ Supply",
    questions: [
      {
        q: "How can I purchase CO₂ from CleanCycleCarbon?",
        a: "CleanCycleCarbon works with established distribution partners to deliver CO₂ to commercial end users. Contact us to discuss volume, specifications, and supply availability.",
      },
      {
        q: "Is CleanCycleCarbon's CO₂ produced domestically?",
        a: "Yes. All CO₂ is captured and purified at facilities within the United States. CleanCycleCarbon is building domestic CO₂ supply capacity to reduce reliance on concentrated, geographically distant sources.",
      },
      {
        q: "What industries does CleanCycleCarbon serve?",
        a: "CleanCycleCarbon supplies CO₂ to beverage manufacturers, food processors, agricultural operations, industrial manufacturers, water treatment facilities, and research laboratories.",
      },
    ],
  },
  {
    category: "Projects & Partnerships",
    questions: [
      {
        q: "Where does CleanCycleCarbon currently operate?",
        a: "CleanCycleCarbon's first commercial facility operates at the Perdue Farms campus in Lewiston, North Carolina. Additional projects are in active development across multiple geographies and feedstock types.",
      },
      {
        q: "Does the host facility need to invest capital?",
        a: "No. CleanCycleCarbon develops, builds, and operates the capture facility on-site. The host facility provides access to the emissions source. No capital outlay is required from the host.",
      },
      {
        q: "How long does it take to deploy a capture system?",
        a: "Timeline depends on the specific emissions source and site conditions. CleanCycleCarbon handles the full process: site evaluation, engineering, permitting, construction, commissioning, and ongoing operations.",
      },
      {
        q: "How can I invest in CleanCycleCarbon?",
        a: "CleanCycleCarbon is actively expanding and building relationships with capital partners. Contact us to discuss investment opportunities in CO₂ capture project development.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative py-32 sm:py-40 bg-[#0F2D5A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5A]/60 via-transparent to-[#0F2D5A]/80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D69B4]/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="fade">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-xl sm:text-2xl text-[#96C3E1] max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our technology, CO₂ supply, and partnership opportunities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {faqs.map((section, sIdx) => (
            <div key={section.category} className={sIdx > 0 ? "mt-16" : ""}>
              <ScrollReveal direction="up">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2D5A] mb-8">
                  {section.category}
                </h2>
              </ScrollReveal>
              <div className="space-y-6">
                {section.questions.map((item, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 0.08}>
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-bold text-[#0F2D5A] mb-3">{item.q}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.a}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F2D5A] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-[#96C3E1] text-lg mb-8">
              Our team is ready to help. Reach out and we&apos;ll respond within one business day.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#2D69B4] text-white font-semibold rounded-lg hover:bg-[#96C3E1] hover:text-[#0F2D5A] active:opacity-80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-lg"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
