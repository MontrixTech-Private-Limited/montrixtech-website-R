"use client";

import { FormEvent, useState } from "react";

export default function WorkshopEnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      institution: formData.get("institution"),
      workshop: formData.get("workshop"),
      participants: formData.get("participants"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/workshops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send enquiry.");
      }

      setSuccess(
        "Thank you! Your workshop enquiry has been sent successfully."
      );

      form.reset();
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Failed to send enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-[#0A2E57]"
        >
          Name *
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#12B8B0]"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-[#0A2E57]"
        >
          Email *
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#12B8B0]"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-[#0A2E57]"
        >
          Phone
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#12B8B0]"
        />
      </div>

      <div>
        <label
          htmlFor="institution"
          className="mb-2 block text-sm font-medium text-[#0A2E57]"
        >
          Institution / College / School *
        </label>

        <input
          id="institution"
          name="institution"
          type="text"
          required
          placeholder="Institution name"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#12B8B0]"
        />
      </div>

      <div>
        <label
          htmlFor="workshop"
          className="mb-2 block text-sm font-medium text-[#0A2E57]"
        >
          Workshop *
        </label>

        <select
          id="workshop"
          name="workshop"
          required
          defaultValue=""
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#12B8B0]"
        >
          <option value="" disabled>
            Select a workshop
          </option>

          <option value="Web Development">
            Web Development
          </option>

          <option value="JavaScript">
            JavaScript
          </option>

          <option value="React.js">
            React.js
          </option>

          <option value="Python">
            Python
          </option>

          <option value="AI / Machine Learning">
            AI / Machine Learning
          </option>

          <option value="Data Science">
            Data Science
          </option>

          <option value="Other">
            Other
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="participants"
          className="mb-2 block text-sm font-medium text-[#0A2E57]"
        >
          Expected Participants
        </label>

        <input
          id="participants"
          name="participants"
          type="number"
          min="1"
          placeholder="e.g. 50"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#12B8B0]"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-[#0A2E57]"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your workshop requirements..."
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#12B8B0]"
        />
      </div>

      {success && (
        <div className="rounded-lg bg-green-50 p-4 text-sm text-green-700">
          {success}
        </div>
      )}

      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-[#12B8B0] px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Workshop Enquiry"}
      </button>
    </form>
  );
}