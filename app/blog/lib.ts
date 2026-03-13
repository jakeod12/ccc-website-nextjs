import fs from "fs";
import path from "path";

export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  heroImage: string;
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: number }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllArticles(): BlogArticle[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".json"));

  const articles = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    return JSON.parse(raw) as BlogArticle;
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  const articles = getAllArticles();
  return articles.find((a) => a.slug === slug);
}
