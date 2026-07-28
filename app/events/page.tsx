import Image from "next/image";
import event from "./event";

export default function EventsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-8 text-center">
        Current Event
      </h1>

      <Image
        src={event.flyer}
        alt={event.title}
        width={900}
        height={1200}
        className="rounded-xl w-full"
      />

      <div className="mt-8">
        <h2 className="text-4xl font-bold">{event.title}</h2>

        <p>📅 {event.date}</p>
        <p>🕙 {event.time}</p>
        <p>📍 {event.location}</p>

        <p className="mt-6 text-lg">
          {event.description}
        </p>
      </div>
    </main>
  );
}