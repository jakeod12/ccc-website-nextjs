import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import { getAllArticles } from "./lib";

export const metadata: Metadata = {
  title: "Blog | CleanCycleCarbon",
  description:
    "Insights on CO₂ capture, purification, and the beverage grade CO₂ market from the CleanCycleCarbon team.",
  openGraph: {
    title: "Blog | CleanCycleCarbon",
    description:
      "Insights on CO₂ capture, purification, and the beverage grade CO₂ market from the CleanCycleCarbon team.",
    url: "https://cleancyclecarbon.com/blog",
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0F2D5A] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <p className="text-[#96C3E1] text-sm font-semibold uppercase tracking-widest mb-4">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Insights &amp; Updates
            </h1>
            <p className="text-lg text-[#96C3E1]/80 max-w-2xl">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            month: "short",
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
