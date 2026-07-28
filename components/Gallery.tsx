import Image from "next/image";

const images = [
  "/images/bg.jpg",
  "/images/bg.jpg",
  "/images/bg.jpg",
  "/images/bg.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#08111d] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-14 text-center text-5xl font-bold">
          Server <span className="text-cyan-400">Gallery</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-cyan-500/20"
            >
              <Image
                src={image}
                width={500}
                height={300}
                alt={`Gallery ${index + 1}`}
                className="h-64 w-full object-cover transition duration-300 hover:scale-110"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}