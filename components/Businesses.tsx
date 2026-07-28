import Image from "next/image";

export default function Businesses() {
  return (
    <section id="businesses" className="bg-[#08111d] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-14 text-center text-5xl font-bold">
          Featured <span className="text-cyan-400">Businesses</span>
        </h2>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <Image
            src="/images/bg.jpg"
            width={700}
            height={400}
            alt="Black Motors"
            className="rounded-3xl border border-cyan-500/20"
          />

          <div>

            <h3 className="text-4xl font-bold">
              Black Motors
            </h3>

            <p className="mt-6 text-lg text-gray-300">
              Own one of the most prestigious dealerships in OceanView RP.
              Buy and sell luxury vehicles, manage employees and build your
              automotive empire.
            </p>

            <div className="mt-8">

              <button className="rounded-xl bg-cyan-500 px-8 py-4 font-bold hover:bg-cyan-400 transition">
                Learn More
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}