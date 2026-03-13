import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cleancyclecarbon.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/technology`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/co2-supply`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  let blogPages: MetadataRoute.Sitemap = [];
  const blogDir = path.join(process.cwd(), "content", "blog");

  try {
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".json"));
      blogPages = files.map((file) => {
        const data = JSON.parse(fs.readFileSync(path.join(blogDir, file), "utf-8"));
        return {
          url: `${baseUrl}/blog/${data.slug}`,
          lastModified: data.date ? new Date(data.date) : new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        };
      });
    }
  } catch {
    // If blog directory doesn't exist or files can't be read, return empty
  }

  return [...staticPages, ...blogPages];
}
