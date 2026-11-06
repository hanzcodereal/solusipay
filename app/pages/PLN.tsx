import React, { useState } from "react";
import { View, Product } from "@/types";

interface PLNProps {
  onNavigate: (view: View, product: Product) => void;
  onBack: () => void;
}

const PLN_PRODUCTS: Product[] = [
  { id: "p1", nominal: "20.000", price: 21500 },
  { id: "p2", nominal: "50.000", price: 51500 },
  { id: "p3", nominal: "100.000", price: 101500 },
  { id: "p4", nominal: "200.000", price: 201500 },
  { id: "p5", nominal: "500.000", price: 501500 },
  { id: "p6", nominal: "1.000.000", price: 1001500 },
];

const PLN: React.FC<PLNProps> = ({ onNavigate, onBack }) => {
  const [meterId, setMeterId] = useState("53120984752");
  const [selectedId, setSelectedId] = useState("p1");

  const activeProduct =
    PLN_PRODUCTS.find((p) => p.nominal === selectedId) || PLN_PRODUCTS[0];

  return (
    <div className="flex-1 bg-white dark:bg-slate-900 min-h-screen">
      <header className="px-5 py-4 flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-bold">PLN Token</h1>
      </header>

      <div className="px-5 pb-40">
        {/* Service Card */}
        <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-4 mb-6 border border-primary/10 flex items-center gap-4">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
            <span className="material-icons-round text-2xl">bolt</span>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white">
              Electricity Token
            </h2>
            <p className="text-[11px] text-slate-500 leading-tight">
              Top up your prepaid electricity meter easily.
            </p>
          </div>
        </div>

        {/* Input */}
        <div className="space-y-4 mb-8">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">
              Meter Number / Customer ID
            </label>
            <div className="relative group">
              <input
                className="w-full px-4 py-4 rounded-2xl border-2 border-primary/20 bg-white dark:bg-slate-800 focus:border-primary focus:ring-0 transition-all text-lg font-extrabold tracking-widest placeholder:tracking-normal"
                placeholder="e.g. 1234567890"
                type="tel"
                value={meterId}
                onChange={(e) => setMeterId(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="material-icons-round text-primary">
                  check_circle
                </span>
              </div>
            </div>
          </div>

          {/* Customer Validation */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">
                Customer Information
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-tight">
                Verified
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-base font-extrabold text-slate-900 dark:text-white">
                Budi Santoso
              </p>
              <p className="text-xs text-slate-500 font-medium">
                R1 / 900 VA • Meter: {meterId}
              </p>
            </div>
          </div>
        </div>

        {/* Amount Selection */}
        <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
          Select Amount
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {PLN_PRODUCTS.map((prod) => (
            <button
              key={prod.nominal}
              // onClick={() => setSelectedId(prod.label)}
              className={`relative p-4 rounded-xl text-left transition-all ${
                selectedId === prod.nominal
                  ? "border-2 border-primary bg-primary/5 shadow-lg"
                  : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800"
              }`}
            >
              {selectedId === prod.nominal && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <span className="material-icons-round text-white text-[14px]">
                    check
                  </span>
                </div>
              )}
              <p
                className={`text-[10px] font-bold mb-1 uppercase tracking-tighter ${selectedId === prod.nominal ? "text-primary" : "text-slate-400"}`}
              >
                Token
              </p>
              <p className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                {prod.nominal}
              </p>
              <p
                className={`text-sm font-bold ${selectedId === prod.nominal ? "text-primary" : "text-slate-600 dark:text-slate-400"}`}
              >
                Rp
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 px-5 pt-4 pb-10 flex flex-col gap-4 shadow-2xl z-50">
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
              Total Payment
            </span>
            <span className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Rp
            </span>
          </div>
          <div className="flex items-center gap-1 text-primary cursor-pointer">
            <span className="text-[10px] font-bold uppercase">Details</span>
            <span className="material-icons-round text-sm">expand_more</span>
          </div>
        </div>
        <button
          onClick={() => onNavigate("checkout", activeProduct)}
          className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          Pay Now
          <span className="material-icons-round">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export { PLN };
