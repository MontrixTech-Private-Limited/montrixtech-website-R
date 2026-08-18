"use client";

import { Suspense, useMemo, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Loader2,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  Briefcase,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/montrix/Navbar";
import Footer from "@/components/montrix/Footer";
import { JOB_OPENINGS, WorkMode } from "@/lib/montrix-data";
const MODE_STYLE: Record<WorkMode, string> = {
  Hybrid: "bg-[#E1F5EE] text-[#085041] border-[#12B8B0]/30",
  "On-site": "bg-[#FFF3E6] text-[#7A4A0E] border-[#E07A5F]/30",
  Remote: "bg-[#EAF1FA] text-[#0A2E57] border-[#0A2E57]/20",
};

function ApplyContent() {
  const router = useRouter();
  const params = useSearchParams();
  const ref = params.get("ref") || "";

  const job = useMemo(
    () => JOB_OPENINGS.find((j) => j.ref === ref),
    [ref]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [portfolio, setPortfolio] = useState("");
  const [why, setWhy] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    if (name.trim().length < 3) return "Please enter your full name (3+ characters).";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email.trim()))
      return "Please enter a valid email address.";
    if (phone.trim().length < 6) return "Please enter a valid phone number.";
    if (!resumeFile) return "Please upload your resume in PDF format.";
    if (resumeFile.type !== "application/pdf") return "Resume must be a PDF file.";
    if (resumeFile.size > 5 * 1024 * 1024) return "Resume PDF must be 5 MB or smaller.";
    if (why.trim().length < 20) return "Tell us a bit more — minimum 20 characters.";
    return null;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("phone", phone.trim());
      formData.append("portfolio", portfolio.trim());
      formData.append("why", why.trim());
      formData.append("role", job?.title || "General application");
      formData.append("ref", ref);
      if (resumeFile) {
        formData.append("resume", resumeFile, resumeFile.name);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to submit your application.");
      }
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Something went wrong submitting your application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <SuccessState role={job?.title || "the role"} onRestart={() => router.push("/careers")} />;
  }

  return (
    <main className="relative flex-1 flex flex-col mesh-bg">
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />

        <section className="container-premium pt-12 pb-8 lg:pt-16 lg:pb-10">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-sm text-[#5F5E5A] hover:text-[#0A2E57] transition-colors mb-6"
          >
            <ArrowLeft size={15} />
            Back to all roles
          </Link>

          {/* Role context card */}
          {job ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-cream-400 bg-cream-50 p-6 lg:p-6 mb-8"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-mono text-[#12B8B0] tracking-wider">
                      {job.ref}
                    </span>
                    <span className={`pill text-[10px] !py-0.5 !px-2 border ${MODE_STYLE[job.mode]}`}>
                      {job.mode}
                    </span>
                  </div>
                  <h1 className="type-display text-3xl lg:text-4xl text-[#0A2E57] text-balance">
                    Apply for {job.title}
                  </h1>
                  <p className="mt-2 text-[#5F5E5A] text-sm max-w-xl">{job.description}</p>
                </div>
                <div className="flex flex-col gap-2 text-xs text-[#888780]">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {job.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={13} /> Internship
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-cream-400 bg-cream-50 p-6 lg:p-6 mb-8"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-[#E07A5F] mt-0.5 shrink-0" />
                <div>
                  <h1 className="type-display text-2xl lg:text-3xl text-[#0A2E57]">
                    No role selected
                  </h1>
                  <p className="mt-2 text-[#5F5E5A] text-sm">
                    We couldn't find a role for the reference{" "}
                    <code className="font-mono text-[#12B8B0]">{ref || "(none)"}</code>. You can
                    still submit a general application below, or{" "}
                    <Link href="/careers" className="text-[#12B8B0] hover:underline">
                      browse all open positions
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={onSubmit}
            className="rounded-2xl border border-cream-400 bg-cream-50 p-7 lg:p-9"
          >
            <h2 className="type-h2 text-2xl text-[#0A2E57] mb-6">Your application</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Full name *">
                <input
                  type="text"
                  value={name}
                  maxLength={60}
                  onChange={(e) => setName(e.target.value)}
                  className={inputCls}
                />
              </Field>
              <Field label="Email *">
                <input
                  type="email"
                  value={email}
                  maxLength={100}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputCls}
                />
              </Field>
              <Field label="Phone *">
                <input
                  type="tel"
                  value={phone}
                  maxLength={20}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputCls}
                />
              </Field>
              <div>
                <label
                  htmlFor="resume"
                  className="mb-2 block text-xs font-medium text-[#0A2E57] uppercase tracking-wide"
                >
                  RESUME / CV *
                </label>

                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept="application/pdf,.pdf"
                  required
                  onChange={(e) => {
                    const file = e.target.files?.[0] ?? null;

                    if (!file) {
                      setResumeFile(null);
                      return;
                    }

                    if (file.type !== "application/pdf") {
                      setResumeFile(null);
                      e.target.value = "";
                      setError("Please upload your resume as a PDF file.");
                      return;
                    }

                    if (file.size > 5 * 1024 * 1024) {
                      setResumeFile(null);
                      e.target.value = "";
                      setError("Resume PDF must be 5 MB or smaller.");
                      return;
                    }

                    setError(null);
                    setResumeFile(file);
                  }}
                  className="block w-full cursor-pointer rounded-lg border border-cream-400 bg-cream-100 px-4 py-3 text-sm text-[#5F5E5A] file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#12B8B0] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-[#0FA7A0]"
                />

                <p className="mt-2 text-xs text-[#888780]">
                  PDF only · Maximum size 5 MB
                </p>

                {resumeFile && (
                  <p className="mt-2 truncate text-sm font-medium text-[#0A2E57]" title={resumeFile.name}>
                    Selected: {resumeFile.name}
                  </p>
                )}
              </div>
              <Field label="LinkedIn / portfolio (optional)" className="md:col-span-2">
                <input
                  type="url"
                  value={portfolio}
                  maxLength={300}
                  onChange={(e) => setPortfolio(e.target.value)}
                  className={inputCls}
                />
              </Field>
              <Field
                label={`Why this role? * (${why.length}/500)`}
                className="md:col-span-2"
              >
                <textarea
                  rows={6}
                  value={why}
                  maxLength={500}
                  onChange={(e) => setWhy(e.target.value)}
                  className={`${inputCls} resize-none`}
                />
              </Field>
            </div>

            {error && (
              <div className="mt-5 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-cream-400">
              <p className="text-xs text-[#888780]">
                By submitting, you agree to be contacted about this role. We don't share your data.
              </p>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit application
                    <Send size={15} strokeWidth={2.2} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </section>

        <Footer />
      </div>
    </main>
  );
}

const inputCls =
  "w-full rounded-lg border border-cream-400 bg-cream-100 px-4 py-3 text-sm text-[#0A2E57] placeholder:text-[#888780] focus:outline-none focus:ring-2 focus:ring-[#12B8B0]/40 focus:border-[#12B8B0] transition-colors";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-medium text-[#0A2E57] uppercase tracking-wide mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}

function SuccessState({ role, onRestart }: { role: string; onRestart: () => void }) {
  return (
    <main className="relative flex-1 flex flex-col mesh-bg">
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />
        <section className="container-premium flex-1 flex items-center justify-center py-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl w-full text-center"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#12B8B0]/15 text-[#12B8B0] mb-6"
            >
              <CheckCircle2 size={32} strokeWidth={1.8} />
            </motion.div>
            <h1 className="type-display text-3xl lg:text-4xl text-[#0A2E57] mb-3 text-balance">
              Application received.
            </h1>
            <p className="text-[#5F5E5A] leading-7 mb-8">
              Thanks for applying for <span className="text-[#0A2E57] font-medium">{role}</span>.
              Our team will review your application and reach out if there's a fit.
              We move quickly — expect to hear from us soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onRestart}
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium"
              >
                Back to all roles
                <ArrowRight size={16} strokeWidth={2.2} />
              </button>
              <Link
                href="/"
                className="btn-outline inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium"
              >
                Back to home
              </Link>
            </div>
          </motion.div>
        </section>
        <Footer />
      </div>
    </main>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ApplyContent />
    </Suspense>
  );
}