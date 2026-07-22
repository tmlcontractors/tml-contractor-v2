import FadeIn from "@/components/ui/FadeIn";
import {
  Hammer,
  Home,
  Paintbrush,
  Building2,
  ShowerHead,
  Wrench,
  Droplets,
  Layers,
} from "lucide-react";

const services = [
  {
    title: "Roofing",
    icon: Hammer,
    description:
      "Complete roof replacements, repairs, inspections, and storm damage restoration for residential and commercial properties.",
  },
  {
    title: "Kitchen Remodeling",
    icon: Home,
    description:
      "Custom kitchen renovations featuring quality cabinetry, countertops, flooring, and modern finishes.",
  },
  {
    title: "Bathroom Remodeling",
    icon: ShowerHead,
    description:
      "Transform your bathroom with beautiful tile, vanities, showers, and premium fixtures.",
  },
  {
    title: "Interior Painting",
    icon: Paintbrush,
    description:
      "Professional residential and commercial painting with flawless finishes and long-lasting results.",
  },
  {
    title: "Flooring Installation",
    icon: Layers,
    description:
      "Expert installation of luxury vinyl plank, hardwood, laminate, tile, and other flooring systems.",
  },
  {
    title: "Drywall Services",
    icon: Wrench,
    description:
      "Drywall installation, repairs, finishing, texture matching, and ceiling restoration.",
  },
  {
    title: "Pressure Washing",
    icon: Droplets,
    description:
      "Restore the appearance of homes and commercial buildings with professional exterior cleaning.",
  },
  {
    title: "Commercial Construction",
    icon: Building2,
    description:
      "Commercial renovations, tenant improvements, maintenance, and general contracting services.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-zinc-950 to-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 font-semibold uppercase tracking-[0.35em] text-[#C39748]">
              What We Do
            </p>

            <h2 className="text-4xl font-black text-white md:text-5xl">
              Our Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              TML Contractors delivers dependable construction and remodeling
              services throughout Michigan. Every project is completed with
              quality craftsmanship, honest communication, and attention to
              detail.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="group h-full rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C39748] hover:shadow-2xl hover:shadow-[#C39748]/20">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C39748]/10 transition-all duration-300 group-hover:bg-[#C39748]">
                    <Icon className="h-8 w-8 text-[#C39748] transition-colors duration-300 group-hover:text-black" />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-zinc-400">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-20 text-center">
            <a
              href="/contact"
              className="inline-flex rounded-xl bg-[#C39748] px-8 py-4 text-lg font-bold text-black transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              Request a Free Estimate
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}