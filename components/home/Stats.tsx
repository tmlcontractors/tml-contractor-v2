const stats = [
  {
    number: "250+",
    label: "Projects Completed",
  },
  {
    number: "100%",
    label: "Customer Satisfaction",
  },
  {
    number: "24/7",
    label: "Emergency Service",
  },
  {
    number: "Free",
    label: "Estimates",
  },
];

export default function Stats() {
  return (
    <section className="bg-yellow-500 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-5xl font-black text-black">
                {stat.number}
              </h2>

              <p className="mt-3 font-semibold text-zinc-800">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}