import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import { getAllArticles } from "./lib";

export const metadata: Metadata = {
  title: "Blog | CleanCycleCarbon",
  description:
    "Insights on carbon capture, CO₂ supply chain trends, and CleanCycleCarbon project updates from the team building domestic CO₂ supply.",
  openGraph: {
    title: "Blog | CleanCycleCarbon",
    description:
      "Insights on CO₂ capture, purification, and the beverage grade CO₂ market from the CleanCycleCarbon team.",
    url: "https://cleancyclecarbon.com/blog",
    images: [{ url: "/images/og-preview.jpg", width: 1200, height: 630, alt: "CleanCycleCarbon Blog" }],
  },
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-[#0F2D5A] py-32 sm:py-40 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2D5A]/60 via-transparent to-[#0F2D5A]/80" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <ScrollReveal direction="fade">
            <p className="text-[#96C3E1] text-sm font-semibold uppercase tracking-widest mb-4">
              Blog
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Insights &amp; Updates
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.25}>
            <p className="text-xl sm:text-2xl text-[#96C3E1] max-w-2xl mx-auto leading-relaxed">
              Technical deep dives, industry analysis, and project updates from
              the CleanCycleCarbon team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {articles.length === 0 ? (
            <p className="text-gray-500 text-center text-lg">
              No articles yet. Check back soon.
            </p>
          ) : (
            <div className={`grid grid-cols-1 gap-8 ${articles.length === 1 ? "max-w-lg mx-auto" : articles.length === 2 ? "md:grid-cols-2 max-w-5xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"}`}>
              {articles.map((article, i) => (
                <ScrollReveal key={article.slug} direction="up" delay={i * 0.1}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Card Image */}
                    <div className="relative h-48 bg-[#0F2D5A]/5 overflow-hidden">
                      <Image
                        src={article.heroImage}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#2D69B4] mb-3">
                        {article.category}
                      </span>
                      <h2 className="text-lg font-bold text-[#0F2D5A] mb-2 group-hover:text-[#2D69B4] transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {article.description}
                      </p>
                      <div className="flex items-center text-xs text-gray-400 gap-3">
                        <span>{article.author}</span>
                        <span>&middot;</span>
                        <span>
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span>&middot;</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
