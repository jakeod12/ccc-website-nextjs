"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/technology", label: "Technology" },
  { href: "/co2-supply", label: "CO₂ Supply" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const mobileNavLinks = [
  ...navLinks,
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F2D5A]/95 backdrop-blur-md shadow-lg"
          : "bg-[#0F2D5A]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/ccc-logo-white.png"
              alt="CleanCycleCarbon Logo"
              width={180}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium relative group px-2 py-2 transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#96C3E1]"
                    : "text-white hover:text-[#96C3E1]"
                }`}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#96C3E1] transition-all duration-200 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 bg-[#2D69B4] text-white text-sm font-semibold rounded hover:bg-[#96C3E1] hover:text-[#0F2D5A] transition-all duration-200 hover:shadow-md hover:shadow-[#96C3E1]/20"
            >
              Partner With Us
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-3 rounded hover:bg-white/10 active:opacity-80 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.path
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <motion.path
                    key="open"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </AnimatePresence>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu with framer-motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden bg-[#0F2D5A]/98 backdrop-blur-md border-t border-[#2D69B4]/40"
          >
            <div className="px-4 pb-4 pt-2">
              {mobileNavLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center min-h-[44px] py-3 text-base font-medium border-b border-[#2D69B4]/20 transition-colors ${
                      pathname === link.href
                        ? "text-[#96C3E1]"
                        : "text-white hover:text-[#96C3E1]"
                    }`}
                  >
                    {pathname === link.href && (
                      <span className="mr-2 w-1 h-4 rounded-full bg-[#96C3E1] inline-block" />
                    )}
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: mobileNavLinks.length * 0.05 + 0.08 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 bg-[#2D69B4] text-white text-base font-semibold rounded text-center hover:bg-[#96C3E1] hover:text-[#0F2D5A] active:opacity-80 transition-all"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
