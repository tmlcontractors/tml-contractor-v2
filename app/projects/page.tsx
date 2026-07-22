import Image from "next/image";

export const metadata = {
  title: "Our Projects | TML Contractors",
  description:
    "Explore completed roofing, remodeling, painting, and commercial construction projects by TML Contractors.",
};

const projects = [
  {
    title: "Luxury Kitchen Remodel",
    category: "Kitchen Remodeling",
    image: "/images/projects/kitchen.jpg",
  },
  {
    title: "Complete Roof Replacement",
    category: "Roofing",
    image: "/images/projects/roof.jpg",
  },
  {
    title: "Modern Bathroom Renovation",
    category: "Bathroom Remodeling",
    image: "/images/projects/bathroom.jpg",
  },
  {
    title: "Commercial Office Build-Out",
    category: "Commercial",
    image: "/images/projects/commercial.jpg",
  },
  {
    title: "Interior Painting",
    category: "Painting",
    image: "/images/projects/painting.jpg",
  },
  {
    title: "Luxury Vinyl Flooring",
    category: "Flooring",
    image: "/images/projects/flooring.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white">
      <section className="py-24 text-center border-b border-zinc-800">
        <p className="uppercase tracking-[0.35em] text-[#C39748]">
          Portfolio
        </p>

        <h1 className="mt-4 text-6xl font-black">
          Our Projects
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
          Every project showcases our commitment to quality craftsmanship,
          precision, and exceptional customer service.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:border-[#C39748]"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <p className="uppercase tracking-[0.25em] text-[#C39748]">
                    {project.category}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {project.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}