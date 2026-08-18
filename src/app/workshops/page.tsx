import type { Metadata } from "next";
import WorkshopsPageClient from "./WorkshopsPageClient";

export const metadata: Metadata = {
  title: "Technology Workshops & Bootcamps | MontrixTech",
  description:
    "Industry-focused technology workshops and bootcamps by MontrixTech for schools, colleges and institutions, covering programming, software development, AI, cloud and modern technologies.",
  alternates: {
    canonical: "https://montrixtech.com/workshops",
  },
  openGraph: {
    title: "Technology Workshops & Bootcamps | MontrixTech",
    description:
      "Hands-on technology workshops for schools, colleges and institutions, delivered by engineers with real-world software development experience.",
    url: "https://montrixtech.com/workshops",
    siteName: "MontrixTech Private Limited",
    type: "website",
    locale: "en_IN",
  },
};

export default function WorkshopsPage() {
  return <WorkshopsPageClient />;
}