import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-yellow-500 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-5xl font-bold text-black">
          Ready to Start Your Next Project?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-800">
          Whether you need roofing, remodeling, painting, or commercial
          construction, we're ready to help. Contact us today for a free,
          no-obligation estimate.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-black px-8 py-4 text-lg font-semibold text-white transition hover:bg-zinc-800"
          >
            Request Free Estimate
          </Link>

          <a
            href="tel:3137414388"
            className="rounded-lg border-2 border-black px-8 py-4 text-lg font-semibold text-black transition hover:bg-black hover:text-white"
          >
            Call (313) 741-4388
          </a>
        </div>
      </div>
    </section>
  );
}