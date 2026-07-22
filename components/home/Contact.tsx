"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    contactMethod: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! Your estimate request has been received.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      contactMethod: "",
      message: "",
    });
  }

  return (
    <section id="contact" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Contact Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Request a Free Estimate
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
            Tell us about your project and we'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-white">
              Let's Build Something Great
            </h3>

            <p className="mt-6 text-zinc-400">
              Whether you need roofing, remodeling, painting, flooring,
              drywall, or commercial construction, TML Contractor is ready to
              help.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="font-semibold text-yellow-500">Phone</p>
                <p className="text-white">(313) 741-4388</p>
              </div>

              <div>
                <p className="font-semibold text-yellow-500">Service Area</p>
                <p className="text-white">Serving All of Michigan</p>
              </div>

              <div>
                <p className="font-semibold text-yellow-500">Hours</p>
                <p className="text-white">
                  Monday – Saturday
                  <br />
                  8:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Estimate Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl bg-zinc-950 p-8"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-lg border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-lg border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full rounded-lg border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500"
              required
            />

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Property Address"
              className="w-full rounded-lg border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500"
              required
            >
              <option value="">Select a Service</option>
              <option>Roofing</option>
              <option>Kitchen Remodeling</option>
              <option>Bathroom Remodeling</option>
              <option>Interior Painting</option>
              <option>Flooring</option>
              <option>Drywall</option>
              <option>Pressure Washing</option>
              <option>Commercial Construction</option>
              <option>Other</option>
            </select>

            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500"
              required
            >
              <option value="">Preferred Contact Method</option>
              <option>Phone Call</option>
              <option>Text Message</option>
              <option>Email</option>
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about your project..."
              className="w-full rounded-lg border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500"
              required
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-yellow-500 py-4 font-bold text-black transition hover:bg-yellow-400"
            >
              Request Free Estimate
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}