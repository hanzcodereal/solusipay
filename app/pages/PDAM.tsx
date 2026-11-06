import React, { useState } from "react";
import { View, Product } from "@/types";

interface PDAMProps {
  onNavigate: (view: View, product: Product) => void;
  onBack: () => void;
}

const PDAM: React.FC<PDAMProps> = ({ onNavigate, onBack }) => {
  const [region, setRegion] = useState("DKI Jakarta (PAM JAYA)");
  const [customerId, setCustomerId] = useState("");

  const simulatedProduct: Product = {
    id: "pdam-bill",
    nominal: "PDAM Oct Bill",
    price: 85500,
  };

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark min-h-screen">
      <header className="px-5 py-4 flex items-center gap-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50"
        >
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-bold">PDAM Water Bill</h1>
      </header>

      <main className="px-5 pt-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">
              Select Region
            </label>
            <div className="relative">
              <select
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 focus:border-primary focus:ring-0 appearance-none text-sm font-bold"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option>DKI Jakarta (PAM JAYA)</option>
                <option>Kota Bekasi (Tirta Patriot)</option>
                <option>Kota Bogor (Tirta Pakuan)</option>
                <option>Kota Bandung (Tirtawening)</option>
              </select>
              <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                expand_more
              </span>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">
              Customer Number
            </label>
            <input
              className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 focus:border-primary focus:ring-0 transition-all font-black text-lg"
              placeholder="e.g. 10293847"
              type="text"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </div>
        </div>

        {customerId.length > 5 && (
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 animate-fade-in">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-slate-500 font-bold">
                Customer Name
              </span>
              <span className="text-sm font-black text-slate-900 dark:text-white">
                Bapak Wahyu
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-sm text-slate-500 font-bold">
                Billing Period
              </span>
              <span className="text-sm font-black text-slate-900 dark:text-white">
                October 2023
              </span>
            </div>
            <div className="border-t border-dashed pt-4 flex justify-between items-center">
              <div>
                <span className="text-xs text-slate-400 font-bold block uppercase tracking-tight">
                  Total Payment
                </span>
                <span className="text-2xl font-black text-primary">
                  Rp 85.500
                </span>
              </div>
              <button
                onClick={() => onNavigate("checkout", simulatedProduct)}
                className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20"
              >
                Pay Now
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export { PDAM };
