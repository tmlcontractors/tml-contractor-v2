"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    contactMethod: "Phone",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
  "https://script.google.com/macros/s/AKfycbw2ISC5gWBDQOvM6yeYDTeTOmJBKP9ZRA7yGxafoaP36gK8dIAmOJLKgiMcJud4WA5U/exec",
  {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(formData),
    redirect: "follow",
  }
);

      const result = await response.json();

      setStatus("success");

setFormData({
  name: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  contactMethod: "Phone",
  message: "",
});
      } else {
        console.error(result);
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <main className="bg-black text-white">

      <section className="border-b border-zinc-800 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-[#C39748]">
            Contact TML Contractors
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Request Your Free Estimate
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Tell us about your project and we'll contact you with a free,
            no-obligation estimate.
          </p>

        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

          <h2 className="mb-8 text-3xl font-bold">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-[#C39748]"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-[#C39748]"
            />

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-[#C39748]"
            />

            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Project Address"
              className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-[#C39748]"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-[#C39748]"
            >
              <option value="">Select a Service</option>
              <option>Roofing</option>
              <option>Roof Repair</option>
              <option>Kitchen Remodel</option>
              <option>Bathroom Remodel</option>
              <option>Interior Painting</option>
              <option>Exterior Painting</option>
              <option>Flooring</option>
              <option>Drywall</option>
              <option>Commercial Construction</option>
              <option>General Contracting</option>
              <option>Other</option>
            </select>

            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-[#C39748]"
            >
              <option>Phone</option>
              <option>Email</option>
              <option>Text Message</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-[#C39748]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#C39748] py-4 text-lg font-bold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Request Free Estimate"}
            </button>

            {status === "success" && (
              <div className="rounded-xl border border-green-700 bg-green-900/30 p-4 text-green-300">
                ✅ Thank you! Your estimate request has been sent successfully.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl border border-red-700 bg-red-900/30 p-4 text-red-300">
                Something went wrong while sending your request. Please try
                again.
              </div>
            )}

          </form>

        </div>

        <div>

          <h2 className="mb-8 text-3xl font-bold">
            Contact Information
          </h2>

          <div className="space-y-8">

            <div className="flex gap-4">
              <Phone className="mt-1 text-[#C39748]" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-zinc-400">(313) 741-4388</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-1 text-[#C39748]" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-zinc-400">info@tmlcontractors.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="mt-1 text-[#C39748]" />
              <div>
                <h3 className="font-bold">Service Area</h3>
                <p className="text-zinc-400">Serving All of Michigan</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 text-[#C39748]" />
              <div>
                <h3 className="font-bold">Business Hours</h3>
                <p className="text-zinc-400">Monday – Friday</p>
                <p className="text-zinc-400">8:00 AM – 6:00 PM</p>
              </div>
            </div>

          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-800">
            <iframe
              title="Michigan Service Area"
              src="https://www.google.com/maps?q=Michigan&output=embed"
              className="h-[350px] w-full"
              loading="lazy"
            />
          </div>

        </div>

      </section>

    </main>
  );
}