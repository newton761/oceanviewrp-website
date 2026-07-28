"use client";
import { motion } from "framer-motion";
export default function Features() {
  const features = [
    {
      title: "🚓 Advanced Police",
      text: "Realistic investigations, evidence collection and patrol systems.",
    },
    {
      title: "🚑 EMS",
      text: "Immersive medical roleplay with hospitals and emergency response.",
    },
    {
      title: "🏢 Player Businesses",
      text: "Own dealerships, restaurants, mechanic shops and more.",
    },
    {
      title: "🚗 Custom Vehicles",
      text: "600+ custom vehicles including exclusive one-of-one imports.",
    },
  ];

  return (
    <section id="features" className="bg-[#050B14] py-24">
      <motion.div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-14 text-center text-5xl font-bold">
          Why Choose <span className="text-cyan-400">OceanView RP</span>
        </h2>

        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-lg transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <h3 className="mb-4 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="text-gray-300">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}