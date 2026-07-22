import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About TML Contractors",
  description:
    "Learn about TML Contractors and our commitment to quality craftsmanship across Michigan.",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      <section className="relative h-[450px]">
        <Image
          src="/images/about.jpg"
          alt="TML Contractors"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#C39748]">
              About Us
            </p>

            <h1 className="mt-4 text-6xl font-black">
              Building Trust
              <br />
              Through Quality
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">

          <div>
            <h2 className="text-4xl font-black">
              Michigan's Reliable General Contractor
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              TML Contractors provides dependable residential and commercial
              construction services throughout Michigan. From roofing and
              remodeling to painting and renovations, we take pride in
              delivering quality workmanship and exceptional customer service.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Every project is completed with honesty, professionalism, and
              attention to detail because your investment deserves lasting
              quality.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-block rounded-xl bg-[#C39748] px-8 py-4 font-bold text-black"
            >
              Request a Free Estimate
            </Link>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10">
            <h3 className="text-3xl font-bold">
              Why Homeowners Choose Us
            </h3>

            <ul className="mt-8 space-y-5 text-zinc-300">
              <li>✔ Licensed, Bonded & Insured</li>
              <li>✔ Residential & Commercial</li>
              <li>✔ Honest Pricing</li>
              <li>✔ Professional Craftsmanship</li>
              <li>✔ Reliable Scheduling</li>
              <li>✔ Free Estimates</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}