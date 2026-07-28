import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#050b16] text-white">
      {/* Hero */}
      <section className="relative h-[500px]">
        <Image
          src="/images/bg.jpg"
          alt="OceanView RP"
          fill
          className="object-cover opacity-40"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold">About OceanView RP</h1>
            <p className="mt-6 text-xl text-gray-300">
              More Than a City, It's a Lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <h2 className="mb-6 text-4xl font-bold">
              Our Story
            </h2>

            <p className="mb-6 text-lg text-gray-300">
              OceanView RP was created to provide a premium FiveM roleplay
              experience where every player has the opportunity to create
              their own story.
            </p>

            <p className="text-lg text-gray-300">
              Whether you're joining law enforcement, building a business,
              becoming a criminal mastermind, or simply enjoying city life,
              OceanView RP offers a balanced and immersive experience for
              everyone.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-[#08111d] p-10">
            <h3 className="mb-6 text-3xl font-bold text-cyan-400">
              Why Choose OceanView?
            </h3>

            <ul className="space-y-4 text-lg">
              <li>✅ Serious & Fun Roleplay</li>
              <li>✅ Custom Vehicles & MLOs</li>
              <li>✅ Active Staff Team</li>
              <li>✅ Player-Owned Businesses</li>
              <li>✅ Regular Community Events</li>
              <li>✅ Friendly Community</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#08111d] py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-bold">
            Ready to Join OceanView RP?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Join our Discord, meet the community, and begin your journey today.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="https://discord.com/invite/nZPu6cWGYy"
              className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-bold text-black hover:bg-cyan-400"
            >
              Join Discord
            </Link>

            <Link
              href="/store"
              className="rounded-xl border border-cyan-500 px-8 py-4 text-lg hover:bg-cyan-500/10"
            >
              Visit Store
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}