"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ScrollReveal from "../components/ScrollReveal";

const ROLES = ["Investor", "CO₂ Buyer", "Site Host", "Partner", "Other"] as const;

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    role: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  useEffect(() => {
    const roleParam = searchParams.get("role");
    const emailParam = searchParams.get("email");
    if (roleParam) {
      const match = ROLES.find((r) => r.toLowerCase() === roleParam.toLowerCase());
      if (match) setFormData((prev) => ({ ...prev, role: match }));
    }
    if (emailParam) {
      setFormData((prev) => ({ ...prev, email: emailParam }));
    }
  }, [searchParams]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setResult({ ok: false, message: "Please fill in all required fields." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source_page: "contact" }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult({ ok: true, message: "Thank you! We'll be in touch shortly." });
        setFormData({ name: "", email: "", company: "", phone: "", role: "", message: "" });
      } else {
        setResult({ ok: false, message: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setResult({ ok: false, message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D69B4] focus:border-transparent transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#0F2D5A] mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#0F2D5A] mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[#0F2D5A] mb-2">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#0F2D5A] mb-2">
            Phone <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-semibold text-[#0F2D5A] mb-2">
          I am a... <span className="text-red-500">*</span>
        </label>
        <select
          id="role"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select your role *</option>
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#0F2D5A] mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your interest in CleanCycleCarbon..."
          className={inputClass + " resize-none"}
        />
      </div>

      {result && (
        <div
          role="alert"
          aria-live="polite"
          className={`p-4 rounded-lg text-sm font-medium ${
            result.ok
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {result.message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto px-10 py-4 bg-[#0F2D5A] text-white font-semibold rounded-lg hover:bg-[#2D69B4] active:opacity-80 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

function ContactFormSkeleton() {
  const barClass = "h-12 rounded-lg bg-gray-200 animate-pulse";
  return (
    <div className="space-y-6" aria-label="Loading contact form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className={barClass} />
        <div className={barClass} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className={barClass} />
        <div className={barClass} />
      </div>
      <div className={barClass} />
      <div className="h-32 rounded-lg bg-gray-200 animate-pulse" />
      <div className="h-12 w-40 rounded-lg bg-gray-200 animate-pulse" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-32 sm:py-40 bg-[#0F2D5A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5A]/60 via-transparent to-[#0F2D5A]/80" />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D69B4]/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#96C3E1]/8 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal direction="fade">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Get in Touch
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <p className="text-xl sm:text-2xl text-[#96C3E1] max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re exploring CO₂ supply, evaluating a host site, or interested in investing, we&apos;d like to hear from you.
            </p>
            <p className="mt-4 text-[#96C3E1]/70 text-sm">
              Have a quick question? Check our <a href="/faq" className="underline hover:text-white transition-colors">FAQ</a> first.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-lg ring-1 ring-gray-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2D5A] mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will respond within one business day.</p>
              <noscript>
                <div className="p-4 rounded-lg bg-blue-50 text-[#0F2D5A] text-sm border border-blue-200">
                  This form requires JavaScript. Please email us directly at{" "}
                  <a href="mailto:info@cleancyclecarbon.com" className="text-[#2D69B4] underline">info@cleancyclecarbon.com</a>.
                </div>
              </noscript>
              <Suspense fallback={<ContactFormSkeleton />}>
                <ContactForm />
              </Suspense>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                label: "Email",
                value: "info@cleancyclecarbon.com",
                href: "mailto:info@cleancyclecarbon.com",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                label: "Phone",
                value: "(307) 264-0309",
                href: "tel:+13072640309",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                label: "Location",
                value: "North Charleston, SC",
                href: null,
              },
            ].map((card, i) => (
              <ScrollReveal key={card.label} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F2D5A]/5 text-[#2D69B4] mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2D5A] mb-2">{card.label}</h3>
                  {card.href ? (
                    <a href={card.href} className="text-[#2D69B4] hover:text-[#0F2D5A] transition-colors font-medium">
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 font-medium">{card.value}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative py-28 sm:py-32 bg-[#0F2D5A] text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#2D69B4]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#96C3E1]/8 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="fade">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let&apos;s Build Something Together
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xl text-[#96C3E1] leading-relaxed">
              CleanCycleCarbon is actively developing new CO₂ capture projects across the United States. If you have a site, a need for CO₂, or capital to deploy, we want to talk.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
