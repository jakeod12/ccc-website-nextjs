import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ScrollReveal from "../../components/ScrollReveal";
import ShareButtons from "../../components/ShareButtons";
import {
  getAllArticles,
  getArticleBySlug,
  type ContentBlock,
} from "../lib";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not Found | CleanCycleCarbon" };

  return {
    title: `${article.title} | CleanCycleCarbon`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://cleancyclecarbon.com/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.heroImage, width: 1200, height: 630, alt: article.title }],
    },
    alternates: { canonical: `/blog/${article.slug}` },
  };
}

const internalLinks: { pattern: RegExp; href: string; }[] = [
  { pattern: /\b(cryogenic purification|our purification technology|patent pending hydrocarbon removal technology|cryogenic CO₂ purification)\b/i, href: "/technology" },
  { pattern: /\b(beverage[ -]grade CO₂|domestic CO₂ supply|domestic supply|food grade CO₂|beverage grade specifications)\b/i, href: "/co2-supply" },
  { pattern: /\b(Lewiston|our first facility|first commercial facility)\b/i, href: "/projects" },
];

function autoLinkText(text: string): React.ReactNode[] {
  const usedHrefs = new Set<string>();
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let earliestMatch: { index: number; length: number; href: string; matched: string } | null = null;

    for (const { pattern, href } of internalLinks) {
      if (usedHrefs.has(href)) continue;
      const match = remaining.match(pattern);
      if (match && match.index !== undefined) {
        if (!earliestMatch || match.index < earliestMatch.index) {
          earliestMatch = { index: match.index, length: match[0].length, href, matched: match[0] };
        }
      }
    }

    if (!earliestMatch) {
      parts.push(remaining);
      break;
    }

    if (earliestMatch.index > 0) {
      parts.push(remaining.slice(0, earliestMatch.index));
    }
    parts.push(
      <Link key={key++} href={earliestMatch.href} className="text-[#2D69B4] hover:underline">
        {earliestMatch.matched}
      </Link>
    );
    usedHrefs.add(earliestMatch.href);
    remaining = remaining.slice(earliestMatch.index + earliestMatch.length);
  }

  return parts;
}

function renderBlock(block: ContentBlock, idx: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={idx} className="text-gray-700 leading-relaxed mb-6">
          {autoLinkText(block.text)}
        </p>
      );
    case "heading":
      if (block.level === 3) {
        return (
          <h3 key={idx} className="text-xl font-bold text-[#0F2D5A] mt-10 mb-4">
            {block.text}
          </h3>
        );
      }
      return (
        <h2 key={idx} className="text-2xl font-bold text-[#0F2D5A] mt-12 mb-4">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <ul key={idx} className="list-disc list-inside text-gray-700 mb-6 space-y-2 pl-2">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="border-l-4 border-[#2D69B4] pl-6 italic text-gray-600 my-8"
        >
          {block.text}
        </blockquote>
      );
    default:
      return null;
  }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const allArticles = getAllArticles();
  const related = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: `https://cleancyclecarbon.com${article.heroImage}`,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: "Vice President",
      worksFor: {
        "@type": "Organization",
        name: "CleanCycleCarbon",
        url: "https://cleancyclecarbon.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "CleanCycleCarbon",
      url: "https://cleancyclecarbon.com",
    },
    mainEntityOfPage: `https://cleancyclecarbon.com/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-[#0F2D5A] pt-32 pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal direction="up">
              <Link
                href="/blog"
                className="inline-flex items-center text-[#96C3E1]/70 hover:text-[#96C3E1] text-sm mb-6 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Blog
              </Link>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#96C3E1] mb-4">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center text-sm text-[#96C3E1]/70 gap-3">
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
            </ScrollReveal>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal direction="fade" delay={0.1}>
              <article className="prose-lg">
                {article.content.map((block, i) => renderBlock(block, i))}
              </article>
            </ScrollReveal>

            {/* Author Bio */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="mt-16 pt-10 border-t border-gray-200">
                <div className="flex items-start gap-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#0F2D5A]/10">
                    <Image
                      src="/images/jake-odonnell.jpg"
                      alt="Jake O'Donnell"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#0F2D5A] text-lg">
                      Jake O&apos;Donnell
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      Vice President at CleanCycleCarbon
                    </p>
                    <p className="text-sm text-gray-600">
                      Mechanical engineer focused on maximizing operational
                      efficiencies and driving technical execution at
                      CleanCycleCarbon&apos;s commercial scale CO₂ capture
                      facilities.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Share */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-sm font-semibold text-[#0F2D5A] mb-3">Share this article</p>
                <ShareButtons
                  title={article.title}
                  url={`https://cleancyclecarbon.com/blog/${article.slug}`}
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal direction="up">
                <h2 className="text-2xl font-bold text-[#0F2D5A] mb-8">
                  More Articles
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((rel, i) => (
                  <ScrollReveal key={rel.slug} direction="up" delay={i * 0.1}>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="group block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative h-48 bg-[#0F2D5A]/5 overflow-hidden">
                        <Image
                          src={rel.heroImage}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#2D69B4] mb-3">
                          {rel.category}
                        </span>
                        <h3 className="text-lg font-bold text-[#0F2D5A] mb-2 group-hover:text-[#2D69B4] transition-colors line-clamp-2">
                          {rel.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {rel.description}
                        </p>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
