import type { Metadata } from "next";
import ApplyPageClient from "./ApplyPageClient";

export const metadata: Metadata = {
  title: "Apply for a Position | MontrixTech Careers",
  description:
    "Apply for an internship or technology role at MontrixTech Private Limited. Submit your application, resume and details for available positions.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://montrixtech.com/careers/apply",
  },
};

export default function ApplyPage() {
  return <ApplyPageClient />;
}