import Image from "next/image";
import { CheckCircle, Car, Gauge, Users, Package } from "lucide-react";

export default function VehicleDetailsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">

      <div className="grid gap-12 lg:grid-cols-2">

        {/* Vehicle Image */}

        <div>
          <Image
            src="/images/cars.jpg"
            alt="Vehicle"
            width={900}
            height={600}
            className="rounded-3xl"
          />

          <div className="mt-4 flex gap-4">

            {[1,2,3,4].map((img)=>(
              <div
                key={img}
                className="h-24 w-24 rounded-xl border border-cyan-500/20 bg-[#08111d]"
              />
            ))}

          </div>

        </div>

        {/* Vehicle Info */}

        <div>

          <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400">
            Sports
          </span>

          <h1 className="mt-5 text-5xl font-bold">
            Nissan GT-R R35
          </h1>

          <p className="mt-5 text-lg text-gray-400">
            One of the fastest and most iconic sports cars available in
            OceanView RP. Perfect for daily driving, racing, and car meets.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="rounded-2xl bg-[#08111d] p-5">
              <Car className="mb-3 text-cyan-400"/>
              <p className="text-gray-400">Category</p>
              <h3 className="text-xl font-bold">Sports</h3>
            </div>

            <div className="rounded-2xl bg-[#08111d] p-5">
              <Gauge className="mb-3 text-cyan-400"/>
              <p className="text-gray-400">Top Speed</p>
              <h3 className="text-xl font-bold">220 MPH</h3>
            </div>

            <div className="rounded-2xl bg-[#08111d] p-5">
              <Users className="mb-3 text-cyan-400"/>
              <p className="text-gray-400">Seats</p>
              <h3 className="text-xl font-bold">2</h3>
            </div>

            <div className="rounded-2xl bg-[#08111d] p-5">
              <Package className="mb-3 text-cyan-400"/>
              <p className="text-gray-400">Storage</p>
              <h3 className="text-xl font-bold">150 KG</h3>
            </div>

          </div>

          <div className="mt-10 space-y-3">

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400"/>
              Animated
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400"/>
              Custom Engine Sound
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400"/>
              Compatible with OceanView RP
            </div>

          </div>

          <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-[#08111d] p-8">

            <p className="text-gray-400">
              Price
            </p>

            <h2 className="mt-2 text-5xl font-bold text-cyan-400">
              $50
            </h2>

            <button className="mt-8 w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-black hover:bg-cyan-400">
              Purchase Vehicle
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}