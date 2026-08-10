import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MontrixTech Private Limited is a modern software company based in Bengaluru. We help startups, growing businesses, and enterprises ship real products across web, mobile, cloud, and AI.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About MontrixTech",
    description:
      "A modern software company building web, mobile, cloud, and AI products — without the agency theatre.",
    url: "https://montrixtech.in/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
