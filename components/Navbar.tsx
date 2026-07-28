"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Vehicles", href: "/vehicles" },
  { name: "Businesses", href: "#businesses" },
  { name: "Gallery", href: "/gallery" },
  { name: "Store", href: "/store" },
  { name: "Contact", href: "#contact" },
  { name: "Events", href: "/events" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050B14]/80 backdrop-blur-2xl border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-8 xl:px-12">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="OceanView RP"
            width={42}
            height={42}
            priority
          />

          <div className="hidden sm:block">
           <p className="text-2xl font-bold tracking-tight">
  Ocean<span className="text-cyan-400">View</span> RP
</p>

<p className="text-sm text-white/60">
  Premium FiveM Roleplay
</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 xl:gap-12">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link
            href="https://discord.com/invite/nZPu6cWGYy"
            target="_blank"
            className="btn-primary"
          >
            Join Discord
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#07131D]">
          <nav className="container flex flex-col py-6 space-y-5">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}
            

            <Link
              href="https://discord.com/invite/nZPu6cWGYy"
              target="_blank"
              className="btn-primary text-center"
            >
              Join Discord
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}