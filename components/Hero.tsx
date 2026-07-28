"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const backgrounds = [
  "/images/bg.jpg",
  "/images/cars.jpg",
  "/images/police.jpg",
  "/images/gangs.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Slideshow */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-[2500ms] ${
            current === index ? "opacity-100 scale-110" : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center lg:px-12">

        {/* Badge */}
        <div className="mb-8 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold tracking-[0.25em] text-cyan-300 backdrop-blur-md">
          🔥 PREMIUM FIVEM ROLEPLAY
        </div>

        {/* Logo */}
        <Image
          src="/images/logo.png"
          width={190}
          height={190}
          alt="OceanView RP"
          priority
          className="drop-shadow-[0_0_80px_rgba(6,182,212,.75)] transition duration-500 hover:scale-105"
        />

        {/* Heading */}
       <h1 className="mt-8 text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
  Ocean
  <span className="text-cyan-400">View</span>
  RP
</h1>

        {/* Subtitle */}
        <h2 className="mt-4 text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
          Create Your Story. Build Your Empire.
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-300 lg:text-xl">
          Experience premium FiveM roleplay with exclusive vehicles,
          player-owned businesses, immersive careers, custom scripts,
          and weekly community events.
        </p>

       

        {/* Buttons */}
       {/* Buttons */}
<div className="mt-12 flex flex-wrap items-center justify-center gap-5">

  <a
    href="fivem://connect/31.56.25.230:40120"
    className="inline-flex h-14 items-center justify-center rounded-xl bg-cyan-500 px-8 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
  >
    Play Now
  </a>

  <a
    href="https://discord.com/invite/nZPu6cWGYy"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-14 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-cyan-400"
  >
    Join Discord
  </a>

</div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-cyan-300">
          <span className="text-xs uppercase tracking-[0.35em]">
            Scroll
          </span>
          <span className="mt-2 text-3xl">⌄</span>
        </div>
      </div>

    </section>
  );
}