import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six core service lines from MontrixTech: web development, mobile apps, custom software, cloud solutions, AI solutions, and UI/UX design — built to be combined or delivered standalone.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · MontrixTech",
    description:
      "End-to-end digital transformation under one roof — web, mobile, cloud, AI, and design.",
    url: "https://montrixtech.com/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
