import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
title: "About MontrixTech Private Limited | Software Company in Bengaluru",
  description:
    "Learn about MontrixTech Private Limited, a Bengaluru-based software company delivering web, mobile, cloud, AI and custom software solutions for startups, businesses and enterprises.",

  alternates: {
    canonical: "https://montrixtech.com/about",
  },

  openGraph: {
title: "About MontrixTech Private Limited | Software Company in Bengaluru",
    description:
      "Learn about MontrixTech, a Bengaluru-based technology company delivering modern web, mobile, cloud, AI and custom software solutions.",

    url: "https://montrixtech.com/about",

    siteName: "MontrixTech Private Limited",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "MontrixTech Private Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About MontrixTech Private Limited | Software Company in Bengaluru",
    

    description:
      "Learn about MontrixTech, a Bengaluru-based technology company delivering modern web, mobile, cloud, AI and custom software solutions.",

    images: ["/favicon.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}