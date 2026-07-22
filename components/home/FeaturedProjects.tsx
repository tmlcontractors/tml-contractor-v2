import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const projects = [
  {
    title: "Roof Replacement",
    category: "Residential Roofing",
    image: "/images/roof.jpg",
  },
  {
    title: "Kitchen Remodeling",
    category: "Kitchen Renovation",
    image: "/images/kitchen.jpg",
  },
  {
    title: "Bathroom Remodeling",
    category: "Bathroom Renovation",
    image: "/images/bathroom.jpg",
  },
  {
    title: "Commercial Construction",
    category: "Commercial",
    image: "/images/commercial.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black to-zinc-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="font-semibold uppercase tracking-[0.3em] text-[#C39748]">
              Our Work
            </p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Every project reflects our commitment to quality craftsmanship,
              professionalism, and attention to detail.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.15}>
              <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#C39748]">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-0 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C39748]">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex rounded-xl bg-[#C39748] px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              View All Projects
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}