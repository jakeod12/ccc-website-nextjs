import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Partner With CleanCycleCarbon",
  description:
    "Get in touch with CleanCycleCarbon. Whether you're an investor, CO₂ buyer, or potential site host, we'd like to hear from you.",
  openGraph: {
    title: "Partner With CleanCycleCarbon",
    description:
      "Contact CleanCycleCarbon to discuss CO₂ supply, investment opportunities, or hosting a capture project at your facility.",
    url: "https://cleancyclecarbon.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
