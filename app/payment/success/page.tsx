export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-[#050b16] flex items-center justify-center px-6 text-white">
      <div className="max-w-2xl rounded-3xl border border-green-500/20 bg-white/5 p-10 text-center">

        <div className="mb-6 text-7xl">
          ✅
        </div>

        <h1 className="text-5xl font-bold text-green-400">
          Payment Submitted
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Thank you for supporting <span className="font-bold text-cyan-400">OceanView RP</span>.
          If you paid through PayPal, our staff will verify your payment and
          deliver your purchase as soon as possible.
        </p>

        <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-[#08111d] p-6 text-left">

          <h2 className="mb-4 text-2xl font-bold text-cyan-400">
            What's Next?
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✅ Your payment will be reviewed.</li>
            <li>✅ Staff will verify your Product ID.</li>
            <li>✅ Your purchase will be delivered in-game.</li>
            <li>✅ If we need additional information, we'll contact you on Discord.</li>
          </ul>

        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <a
            href="/"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-black transition hover:bg-cyan-400"
          >
            Return Home
          </a>

          <a
            href="https://discord.com/invite/nZPu6cWGYy"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-cyan-500 px-8 py-4 font-bold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
          >
            Join Discord
          </a>

        </div>

      </div>
    </main>
  );
}