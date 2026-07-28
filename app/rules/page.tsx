"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Drama,
  Car,
  Users,
  Gavel,
  ArrowRight,
} from "lucide-react";

const ruleSections = [
  {
    title: "General Rules",
    icon: ShieldCheck,
    rules: [
      "Treat all players and staff with respect.",
      "Harassment, bullying, discrimination, and hate speech are prohibited.",
      "No cheating, hacking, mod menus, or exploiting bugs.",
      "Remain in character during roleplay situations.",
      "Follow staff instructions at all times.",
      "Use common sense and help maintain a positive community.",
    ],
  },
  {
    title: "Roleplay Rules",
    icon: Drama,
    rules: [
      "No Random Deathmatch (RDM).",
      "No Vehicle Deathmatch (VDM).",
      "No Metagaming.",
      "No Powergaming.",
      "No Fail Roleplay.",
      "No Combat Logging.",
      "Follow the New Life Rule (NLR).",
    ],
  },
  {
    title: "Safe Zones & Vehicles",
    icon: Car,
    rules: [
      "No robberies, violence, or kidnappings inside Safe Zones.",
      "Always value your character's life.",
      "Drive realistically and avoid reckless behavior without RP.",
      "Respect all designated Safe Zone regulations.",
    ],
  },
  {
    title: "Community",
    icon: Users,
    rules: [
      "Keep communication respectful.",
      "No spam, trolling, or microphone abuse.",
      "Stream sniping is prohibited.",
      "You are responsible for your account.",
      "Use the proper channels to report bugs or players.",
      "False reports may result in punishment.",
    ],
  },
];

export default function RulesPage() {
  return (
    <main className="bg-[#050B14] text-white">

      {/* Hero */}

      <section className="border-b border-white/10 py-24">

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mx-auto max-w-5xl px-6 text-center"
></motion.div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Server Rules
          </p>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            OceanView RP Rules
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Please read these rules carefully before joining the server.
            Our goal is to create a fair, immersive, and enjoyable roleplay
            experience for every member of the OceanView RP community.
          </p>

        

      </section>

      {/* Rules */}

      <section className="py-24">

        <div className="mx-auto grid max-w-[1500px] gap-8 px-6 lg:grid-cols-2">

          {ruleSections.map((section) => {
            const Icon = section.icon;

            return (
              <motion.div
  key={section.title}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  whileHover={{
    scale: 1.03,
    boxShadow: "0 0 40px rgba(34,211,238,.25)",
  }}
  className="rounded-3xl border border-white/10 bg-[#07131D] p-8 transition-all"
>
                <div className="mb-8 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Icon size={28} />
                  </div>

                  <h2 className="text-2xl font-bold">
                    {section.title}
                  </h2>

                </div>

                <ul className="space-y-4 text-gray-300">

                  {section.rules.map((rule) => (
                    <motion.li
                      key={rule}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="flex gap-3 leading-7"
                    >
                      <span className="mt-1 text-cyan-400">•</span>
                      <span>{rule}</span>
                    </motion.li>
                  ))}

                </ul>

              </motion.div>
            );
          })}

        </div> 

      </section>

      {/* Punishments */}

      <section className="py-12">

        <div className="mx-auto max-w-4xl px-6">

          <motion.div
            initial={{ opacity:0, scale:.9 }}
            whileInView={{ opacity:1, scale:1 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
            className="rounded-3xl border border-white/10 bg-[#07131D] p-10 text-center"
          ></motion.div>

            <div className="mb-6 flex justify-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Gavel size={32} />
              </div>

            </div>

            <h2 className="text-3xl font-bold">
              Punishments
            </h2>

            <p className="mt-5 text-lg text-gray-400">
              Depending on the severity of the violation,
              staff may issue one of the following:
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <span className="rounded-full bg-yellow-500/10 px-5 py-2 text-yellow-400">
                Warning
              </span>

              <span className="rounded-full bg-orange-500/10 px-5 py-2 text-orange-400">
                Kick
              </span>

              <span className="rounded-full bg-red-500/10 px-5 py-2 text-red-400">
                Temporary Ban
              </span>

              <span className="rounded-full bg-red-700/20 px-5 py-2 text-red-300">
                Permanent Ban
              </span>

            </div>

          

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Begin Your Story?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Now that you've read the rules, it's time to join OceanView RP
            and become part of our growing community.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="fivem://connect/31.56.25.230:40120"
              className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-400"
            >
              Join Server
            </a>

            <a
              href="https://discord.gg/nZPu6cWGYy"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/10"
            >
              Join Discord
            </a>

          </div>

          <div className="mt-10">

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              Return to Homepage
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}