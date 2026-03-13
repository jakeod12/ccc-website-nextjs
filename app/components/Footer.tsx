import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/technology", label: "Technology" },
  { href: "/co2-supply", label: "CO₂ Supply" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F2D5A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/ccc-logo-white.png"
              alt="CleanCycleCarbon"
              width={160}
              height={36}
              className="h-9 w-auto"
            />
            <p className="text-[#96C3E1] text-sm leading-relaxed max-w-xs">
              Carbon capture that works. Operating now.
            </p>
            <div className="h-px w-12 bg-gradient-to-r from-[#2D69B4] to-[#96C3E1] rounded-full" />
            <a
              href="https://www.linkedin.com/company/cleancyclecarbon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#96C3E1]/70 hover:text-[#96C3E1] transition-colors duration-200 mt-2"
              aria-label="CleanCycleCarbon on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm">Follow us</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#96C3E1] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 h-px bg-[#96C3E1] group-hover:w-3 transition-all duration-200 rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#96C3E1] mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@cleancyclecarbon.com"
                  className="text-white/70 hover:text-white transition-colors duration-200 inline-block"
                >
                  info@cleancyclecarbon.com
                </a>
              </li>
              <li>
                <a
                  href="tel:3072640309"
                  className="text-white/70 hover:text-white transition-colors duration-200 inline-block"
                >
                  307-264-0309
                </a>
              </li>
              <li className="text-white/70 text-sm">
                4287 Spruill Avenue, Suite 203, North Charleston, SC 29405
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} CleanCycleCarbon. All rights reserved.
          </p>
          <p className="text-xs text-white/25 tracking-wide">
            Decarbonizing the supply chain.
          </p>
        </div>
      </div>
    </footer>
  );
}
