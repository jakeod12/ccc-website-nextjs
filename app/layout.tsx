import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleancyclecarbon.com"),
  title: {
    default: "CleanCycleCarbon ⚡ Carbon Capture, Operating Now",
    template: "%s | CleanCycleCarbon",
  },
  description:
    "CleanCycleCarbon captures and purifies industrial CO₂ emissions to FDA-registered, beverage-grade quality. Commercial scale. Operating now.",
  keywords: [
    "CO₂ capture",
    "carbon capture",
    "beverage grade CO₂",
    "food grade CO₂",
    "renewable natural gas",
    "RNG",
    "CO₂ purification",
    "industrial CO₂",
    "carbon recycling",
    "CleanCycleCarbon",
  ],
  openGraph: {
    siteName: "CleanCycleCarbon",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "CleanCycleCarbon - CO₂ Capture & Purification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-preview.jpg"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} style={{ scrollBehavior: "smooth" }}>
      <body className="antialiased">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
