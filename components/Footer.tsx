import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050B14]">
      <div className="mx-auto max-w-[1500px] px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/logo.png"
                alt="OceanView RP"
                width={52}
                height={52}
              />

              <div>

                <h3 className="text-2xl font-bold">
                  Ocean<span className="text-cyan-400">View</span> RP
                </h3>

                <p className="text-sm text-gray-400">
                  Premium FiveM Roleplay
                </p>

              </div>

            </div>

            <p className="mt-6 max-w-sm leading-8 text-gray-400">
              Experience immersive roleplay with custom vehicles,
              player-owned businesses, realistic careers, and an
              active community built for unforgettable stories.
            </p>

            <Link
              href="https://discord.gg/nZPu6cWGYy"
              target="_blank"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
            >
              Join Discord
              <ArrowUpRight size={18} />
            </Link>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h4>

            <div className="space-y-4">

              <Link href="/" className="block text-gray-400 hover:text-cyan-400">
                Home
              </Link>

              <Link href="#vehicles" className="block text-gray-400 hover:text-cyan-400">
                Vehicles
              </Link>

              <Link href="#businesses" className="block text-gray-400 hover:text-cyan-400">
                Businesses
              </Link>

              <Link href="#gallery" className="block text-gray-400 hover:text-cyan-400">
                Gallery
              </Link>

            </div>

          </div>

          {/* Community */}

          <div>

            <h4 className="mb-6 text-lg font-semibold text-white">
              Community
            </h4>

            <div className="space-y-4">

              <Link
                href="https://discord.gg/nZPu6cWGYy"
                target="_blank"
                className="block text-gray-400 hover:text-cyan-400"
              >
                Discord
              </Link>

              <Link href="/store" className="block text-gray-400 hover:text-cyan-400">
                Store
              </Link>

              <Link href="/gallery" className="block text-gray-400 hover:text-cyan-400">
                Gallery
              </Link>

             <Link
  href="/rules"
  className="block text-gray-400 transition-colors hover:text-cyan-400"
>
  Server Rules
</Link>

            </div>

          </div>

          {/* Support */}
{/* Support */}

<div>

  <h4 className="mb-6 text-lg font-semibold text-white">
    Support
  </h4>

  <div className="space-y-4">

    <Link
      href="https://discord.gg/nZPu6cWGYy"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-400 transition-colors hover:text-cyan-400"
    >
      Join Discord
    </Link>

    <Link
      href="https://discord.gg/nZPu6cWGYy"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-gray-400 transition-colors hover:text-cyan-400"
    >
      Create a Support Ticket
    </Link>

    <Link
      href="/rules"
      className="block text-gray-400 transition-colors hover:text-cyan-400"
    >
      Server Rules
    </Link>

  </div>

</div>
        

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 OceanView RP. All rights reserved.
          </p>

          <p>
            Crafted for immersive roleplay.
          </p>

        </div>

      </div>
    </footer>
  );
}