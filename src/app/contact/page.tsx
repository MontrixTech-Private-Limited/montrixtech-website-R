"use client";

import {
  useCallback,
  useMemo,
  useState,
  Suspense,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Building2,
  User,
} from "lucide-react";

import Navbar from "@/components/montrix/Navbar";
import Footer from "@/components/montrix/Footer";
import CornerIllustration from "@/components/montrix/CornerIllustration";
import { COMPANY, OFFICES } from "@/lib/montrix-data";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const TOPIC_PRESETS: Record<string, Partial<FormState>> = {
  workshop: {
    message:
      "Hi MontrixTech, I'd like to book a free workshop demo for our institution. Please share availability.",
  },
};

const inputCls = (hasError: boolean) =>
  `w-full rounded-lg border bg-cream-100 pl-9 pr-4 py-3 text-sm text-[#0A2E57] placeholder:text-[#888780] transition-colors focus:outline-none focus:ring-2 focus:ring-[#12B8B0]/40 focus:border-[#12B8B0] ${
    hasError ? "border-red-400" : "border-cream-400"
  }`;

function buildInitialForm(topic: string): FormState {
  return {
    ...EMPTY_FORM,
    ...TOPIC_PRESETS[topic],
  };
}

function validateForm(form: FormState): FormErrors {
  const next: FormErrors = {};
  const { name, email, phone, message } = form;

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();
  const trimmedMessage = message.trim();

  if (trimmedName.length < 3) {
    next.name = "Name must contain at least 3 characters.";
  } else if (trimmedName.length > 50) {
    next.name = "Name cannot exceed 50 characters.";
  }

  if (!trimmedEmail) {
    next.email = "Email is required.";
  } else if (trimmedEmail.length > 100) {
    next.email = "Email cannot exceed 100 characters.";
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(trimmedEmail)) {
    next.email = "Please enter a valid email address.";
  }

  if (trimmedPhone) {
    if (trimmedPhone.length < 7) {
      next.phone = "Phone number seems too short.";
    } else if (!/^[0-9+\-\s()]{7,20}$/.test(trimmedPhone)) {
      next.phone = "Please enter a valid phone number.";
    }
  }

  if (trimmedMessage.length < 20) {
    next.message = "Message must contain at least 20 characters.";
  } else if (trimmedMessage.length > 500) {
    next.message = "Message cannot exceed 500 characters.";
  }

  return next;
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactPageSkeleton />}>
      <ContactPageInner />
    </Suspense>
  );
}

function ContactPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "";

  const [form, setForm] = useState<FormState>(() => buildInitialForm(topic));
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = useCallback(
    (field: keyof FormState) =>
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;

        setForm((current) => ({ ...current, [field]: value }));
        setErrors((current) => ({ ...current, [field]: undefined }));
        setSubmitError(null);
      },
    [],
  );

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitError(null);

      const nextErrors = validateForm(form);
      setErrors(nextErrors);

      if (Object.keys(nextErrors).length > 0) {
        return;
      }

      setLoading(true);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            company: form.company.trim(),
            message: form.message.trim(),
            topic: topic || undefined,
          }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(
            (data && typeof data.error === "string" && data.error) ||
              "Submission failed. Please try again.",
          );
        }

        router.push("/thank-you");
      } catch (err) {
        setSubmitError(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
        );
      } finally {
        setLoading(false);
      }
    },
    [form, router, topic],
  );

  const messageLengthHint = useMemo(
    () => `${form.message.length}/500 · minimum 20`,
    [form.message.length],
  );

  return (
    <main className="relative flex flex-1 flex-col mesh-bg">
      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />

 <section className="relative container-premium pb-8 pt-12 lg:pb-10 lg:pt-16">


   <CornerIllustration
  src="/images/illustrations/version-control.png"
  alt="Contact MontriXTech"
  position="top-right"
  size={300}
  className="!right-6 !top-4"
/>

 


   <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="type-display max-w-4xl text-balance text-[40px] text-[#0A2E57] sm:text-[52px] lg:text-[64px]"
          >
            Let&apos;s discuss your next project.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[#5F5E5A] md:text-lg"
          >
            Share a brief, a budget range, or just a problem you&apos;re trying to
            solve. We&apos;ll get back to you within a working day.
          </motion.p>
        </section>

        <section className="container-premium py-8 lg:py-12">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-cream-400 bg-cream-50 p-6 lg:col-span-7 lg:p-6"
            >
              <h2 className="type-h2 mb-5 text-2xl text-[#0A2E57]">
                Send a message
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    hint={`${form.name.length}/50`}
                    error={errors.name}
                  >
                    <InputWithIcon icon={<User size={14} />}>
                      <input
                        type="text"
                        value={form.name}
                        maxLength={50}
                        onChange={updateField("name")}
                        className={inputCls(!!errors.name)}
                        autoComplete="name"
                      />
                    </InputWithIcon>
                  </Field>

                  <Field label="Email" error={errors.email}>
                    <InputWithIcon icon={<Mail size={14} />}>
                      <input
                        type="email"
                        value={form.email}
                        maxLength={100}
                        onChange={updateField("email")}
                        className={inputCls(!!errors.email)}
                        autoComplete="email"
                      />
                    </InputWithIcon>
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Phone" hint="optional" error={errors.phone}>
                    <InputWithIcon icon={<Phone size={14} />}>
                      <input
                        type="tel"
                        value={form.phone}
                        maxLength={20}
                        onChange={updateField("phone")}
                        className={inputCls(!!errors.phone)}
                        autoComplete="tel"
                      />
                    </InputWithIcon>
                  </Field>

                  <Field label="Company" hint="optional" error={errors.company}>
                    <InputWithIcon icon={<Building2 size={14} />}>
                      <input
                        type="text"
                        value={form.company}
                        maxLength={100}
                        onChange={updateField("company")}
                        className={inputCls(!!errors.company)}
                        autoComplete="organization"
                      />
                    </InputWithIcon>
                  </Field>
                </div>

                <Field
                  label="Message"
                  hint={messageLengthHint}
                  error={errors.message}
                >
                  <textarea
                    rows={6}
                    value={form.message}
                    maxLength={500}
                    onChange={updateField("message")}
                    className={`${inputCls(!!errors.message)} resize-none`}
                  />
                </Field>

                {submitError && (
                  <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send
                        size={15}
                        strokeWidth={2.2}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 lg:col-span-5"
            >
              <div className="rounded-2xl border border-cream-400 bg-cream-50 p-6 lg:p-7">
                <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-[#0F6E56]">
                  Reach us directly
                </h3>

                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8B0]" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-[#888780]">
                        Email
                      </div>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-[#0A2E57] transition-colors hover:text-[#12B8B0]"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#12B8B0]" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-[#888780]">
                        Phone
                      </div>
                      {COMPANY.phones.map((p) => (
                        <div key={p} className="text-[#0A2E57]">
                          {p}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>

              {OFFICES.map((office) => (
                <div
                  key={office.label}
                  className="rounded-2xl border border-cream-400 bg-cream-50 p-6 lg:p-7"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#12B8B0]" />
                    <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[#0F6E56]">
                      {office.label}
                    </h3>

                    {office.isVisiting && (
                      <span className="pill pill-teal ml-auto !px-2 !py-0.5 text-[10px]">
                        Visiting
                      </span>
                    )}
                  </div>

                  <address className="not-italic text-sm leading-7 text-[#0A2E57]">
                    {office.lines.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </address>

                  {office.mapsLink && (
                    <a
                      href={office.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs text-[#12B8B0] transition-colors hover:text-[#0A2E57]"
                    >
                      Open in Maps →
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-xs font-medium uppercase tracking-wide text-[#0A2E57]">
          {label}
        </label>

        {hint && <span className="text-[11px] text-[#888780]">{hint}</span>}
      </div>

      {children}

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function InputWithIcon({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#888780]">
        {icon}
      </span>
      {children}
    </div>
  );
}

function ContactPageSkeleton() {
  return (
    <main className="relative flex flex-1 flex-col mesh-bg">
      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />

        <section className="container-premium pb-8 pt-12 lg:pb-10 lg:pt-16">
          <div className="mb-5 h-4 w-32 rounded-full bg-cream-200" />
          <div className="mb-4 h-12 w-3/4 rounded-lg bg-cream-200" />
          <div className="h-6 w-1/2 rounded bg-cream-200" />
        </section>

        <section className="container-premium py-8 lg:py-12">
          <div className="h-96 animate-pulse rounded-2xl border border-cream-400 bg-cream-50 p-6 lg:p-6" />
        </section>

        <Footer />
      </div>
    </main>
  );
}