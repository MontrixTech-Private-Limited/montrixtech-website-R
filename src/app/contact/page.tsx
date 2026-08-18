import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact MontrixTech | Software Development Company in Bangalore",
  description:
    "Contact MontrixTech Private Limited for web development, mobile apps, custom software, cloud, AI solutions and technology workshops. Get in touch with our Bengaluru team.",
  alternates: {
    canonical: "https://montrixtech.com/contact",
  },
  openGraph: {
    title: "Contact MontrixTech | Software Development Company in Bangalore",
    description:
      "Get in touch with MontrixTech Private Limited for software development, mobile apps, cloud, AI solutions and technology workshops.",
    url: "https://montrixtech.com/contact",
    siteName: "MontrixTech Private Limited",
    type: "website",
    locale: "en_IN",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}