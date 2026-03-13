import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "About | CleanCycleCarbon",
  description:
    "CleanCycleCarbon is an independent carbon capture and CO₂ purification company. We own our technology and operate commercial-scale capture facilities.",
  openGraph: {
    title: "Built from the Ground Up | CleanCycleCarbon",
    description:
      "CleanCycleCarbon is an independent technology company. We developed our own process, filed our own patent, and built our own plant. No licensing. No outsourced IP.",
    url: "https://cleancyclecarbon.com/about",
    images: [{ url: "/images/team-bg.jpg", width: 1200, height: 630, alt: "CleanCycleCarbon Team" }],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CleanCycleCarbon",
  url: "https://cleancyclecarbon.com",
  description:
    "CleanCycleCarbon is an independent carbon capture and CO₂ purification company that owns its technology and operates commercial-scale capture facilities.",
  foundingLocation: "United States",
  member: [
    {
      "@type": "Person",
      name: "Erica Chase",
      jobTitle: "President",
      description: "Leads CleanCycleCarbon as President, overseeing strategic growth and project development.",
    },
    {
      "@type": "Person",
      name: "Jake O'Donnell",
      jobTitle: "Vice President",
      description: "Mechanical engineer focused on maximizing operational efficiencies and driving technical execution.",
    },
    {
      "@type": "Person",
      name: "Hector Cumba",
      jobTitle: "Director of Process Design",
      description: "Innovator in biosystems and process engineering who led engineering and process design for the CO₂ capture system.",
    },
    {
      "@type": "Person",
      name: "Becky Atkinson",
      jobTitle: "Commercial Director",
      description: "Environmental sustainability leader with over 25 years of industry and consulting experience.",
    },
    {
      "@type": "Person",
      name: "Griff Walker",
      jobTitle: "Business Development Manager",
      description: "Supports sales, marketing, procurement, and CO₂ operations at the Lewiston facility.",
    },
    {
      "@type": "Person",
      name: "Marc Fetten",
      jobTitle: "Board Member",
      description: "Entrepreneur and investor with 25 years of experience in energy, industrial, and infrastructure platforms.",
    },
    {
      "@type": "Person",
      name: "Dennis Shanklin",
      jobTitle: "Board Member",
      description: "Over 30 years of experience in environmental challenges, civil engineering, and bioenergy technologies.",
    },
    {
      "@type": "Person",
      name: "Paul Raffle",
      jobTitle: "Board Member",
      description: "Oversees financial operations and acquisition strategies with a global background in finance.",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* HERO */}
      <section className="relative py-32 sm:py-40 bg-[#0F2D5A] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/team-bg.jpg"
            alt="CleanCycleCarbon team and company background"
            fill
            className="object-cover"
          />
        </div>
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5A]/60 via-transparent to-[#0F2D5A]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="fade">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Built from the Ground Up
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-xl sm:text-2xl text-[#96C3E1] max-w-2xl mx-auto leading-relaxed">
              CleanCycleCarbon is an independent technology company. We developed our own process, filed our own patent, and built our own plant. No licensing. No outsourced IP.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CCC EXISTS */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] mb-8">
              The Market Needed a New Kind of Supplier
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                The CO₂ market has a structural vulnerability. Supply is concentrated. Buyers have little alternative when supply tightens. And billions of pounds of CO₂ are emitted every year from industrial facilities that could be captured and sold instead of vented.
              </p>
              <p>
                CleanCycleCarbon was founded to close that gap. We identified the technical opportunity, built a process to capture and purify CO₂ from distributed industrial sources, and proved it works at commercial scale. The business exists because the market problem is real and the technology solution is real.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="relative py-24 overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/facility.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/about-facility.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0F2D5A]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/facility-golden-hour.jpg"
                  alt="CleanCycleCarbon operates commercial CO₂ capture facilities"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5A]/30 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">How We Operate</h2>
                <div className="space-y-5 text-[#96C3E1] text-lg leading-relaxed">
                  <p>
                    CleanCycleCarbon develops, builds, and operates on-site CO₂ capture and purification facilities at industrial host locations. We source emissions, engineer the capture system, install and commission the plant, and run ongoing operations. We supply purified CO₂ through established distribution partners to commercial end users.
                  </p>
                  <p>
                    We are not a consulting firm. We are not a technology licensor. We are an operator. We own the asset, run the plant, and supply the product through distribution partners.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] text-center mb-16">Leadership</h2>
          </ScrollReveal>
          <div className="space-y-12">
            {[
              {
                name: "Erica Chase, PE",
                title: "President",
                img: "/images/erica-chase.jpg",
                bio: "Erica leads CleanCycleCarbon as President, overseeing strategic growth and project development. She led the planning and execution of the Lewiston Carbon Capture facility, guiding its transformation into a commercial-scale CO₂ recovery operation. With nearly two decades of experience at Stantec prior to joining EFI in 2022, Erica brings deep expertise in infrastructure planning, cross-disciplinary leadership, and delivering large-scale environmental projects.",
              },
              {
                name: "Jake O'Donnell",
                title: "Vice President",
                img: "/images/jake-odonnell.jpg",
                bio: "Jake is a mechanical engineer with a keen focus on maximizing operational efficiencies. At CleanCycleCarbon, he assisted with the redesign and commissioning of the Lewiston CO₂ capture facility, optimizing system performance and reliability. Jake is listed as an inventor on the patent for CleanCycle's carbon capture technology. He plays a key role in driving technical execution and business development across CleanCycle's projects.",
              },
              {
                name: "Hector Cumba, PhD",
                title: "Director of Process Design",
                img: "/images/hector-cumba.jpg",
                bio: "Dr. Cumba is a recognized innovator in biosystems and process engineering, with a track record of developing cutting-edge environmental technologies. He led the engineering and process design for CleanCycleCarbon's CO₂ capture system and is an inventor on the system's patent. An EFI team member since 2008, Hector has authored multiple white papers within the biogas and agricultural industries. His technical leadership continues to shape CleanCycleCarbon's innovation and project success.",
              },
              {
                name: "Becky Atkinson",
                title: "Commercial Director",
                img: "/images/becky-atkinson.jpg",
                bio: "Becky is an environmental sustainability leader with over 25 years of combined industry and consulting experience. She held prior roles at ERM, Volvo, and most recently as President of GreenGasUSA. Becky is an expert in carbon capture and accounting, biogas and renewable natural gas development, decarbonization strategies, and corporate sustainability planning. She has led initiatives across agriculture and wastewater sectors.",
              },
              {
                name: "Griff Walker",
                title: "Business Development Manager",
                img: "/images/griff-walker.jpg",
                bio: "Griff joined CleanCycleCarbon in 2024, supporting sales, marketing, and procurement. He also plays a key role on the cross-functional operations team overseeing CO₂ production at the Lewiston facility.",
              },
            ].map((person, i) => (
              <ScrollReveal key={person.name} direction="up" delay={i * 0.1}>
                <div className="group bg-white rounded-2xl shadow-lg ring-1 ring-gray-100 overflow-hidden flex flex-col sm:flex-row transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative w-full sm:w-64 h-72 sm:h-auto flex-shrink-0 overflow-hidden">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      style={
                        person.name === "Griff Walker" ? { objectPosition: "center 35%" } : undefined
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5A]/20 to-transparent sm:bg-gradient-to-r" />
                  </div>
                  <div className="p-8 sm:p-10">
                    <h3 className="text-2xl font-bold text-[#0F2D5A] mb-1">{person.name}</h3>
                    <p className="text-[#2D69B4] font-semibold mb-4 text-lg">{person.title}</p>
                    <p className="text-gray-600 leading-relaxed">{person.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD OF DIRECTORS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D5A] text-center mb-16">Board of Directors</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marc Fetten",
                title: "Board Member",
                img: "/images/marc-fetten.png",
                bio: "Marc is an entrepreneur and investor with 25 years of experience in building, scaling, and aggregating energy, industrial, and infrastructure platforms. He is the Founder and Shareholder of GreenGasUSA, Founder of CleanCycleCarbon, and Owner of EFI USA. Marc has held global leadership roles in finance and operations in Europe, Asia, and the Americas.",
              },
              {
                name: "Dennis Shanklin",
                title: "Board Member",
                img: "/images/dennis-shanklin.webp",
                bio: "Dennis has over 30 years of experience solving some of the most complex environmental challenges. He is also a veteran of the US Navy. Shanklin founded Environmental Fabrics Inc in 1993, and built extensive expertise in civil engineering, environmental construction, and product manufacturing. For over 30 years, Dennis and EFI have led the industry in containment and bioenergy technologies.",
              },
              {
                name: "Paul Raffle",
                title: "Board Member",
                img: "/images/paul-raffle.webp",
                bio: "Paul oversees all aspects of CleanCycleCarbon's financial operations and acquisition strategies. With a global background in finance and operations, Paul plays a key role in supporting the ownership group and executive management. Paul began his career at PricewaterhouseCoopers in the UK, leading audit, corporate finance, and transactional support assignments across Europe, the U.S., and Africa.",
              },
            ].map((person, i) => (
              <ScrollReveal key={person.name} direction="up" delay={i * 0.1}>
                <div className="group bg-white rounded-2xl shadow-md ring-1 ring-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={person.img}
                      alt={person.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      style={
                        person.name === "Dennis Shanklin"
                          ? { objectPosition: "center 35%" }
                          : person.name === "Paul Raffle"
                          ? { objectPosition: "center 55%" }
                          : undefined
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D5A]/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0F2D5A] mb-1">{person.name}</h3>
                    <p className="text-[#2D69B4] font-semibold mb-3 text-sm">{person.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{person.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative py-28 sm:py-32 bg-[#0F2D5A] text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#2D69B4]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#96C3E1]/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="fade">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2D69B4]/20 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#96C3E1]/40" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">The Mission</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xl sm:text-2xl text-[#96C3E1] leading-relaxed font-light">
              Turn industrial CO₂ emissions into a certified, commercial product. Build a domestic CO₂ supply chain that is resilient, local, and certified. Do it with technology we own and operations we control.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2D5A] mb-6">Ready to work with us?</h2>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#0F2D5A] text-white font-semibold rounded-lg hover:bg-[#2D69B4] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
