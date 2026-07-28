import Image from "next/image";

const cars = [
  {
    name: "Mazda RX-7",
    image: "/images/cars.jpg",
    badge: "1 OF 1",
  },
  {
    name: "Lamborghini Huracán",
    image: "/images/cars.jpg",
    badge: "LIMITED",
  },
  {
    name: "A1hellcat",
    image: "/images/cars.jpg",
    badge: "EXCLUSIVE",
  },
];

export default function Cars() {
  return (
    <section id="cars" className="bg-[#050B14] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-14 text-center text-5xl font-bold">
          Featured <span className="text-cyan-400">Vehicles</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {cars.map((car) => (
            <div
              key={car.name}
              className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >

              <div className="relative">

                <Image
                  src={car.image}
                  width={600}
                  height={350}
                  alt={car.name}
                  className="h-60 w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-cyan-500 px-3 py-1 text-sm font-bold">
                  {car.badge}
                </span>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {car.name}
                </h3>

                <button className="mt-6 w-full rounded-xl bg-cyan-500 py-3 font-bold transition hover:bg-cyan-400">
                  View Vehicle
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}