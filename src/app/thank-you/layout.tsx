import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting MontrixTech Private Limited. Our team has received your enquiry and will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
