"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";
import Navbar from "@/components/montrix/Navbar";
import Footer from "@/components/montrix/Footer";

export default function ThankYouPage() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => router.push("/"), 8000);
    return () => clearTimeout(timeout);
  }, [router]);
  const goHomeNow = () => router.push("/");

  return (
    <main className="relative flex min-h-screen flex-col mesh-bg">
      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />
        <button onClick={goHomeNow} aria-label="Close and return home" className="fixed right-4 top-24 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-400 bg-cream-50 text-[#5F5E5A] shadow-sm transition-colors hover:border-[#0A2E57] hover:bg-[#0A2E57] hover:text-white lg:right-8"><X size={18} /></button>
        <section className="container-premium flex flex-1 items-center justify-center py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-xl text-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#12B8B0]/15 text-[#12B8B0]"><CheckCircle2 size={40} strokeWidth={1.8} /></div>
            <h1 className="type-display mb-4 text-3xl text-[#0A2E57] text-balance lg:text-4xl">Thank you for contacting MontrixTech Private Limited.</h1>
            <p className="mb-2 leading-7 text-[#5F5E5A]">Our team has received your enquiry.</p>
            <p className="mb-7 leading-7 text-[#5F5E5A]">We will get in touch with you shortly.</p>
            <p className="mb-7 text-sm text-[#888780]">You will be returned to the home page shortly.</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <button onClick={goHomeNow} className="btn-primary inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-medium">Go to Home now</button>
              <Link href="/contact" className="btn-outline inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-medium">Send another message</Link>
            </div>
          </motion.div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
