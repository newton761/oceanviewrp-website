export default function Stats() {
  const stats = [
    { number: "600+", title: "Custom Cars" },
    { number: "40+", title: "Businesses" },
    { number: "100+", title: "Custom Weapons" },
    { number: "24/7", title: "Roleplay" },
  ];

  return (
    <section className="bg-[#050B14] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-16 text-center text-5xl font-bold">
          OceanView RP <span className="text-cyan-400">Statistics</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 p-10 text-center backdrop-blur-lg hover:border-cyan-400 transition"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-4 text-lg text-gray-300">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}