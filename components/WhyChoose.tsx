import {
  Car,
  Building2,
  Shield,
  Wallet,
  CalendarDays,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Custom Vehicles",
    description:
      "Explore over 600 imported, luxury, sports, and one-of-one vehicles built for immersive roleplay.",
  },
  {
    icon: Building2,
    title: "Player Businesses",
    description:
      "Own and manage restaurants, dealerships, mechanic shops, nightclubs, and other thriving businesses.",
  },
  {
    icon: Shield,
    title: "Realistic Careers",
    description:
      "Join Police, EMS, Mechanics, Government, Taxi, and many other immersive career paths.",
  },
  {
    icon: Wallet,
    title: "Balanced Economy",
    description:
      "A rewarding economy designed around progression, entrepreneurship, and realistic financial growth.",
  },
  {
    icon: CalendarDays,
    title: "Weekly Events",
    description:
      "Compete in races, treasure hunts, giveaways, tournaments, and exciting community events every week.",
  },
  {
    icon: Cpu,
    title: "Custom Features",
    description:
      "Enjoy unique scripts, custom systems, and exclusive gameplay features developed for OceanView RP.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="features"
      className="bg-[#07131D] py-28"
    >
      <div className="mx-auto max-w-[1500px] px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Why OceanView RP
          </span>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-white">
            Everything You Need
            <br />
            For Exceptional Roleplay
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            OceanView RP combines custom vehicles, player-owned businesses,
            immersive careers, balanced progression, and a thriving community
            to create a premium FiveM experience.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#0B1826]
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400
                "
              >

                <div
                  className="
                    mb-8
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    text-cyan-400
                    transition-all
                    duration-300
                    group-hover:bg-cyan-500
                    group-hover:text-white
                  "
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}