export default function JoinCommunity() {
  return (
    <section className="relative overflow-hidden bg-[#07101c] py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Join{" "}
          <span className="text-cyan-400">
            OceanView RP?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Become part of an immersive roleplay community with custom vehicles,
          businesses, police, EMS, gangs, housing, and much more.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="fivem://connect/31.56.25.230:40120"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-cyan-400"
          >
            🎮 Connect to Server
          </a>

          <a
            href="https://discord.com/invite/nZPu6cWGYy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-cyan-500 px-8 py-4 font-bold transition hover:bg-cyan-500 hover:text-black"
          >
            💬 Join Discord
          </a>

        </div>

      </div>
    </section>
  );
}