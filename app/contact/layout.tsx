import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Partner With CleanCycleCarbon",
  description:
    "Partner with CleanCycleCarbon. We work with CO₂ buyers, industrial site hosts, and investors to develop carbon capture projects across the United States.",
  openGraph: {
    title: "Partner With CleanCycleCarbon",
    description:
      "Contact CleanCycleCarbon to discuss CO₂ supply, investment opportunities, or hosting a capture project at your facility.",
    url: "https://cleancyclecarbon.com/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
