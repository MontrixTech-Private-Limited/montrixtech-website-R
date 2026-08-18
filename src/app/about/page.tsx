import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About MontrixTech Private Limited | Software Company in Bangalore",
  description:
    "Learn about MontrixTech Private Limited, a Bengaluru-based software company delivering web, mobile, cloud, AI and custom software solutions for startups, businesses and enterprises.",
  alternates: {
    canonical: "https://montrixtech.com/about",
  },
  openGraph: {
    title: "About MontrixTech Private Limited | Software Company in Bangalore",
    description:
      "Learn about MontrixTech, a Bengaluru-based technology company delivering modern web, mobile, cloud, AI and custom software solutions.",
    url: "https://montrixtech.com/about",
    siteName: "MontrixTech Private Limited",
    type: "website",
    locale: "en_IN",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}