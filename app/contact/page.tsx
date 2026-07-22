import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact TML Contractors",
  description:
    "Request a free estimate from TML Contractors for roofing, remodeling, painting, and commercial construction throughout Michigan.",
};

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      <section className="border-b border-zinc-800 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="uppercase tracking-[0.35em] text-[#C39748]">
            Contact Us
          </p>

          <h1 className="mt-4 text-6xl font-black">
            Request Your Free Estimate
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            We'd love to discuss your next project. Contact us today and we'll
            provide a free, no-obligation estimate.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

          <h2 className="mb-8 text-3xl font-bold">
            Send Us a Message
          </h2>

          <form className="space-y-6">

            <input
              className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-[#C39748]"
              placeholder="Full Name"
            />

            <input
              className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-[#C39748]"
              placeholder="Phone Number"
            />

            <input
              className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-[#C39748]"
              placeholder="Email Address"
            />

            <textarea
              rows={6}
              className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-[#C39748]"
              placeholder="Tell us about your project..."
            />

            <button className="w-full rounded-xl bg-[#C39748] py-4 text-lg font-bold text-black transition hover:scale-[1.02]">
              Request Free Estimate
            </button>

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
                <p className="text-zinc-400">
                  info@tmlcontractors.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="mt-1 text-[#C39748]" />
              <div>
                <h3 className="font-bold">Service Area</h3>
                <p className="text-zinc-400">
                  Serving All of Michigan
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 text-[#C39748]" />
              <div>
                <h3 className="font-bold">Hours</h3>
                <p className="text-zinc-400">
                  Monday – Friday
                </p>
                <p className="text-zinc-400">
                  8:00 AM – 6:00 PM
                </p>
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