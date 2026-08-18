import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/montrix/ScrollToTop";
import BackToTop from "@/components/montrix/BackToTop";
import PageTransition from "@/components/montrix/PageTransition";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://montrixtech.com"),

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  title: {
    default: "MontrixTech — Software Development Company",
    template: "%s · MontrixTech",
  },

  description:
    "MontrixTech Private Limited is a software development company offering web development, mobile app development, cloud solutions, AI solutions and custom software development.",

  keywords: [
    "MontrixTech",
    "MontrixTech Private Limited",
    "software development company",
    "web development company",
    "mobile app development",
    "custom software development",
    "cloud solutions",
    "AI solutions",
    "software company Bangalore",
    "IT company Bangalore",
  ],

  authors: [
    {
      name: "MontrixTech Private Limited",
    },
  ],

  creator: "MontrixTech Private Limited",
  publisher: "MontrixTech Private Limited",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://montrixtech.com",
    siteName: "MontrixTech Private Limited",
    title: "MontrixTech Private Limited | Software & IT Solutions",
    description:
      "Web, mobile, cloud, AI and custom software solutions for businesses.",
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
    title: "MontrixTech Private Limited | Software & IT Solutions",
    description:
      "Web, mobile, cloud, AI and custom software solutions for businesses.",
    images: ["/favicon.png"],
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} min-h-screen antialiased`}>
        <OrganizationSchema />

        <ScrollToTop />
        <PageTransition>{children}</PageTransition>
        <BackToTop />
        <Toaster />
      </body>
    </html>
  );
}