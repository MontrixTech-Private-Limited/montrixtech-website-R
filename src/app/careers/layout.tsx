import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career with MontrixTech. We're hiring interns across engineering, design, marketing, and business. Real work, real mentorship, and a real path to a full-time offer for strong performers.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers · MontrixTech",
    description:
      "Build your career with a team that ships. Internship roles open across Engineering, Design, Marketing, and Business.",
    url: "https://montrixtech.com/careers",
    type: "website",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
