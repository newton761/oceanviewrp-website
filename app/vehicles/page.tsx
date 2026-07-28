"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const vehicles = [
  {
    hero: "/vehicles/car1/hero.jpg",
    images: [
      "/vehicles/car1/hero.jpg",
      "/vehicles/car1/1.jpg",
      "/vehicles/car1/2.jpg",
    ],
  },
  {
    hero: "/vehicles/car2/hero.jpg",
    images: [
      "/vehicles/car2/hero.jpg",
      "/vehicles/car2/1.jpg",
      "/vehicles/car2/2.jpg",
    ],
  },
  {
    hero: "/vehicles/car3/hero.jpg",
    images: [
      "/vehicles/car3/hero.jpg",
      "/vehicles/car3/1.jpg",
      "/vehicles/car3/2.jpg",
    ],
  },
  {
    hero: "/vehicles/car4/hero.jpg",
    images: [
      "/vehicles/car4/hero.jpg",
      "/vehicles/car4/1.jpg",
      "/vehicles/car4/2.jpg",
    ],
  },
];

export default function VehiclesPage() {
  const [gallery, setGallery] = useState<string[]>([]);
  const [current, setCurrent] = useState<number | null>(null);

  const openGallery = (images: string[], index: number) => {
    setGallery(images);
    setCurrent(index);
  };

  const closeGallery = () => {
    setCurrent(null);
    setGallery([]);
  };

  const next = () => {
    if (current === null) return;
    setCurrent((current + 1) % gallery.length);
  };

  const previous = () => {
    if (current === null) return;
    setCurrent((current - 1 + gallery.length) % gallery.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (current === null) return;

      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") previous();
      if (e.key === "Escape") closeGallery();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  return (
    <main className="bg-[#07111f] min-h-screen pt-32 pb-24">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-white">
          Vehicle Showcase
        </h1>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Explore some of the unique vehicles available in OceanView RP.
        </p>

        {vehicles.map((vehicle, vehicleIndex) => (
          <section key={vehicleIndex} className="mb-28">

            <div
              className="overflow-hidden rounded-3xl cursor-pointer"
              onClick={() => openGallery(vehicle.images, 0)}
            >
              <Image
                src={vehicle.hero}
                alt=""
                width={1600}
                height={900}
                className="w-full h-[520px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <h2 className="text-white text-2xl font-semibold mt-8 mb-6">
              Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {vehicle.images.slice(1).map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="overflow-hidden rounded-2xl cursor-pointer"
                  onClick={() => openGallery(vehicle.images, imageIndex + 1)}
                >
                  <Image
                    src={image}
                    alt=""
                    width={900}
                    height={600}
                    className="w-full h-80 object-cover hover:scale-110 transition duration-500"
                  />
                </div>
              ))}

            </div>

          </section>
        ))}

      </div>

      {current !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
          onClick={closeGallery}
        >

          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white"
          >
            <X size={42} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              previous();
            }}
            className="absolute left-8 text-white"
          >
            <ChevronLeft size={70} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-8 text-white"
          >
            <ChevronRight size={70} />
          </button>

          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={gallery[current]}
              alt=""
              width={2000}
              height={1200}
              className="max-h-[90vh] max-w-[92vw] object-contain rounded-xl"
            />
          </div>

          <div className="absolute bottom-8 flex gap-3">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(i);
                }}
              >
                <Image
                  src={img}
                  alt=""
                  width={90}
                  height={60}
                  className={`rounded-lg object-cover border-2 ${
                    current === i
                      ? "border-cyan-400"
                      : "border-transparent opacity-70"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="absolute bottom-36 text-white text-lg">
            {current + 1} / {gallery.length}
          </div>

        </div>
      )}
    </main>
  );
}