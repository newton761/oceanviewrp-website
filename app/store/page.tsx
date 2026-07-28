"use client";

import { useState } from "react";
import {
  CreditCard,
  Smartphone,
  ShieldCheck,
  Copy,
  X,
} from "lucide-react";

export default function PaymentPage() {
  const [showMoMo, setShowMoMo] = useState(false);

  const copyText = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <main className="min-h-screen bg-[#050B14] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}

        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            OceanView Market
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Secure <span className="text-cyan-400">Checkout</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Complete your approved purchase using one of our secure payment
            methods below.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Payment Options */}

          <div className="space-y-8 lg:col-span-2">

            {/* PayPal */}

            <div className="rounded-3xl border border-white/10 bg-[#07131D] p-8">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-[#0070BA]/10 p-4">
                  <CreditCard className="text-[#0070BA]" size={34} />
                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    PayPal
                  </h2>

                  <p className="text-gray-400">
                    International Payments
                  </p>

                </div>

              </div>

              <p className="mt-8 leading-8 text-gray-300">
                Pay securely using your PayPal account. After payment,
                return to your Discord purchase ticket and provide your
                PayPal transaction ID.
              </p>

              <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">

                <h3 className="font-bold text-yellow-300">
                  Important
                </h3>

                <p className="mt-3 text-gray-300">
                  Only send payment after a staff member has confirmed
                  your order and provided your final payment amount.
                </p>

                <div className="mt-4 rounded-xl bg-black/30 p-4">

                  <p className="text-sm text-gray-400">
                    Include this in the PayPal note:
                  </p>

                  <p className="mt-2 text-cyan-400">
                    Product ID + Discord Username
                  </p>

                </div>

              </div>

              <p className="mt-6 text-sm text-gray-500">
                PayPal payments are processed through our authorized
                payment account (Millicent Gyan).
              </p>

              <a
                href="https://paypal.me/MillicentGyan840"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex h-16 items-center justify-center rounded-xl bg-[#0070BA] text-lg font-bold transition hover:bg-[#005EA6]"
              >
                <CreditCard className="mr-3 h-5 w-5" />
                Pay Securely with PayPal
              </a>

            </div>

            {/* Mobile Money */}

            <div className="rounded-3xl border border-white/10 bg-[#07131D] p-8">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-yellow-500/10 p-4">
                  <Smartphone className="text-yellow-400" size={34} />
                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    MTN Mobile Money
                  </h2>

                  <p className="text-gray-400">
                    Local Payments (Ghana)
                  </p>

                </div>

              </div>

              <p className="mt-8 leading-8 text-gray-300">
                Use MTN Mobile Money if you're paying locally in Ghana.
              </p>

              <button
                onClick={() => setShowMoMo(true)}
                className="mt-8 flex h-16 w-full items-center justify-center rounded-xl bg-[#FFCC00] text-lg font-bold text-black transition hover:bg-[#F5C400]"
              >
                <Smartphone className="mr-3 h-5 w-5" />
                View MTN Payment Details
              </button>

            </div>

          </div>

          {/* Sidebar */}

          <div className="rounded-3xl border border-white/10 bg-[#07131D] p-8 h-fit sticky top-24">

            <h2 className="text-3xl font-bold text-cyan-400">
              Payment Guide
            </h2>

            <div className="mt-8 space-y-6">

              <div>

                <p className="font-semibold">
                  Step 1
                </p>

                <p className="mt-2 text-gray-400">
                  Browse the Marketplace in Discord.
                </p>

              </div>

              <div>

                <p className="font-semibold">
                  Step 2
                </p>

                <p className="mt-2 text-gray-400">
                  Open a purchase ticket and receive your Product ID.
                </p>

              </div>

              <div>

                <p className="font-semibold">
                  Step 3
                </p>

                <p className="mt-2 text-gray-400">
                  Complete payment using PayPal or MTN Mobile Money.
                </p>

              </div>

              <div>

                <p className="font-semibold">
                  Step 4
                </p>

                <p className="mt-2 text-gray-400">
                  Return to your Discord ticket with your transaction ID or
                  Mobile Money reference number and screenshot.
                </p>

              </div>

              <div className="rounded-xl bg-cyan-500/10 p-5">

                <div className="flex items-center gap-2">

                  <ShieldCheck className="text-cyan-400" size={20} />

                  <h3 className="font-bold text-cyan-400">
                    Secure Payments
                  </h3>

                </div>

                <p className="mt-3 text-sm text-gray-300">
                  OceanView RP never stores your payment information.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MTN Modal */}

      {showMoMo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

          <div className="w-full max-w-md rounded-3xl bg-[#07131D] p-8">

            <div className="flex items-center justify-between">

              <h2 className="text-3xl font-bold">
                MTN Mobile Money
              </h2>

              <button onClick={() => setShowMoMo(false)}>
                <X />
              </button>

            </div>

            <div className="mt-8 space-y-6">

              <div>

                <p className="text-gray-500">
                  Account Name
                </p>

                <div className="mt-2 flex items-center justify-between rounded-xl bg-black/20 p-4">

                  <span>Isaac Koranteng</span>

                  <button onClick={() => copyText("Isaac Koranteng")}>
                    <Copy size={18} />
                  </button>

                </div>

              </div>

              <div>

                <p className="text-gray-500">
                  MTN Number
                </p>

                <div className="mt-2 flex items-center justify-between rounded-xl bg-black/20 p-4">

                  <span>0544690336</span>

                  <button onClick={() => copyText("0544690336")}>
                    <Copy size={18} />
                  </button>

                </div>

              </div>

            </div>

            <div className="mt-8 rounded-xl bg-yellow-500/10 p-5">

              <p className="text-sm leading-7 text-gray-300">
                After sending payment, return to your Discord purchase
                ticket and provide:
              </p>

              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Mobile Money Reference Number</li>
                <li>• Screenshot of the payment</li>
              </ul>

            </div>

            <button
              onClick={() => setShowMoMo(false)}
              className="mt-8 w-full rounded-xl bg-cyan-500 py-4 font-bold transition hover:bg-cyan-400"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </main>
  );
}