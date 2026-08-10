import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MontrixTech Private Limited. Share a brief, a budget range, or just a problem you're trying to solve — we usually reply within a working day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · MontrixTech",
    description:
      "Let's discuss your next project. We reply within a working day.",
    url: "https://montrixtech.in/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
