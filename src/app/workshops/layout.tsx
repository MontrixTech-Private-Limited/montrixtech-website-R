import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Industry-focused workshops for schools, colleges and institutions. Six tracks from Class 1 to engineering — Python, web, mobile, AI, IoT, cloud, and more. Real mentors, real projects, certification.",
  alternates: { canonical: "/workshops" },
  openGraph: {
    title: "Workshops · MontrixTech",
    description:
      "Empowering the next generation through technology. Workshops for schools, colleges and institutions across six tracks.",
    url: "https://montrixtech.in/workshops",
    type: "website",
  },
};

export default function WorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
