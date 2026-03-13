"use client";

export interface LinkedInPost {
  type: "personal" | "company";
  title: string;
  excerpt: string;
  date: string;
  url: string;
  impressions: number;
  reactions: number;
}

function formatNumber(n: number): string {
  if (n >= 1000) {
    const k = n / 1000;
    return k % 1 === 0 ? `${k}K` : `${k.toFixed(1)}K`;
  }
  return n.toString();
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

export default function LinkedInFeed({ posts }: { posts: LinkedInPost[] }) {
  const sorted = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {sorted.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-sm border border-[#2D69B4]/30 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-[#96C3E1]/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F2D5A]/50 flex flex-col"
          >
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <LinkedInIcon className="w-6 h-6 text-[#96C3E1]" />
              <span
                className={`text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${
                  post.type === "personal"
                    ? "bg-[#2D69B4]/20 text-[#96C3E1]"
                    : "bg-[#96C3E1]/20 text-[#96C3E1]"
                }`}
              >
                {post.type === "personal" ? "Personal" : "Company"}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#96C3E1] transition-colors duration-300">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[#96C3E1]/80 text-sm leading-relaxed mb-6 flex-grow">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-[#96C3E1]/60 pt-4 border-t border-[#2D69B4]/20">
              <span>{formatDate(post.date)}</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <EyeIcon className="w-3.5 h-3.5" />
                  {formatNumber(post.impressions)}
                </span>
                <span className="flex items-center gap-1">
                  <HeartIcon className="w-3.5 h-3.5" />
                  {formatNumber(post.reactions)}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://www.linkedin.com/company/cleancyclecarbon/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2D69B4] text-white font-semibold rounded hover:bg-[#96C3E1] hover:text-[#0F2D5A] transition-all duration-300 hover:shadow-lg hover:shadow-[#2D69B4]/30"
        >
          <LinkedInIcon className="w-5 h-5" />
          Follow CleanCycleCarbon
        </a>
        <a
          href="https://www.linkedin.com/in/jake-o-donnell-80a6ab136/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded hover:bg-white hover:text-[#0F2D5A] transition-all duration-300 text-sm"
        >
          <LinkedInIcon className="w-4 h-4" />
          Connect with Jake O&apos;Donnell
        </a>
      </div>
    </div>
  );
}
