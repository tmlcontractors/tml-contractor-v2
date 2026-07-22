import Link from "next/link";
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

export const metadata = {
  title: "Services | TML Contractors",
  description:
    "Residential and commercial construction services throughout Michigan.",
};

const services = [
  {
    title: "Roofing",
    icon: Hammer,
    description:
      "Roof replacements, roof repairs, inspections, leak detection, storm damage restoration, and preventative maintenance.",
  },
  {
    title: "Kitchen Remodeling",
    icon: Home,
    description:
      "Custom kitchen renovations with cabinetry, countertops, flooring, backsplashes, lighting, and complete redesigns.",
  },
  {
    title: "Bathroom Remodeling",
    icon: ShowerHead,
    description:
      "Complete bathroom renovations including tile, showers, vanities, fixtures, and accessibility upgrades.",
  },
  {
    title: "Interior & Exterior Painting",
    icon: Paintbrush,
    description:
      "Professional painting services using premium materials for residential and commercial properties.",
  },
  {
    title: "Flooring Installation",
    icon: Layers,
    description:
      "Luxury vinyl plank, hardwood, laminate, tile, and other flooring installation with expert craftsmanship.",
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
      "Professional exterior cleaning for homes, businesses, sidewalks, driveways, patios, and siding.",
  },
  {
    title: "Commercial Construction",
    icon: Building2,
    description:
      "Tenant improvements, office renovations, maintenance, and complete commercial construction services.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      <section className="border-b border-zinc-800 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="uppercase tracking-[0.35em] text-[#C39748]">
            What We Do
          </p>

          <h1 className="mt-4 text-5xl font-black md:text-6xl">
            Construction Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            From roofing and remodeling to commercial renovations, TML
            Contractors provides dependable construction services with quality
            craftsmanship throughout Michigan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C39748]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C39748]/10">
                  <Icon className="h-8 w-8 text-[#C39748]" />
                </div>

                <h2 className="mb-4 text-2xl font-bold">
                  {service.title}
                </h2>

                <p className="leading-7 text-zinc-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-[#C39748]/30 bg-zinc-900 p-12 text-center">
          <h2 className="text-4xl font-black">
            Ready to Start Your Project?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Contact TML Contractors today for a free estimate and let us bring
            your vision to life.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-[#C39748] px-8 py-4 font-bold text-black transition hover:scale-105"
          >
            Request Your Free Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}