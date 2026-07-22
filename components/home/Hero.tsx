import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="TML Contractors building and remodeling project"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#C39748]">
            Licensed • Bonded • Insured
          </p>

          <h1 className="leading-tight text-5xl font-black text-white md:text-7xl">
            Michigan's Trusted
            <br />
            <span className="text-[#C39748]">
              General Contractor
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-300 md:text-xl">
            From roofing and remodeling to commercial renovations,
            TML Contractors delivers dependable craftsmanship,
            honest communication, and quality that lasts.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="/contact"
              className="rounded-lg bg-[#C39748] px-8 py-4 text-center font-bold text-black transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              Request Free Estimate
            </a>

            <a
              href="tel:3137414388"
              className="rounded-lg border border-white px-8 py-4 text-center font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
            >
              📞 Call (313) 741-4388
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-white">

            <div>
              <p className="text-3xl font-bold text-[#C39748]">
                100%
              </p>
              <p className="text-gray-300">
                Satisfaction
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-[#C39748]">
                Residential
              </p>
              <p className="text-gray-300">
                & Commercial
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-[#C39748]">
                Michigan
              </p>
              <p className="text-gray-300">
                Statewide Service
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}