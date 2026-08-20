import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
title: "Software Development Services in Bengaluru | MontrixTech",
  description:
    "Explore software development services from MontrixTech Private Limited, including web development, mobile applications, custom software, cloud and AI solutions.",

  alternates: {
    canonical: "https://montrixtech.com/services",
  },

  openGraph: {
title: "Software Development Services in Bengaluru | MontrixTech",
    description:
      "Web, mobile, custom software, cloud and AI solutions from MontrixTech Private Limited.",

    url: "https://montrixtech.com/services",

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

title: "Software Development Services in Bengaluru | MontrixTech",
    description:
      "Web, mobile, custom software, cloud and AI solutions from MontrixTech Private Limited.",

    images: ["/favicon.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}