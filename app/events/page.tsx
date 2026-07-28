import Image from "next/image";
import { events } from "./events";

export default function EventsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-center mb-10">
        OceanViewRP Events
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.title}
            className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900"
          >
            <Image
              src={event.flyer}
              alt={event.title}
              width={600}
              height={800}
              className="w-full h-auto"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold">{event.title}</h2>

              <p className="mt-2">📅 {event.date}</p>

              <p>📍 {event.location}</p>

              <p className="mt-4 text-gray-300">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}