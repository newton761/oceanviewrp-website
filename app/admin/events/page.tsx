"use client";

import { useState } from "react";

export default function AdminEvents() {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    flyer: "",
  });

  async function saveEvent() {
    await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Event Published!");
  }

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">
        Create Event
      </h1>

      <input
        placeholder="Event Title"
        className="w-full p-3 mb-4 rounded"
        onChange={(e)=>setForm({...form,title:e.target.value})}
      />

      <input
        type="datetime-local"
        className="w-full p-3 mb-4 rounded"
        onChange={(e)=>setForm({...form,date:e.target.value})}
      />

      <input
        placeholder="Location"
        className="w-full p-3 mb-4 rounded"
        onChange={(e)=>setForm({...form,location:e.target.value})}
      />

      <textarea
        placeholder="Description"
        className="w-full p-3 h-40 rounded"
        onChange={(e)=>setForm({...form,description:e.target.value})}
      />

      <input
        placeholder="Flyer URL"
        className="w-full p-3 mt-4 rounded"
        onChange={(e)=>setForm({...form,flyer:e.target.value})}
      />

      <button
        onClick={saveEvent}
        className="mt-6 bg-cyan-500 px-8 py-3 rounded-lg"
      >
        Publish Event
      </button>
    </div>
  );
}