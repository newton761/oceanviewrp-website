export default function OrderStatusPage() {
  return (
    <main className="min-h-screen bg-[#050b16] py-24 text-white">
      <div className="mx-auto max-w-3xl px-6">

        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Order <span className="text-cyan-400">Status</span>
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            Check the status of your OceanView RP purchase.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-white/5 p-8">

          <div className="space-y-6">

            <div>
              <label className="mb-2 block font-semibold">
                Product ID
              </label>

              <input
                placeholder="Example: OV-001"
                className="w-full rounded-xl bg-[#08111d] p-4 outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Discord Username
              </label>

              <input
                placeholder="Example: Isaac#1234"
                className="w-full rounded-xl bg-[#08111d] p-4 outline-none"
              />
            </div>

            <button className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-black transition hover:bg-cyan-400">
              Check Order Status
            </button>

          </div>

        </div>

        <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-[#08111d] p-8">

          <h2 className="text-2xl font-bold text-cyan-400">
            Sample Status
          </h2>

          <div className="mt-6 space-y-5">

            <div className="flex items-center justify-between">
              <span>Payment Received</span>
              <span className="font-bold text-green-400">✅ Completed</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Order Verified</span>
              <span className="font-bold text-green-400">✅ Completed</span>
            </div>

            <div className="flex items-center justify-between">
              <span>In-Game Delivery</span>
              <span className="font-bold text-yellow-400">⏳ Pending</span>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}