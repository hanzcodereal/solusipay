import React, { useState } from "react";
import { View, Product } from "@/types";

interface BPJSProps {
  onNavigate: (view: View, product: Product) => void;
  onBack: () => void;
}

const BPJS: React.FC<BPJSProps> = ({ onNavigate, onBack }) => {
  const [participantId, setParticipantId] = useState("000123456789");
  const [isValidated, setIsValidated] = useState(false);

  const simulatedProduct: Product = {
    id: "bpjs-bill",
    nominal: "BPJS Oct 2023",
    price: 150000,
  };

  return (
    <div className="flex-1 bg-white dark:bg-slate-900 min-h-screen">
      <header className="px-5 py-4 flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800"
        >
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-bold">BPJS Kesehatan</h1>
      </header>

      <main className="px-5 pt-6">
        <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-4 mb-8 flex items-center gap-4 border border-emerald-100 dark:border-emerald-800/30">
          <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
            <span className="material-icons-round text-2xl">
              health_and_safety
            </span>
          </div>
          <p className="text-xs text-emerald-800 dark:text-emerald-400 font-bold leading-tight">
            Pay your national health insurance bill easily with zero extra fees.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">
              Participant ID
            </label>
            <input
              className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:border-primary focus:ring-0 transition-all text-lg font-black tracking-widest"
              placeholder="e.g. 000xxx"
              type="tel"
              value={participantId}
              onChange={(e) => setParticipantId(e.target.value)}
            />
          </div>

          {!isValidated ? (
            <button
              onClick={() => setIsValidated(true)}
              className="w-full bg-primary text-white py-4 rounded-2xl font-extrabold shadow-lg shadow-primary/20 active:scale-95 transition-all"
            >
              Check Bill
            </button>
          ) : (
            <div className="animate-fade-in space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">
                    Customer Data
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                    Verified
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">Name</span>
                    <span className="text-sm font-black text-slate-900 dark:text-white">
                      Siti Aminah
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">Month Count</span>
                    <span className="text-sm font-black text-slate-900 dark:text-white">
                      1 Month (Oct)
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-dashed border-slate-100 dark:border-slate-700 pt-4">
                    <span className="text-base font-bold text-slate-900 dark:text-white">
                      Total Bill
                    </span>
                    <span className="text-xl font-black text-primary">
                      Rp 150.000
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate("checkout", simulatedProduct)}
                className="w-full bg-primary text-white py-4 rounded-2xl font-extrabold shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Pay Bill
                <span className="material-icons-round">chevron_right</span>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export { BPJS };
