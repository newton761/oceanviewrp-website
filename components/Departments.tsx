import Image from "next/image";

const departments = [
  {
    title: "Oceanview Police",
    image: "/images/police.jpg",
    description:
      "Protect the city with advanced policing, investigations and emergency response.",
  },
  {
    title: "Gang Life",
    image: "/images/gangs.jpg",
    description:
      "Create your empire, fight for territory and build your reputation.",
  },
  {
    title: "Custom Vehicles",
    image: "/images/cars.jpg",
    description:
      "Drive hundreds of custom imports, luxury vehicles and exclusive one-of-one cars.",
  },
];

export default function Departments() {
  return (
    <section className="bg-[#08111d] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-14 text-center text-5xl font-bold">
          Explore <span className="text-cyan-400">OceanView RP</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {departments.map((dept) => (
            <div
              key={dept.title}
              className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 transition hover:-translate-y-2 hover:border-cyan-400"
            >

              <Image
                src={dept.image}
                width={700}
                height={400}
                alt={dept.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {dept.title}
                </h3>

                <p className="mt-4 text-gray-300">
                  {dept.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}