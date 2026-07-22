import FadeIn from "@/components/ui/FadeIn";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    project: "Kitchen Remodel",
    review:
      "The team was professional, communicative, and the finished kitchen exceeded our expectations. We couldn't be happier with the results.",
  },
  {
    name: "David R.",
    project: "Roof Replacement",
    review:
      "Fast service, excellent workmanship, and everything was cleaned up when the job was finished. I highly recommend TML Contractors.",
  },
  {
    name: "Jennifer L.",
    project: "Interior Painting",
    review:
      "Our home looks brand new. Great attention to detail, outstanding communication, and a very professional crew.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.35em] text-[#C39748]">
              Testimonials
            </p>

            <h2 className="text-4xl font-black text-white md:text-5xl">
              What Our Customers Say
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Our reputation is built on quality workmanship, honest service,
              and satisfied customers throughout Michigan.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.15}>
              <div className="group h-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C39748] hover:shadow-xl hover:shadow-[#C39748]/10">
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#C39748] text-[#C39748]"
                    />
                  ))}
                </div>

                <p className="leading-8 text-zinc-300">
                  “{review.review}”
                </p>

                <div className="mt-8 border-t border-zinc-800 pt-6">
                  <h3 className="text-lg font-bold text-white">
                    {review.name}
                  </h3>

                  <p className="text-sm text-[#C39748]">
                    {review.project}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}