import FadeIn from "@/components/ui/FadeIn";
import {
  ShieldCheck,
  Hammer,
  BadgeDollarSign,
  Clock3,
  Star,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed • Bonded • Insured",
    text: "Your home or business is protected by a fully licensed, bonded, and insured contractor you can trust.",
  },
  {
    icon: Hammer,
    title: "Superior Craftsmanship",
    text: "Every project is completed with attention to detail, quality materials, and pride in our workmanship.",
  },
  {
    icon: BadgeDollarSign,
    title: "Honest Pricing",
    text: "Clear, detailed estimates with transparent pricing and no hidden surprises.",
  },
  {
    icon: Clock3,
    title: "On-Time Completion",
    text: "We respect your schedule by communicating clearly and keeping projects moving efficiently.",
  },
  {
    icon: Star,
    title: "Customer First",
    text: "Our reputation is built on satisfied clients, quality service, and long-term relationships.",
  },
  {
    icon: Users,
    title: "Residential & Commercial",
    text: "From single-family homes to commercial facilities, we deliver dependable construction solutions across Michigan.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-zinc-950 to-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.35em] text-[#C39748]">
              Why TML Contractors
            </p>

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Built on Trust.
              <br />
              Driven by Quality.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              At TML Contractors, we believe every project deserves exceptional
              craftsmanship, honest communication, and dependable service from
              start to finish.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <div className="group h-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C39748] hover:shadow-xl hover:shadow-[#C39748]/10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C39748]/10 transition group-hover:bg-[#C39748]">
                    <Icon className="h-8 w-8 text-[#C39748] transition-colors group-hover:text-black" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="leading-7 text-zinc-400">
                    {feature.text}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}