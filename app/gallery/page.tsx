"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
    
];

export default function GalleryPage() {
  const [current, setCurrent] = useState<number | null>(null);

  const nextImage = () => {
    if (current === null) return;
    setCurrent((current + 1) % images.length);
  };

  const prevImage = () => {
    if (current === null) return;
    setCurrent((current - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (current === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setCurrent(null);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  return (
    <main className="min-h-screen bg-[#07111f] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-white mb-4">
          OceanView RP Gallery
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Explore life inside OceanView RP
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className="cursor-pointer overflow-hidden rounded-xl"
            >
              <Image
                src={image}
                alt=""
                width={800}
                height={500}
                className="w-full h-72 object-cover hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>

      {current !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={() => setCurrent(null)}
        >
          {/* Close */}
          <button
            onClick={() => setCurrent(null)}
            className="absolute top-6 right-6 text-white hover:text-cyan-400"
          >
            <X size={40} />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-5 text-white hover:text-cyan-400"
          >
            <ChevronLeft size={60} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-5 text-white hover:text-cyan-400"
          >
            <ChevronRight size={60} />
          </button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[current]}
              alt=""
              width={2000}
              height={1200}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-8 text-white text-lg">
            {current + 1} / {images.length}
          </div>
        </div>
      )}
    </main>
  );
}