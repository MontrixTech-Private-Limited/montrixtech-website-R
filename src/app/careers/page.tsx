import type { Metadata } from "next";
import CareersPageClient from "./CareersPageClient";

export const metadata: Metadata = {
  title: "Careers at MontrixTech | Software & Technology Internships",
  description:
    "Explore internship opportunities at MontrixTech in engineering, design, marketing and business. Work on real projects with mentorship, hands-on experience and opportunities to grow.",
  alternates: {
    canonical: "https://montrixtech.com/careers",
  },
  openGraph: {
    title: "Careers at MontrixTech | Software & Technology Internships",
    description:
      "Join MontrixTech and work on real software projects with experienced mentors across engineering, design, marketing and business.",
    url: "https://montrixtech.com/careers",
    siteName: "MontrixTech Private Limited",
    type: "website",
    locale: "en_IN",
  },
};

export default function CareersPage() {
  return <CareersPageClient />;
}