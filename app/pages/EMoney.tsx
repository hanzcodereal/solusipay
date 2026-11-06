import React, { useState } from "react";
import { View, Product } from "@/types";
import Image from "next/image";

interface EMoneyProps {
  onNavigate: (view: View, product: Product) => void;
  onBack: () => void;
}

const WALLETS = [
  {
    id: "gopay",
    name: "GoPay",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9Qo95PQSfwwocJhCm6a9sQSAzy5BHi0vkwm2wwG9B_EAI7hPbEwHJx-nBzZSH1BOI8ABk19Xy9tDMu3OsMRvy958HuKPO31orIyqJZXtU9H463MCdc9D-jWImNICfSCJR8QLpxBFOZkbVFD0qfGl6b2sMtxC6qdQ9vlBBmJ8Uz0KgtO4b4-RMNnEFf_0K2TgZ0pJKuALBIqi6lO8j2YCTRk3dfxZqdOlVXOPi9AYs_c6p3vE0bBBHuGW_YiEcS6fb0YO22kbOg",
  },
  {
    id: "ovo",
    name: "OVO",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeqGsPZyngSP4N7-XonV53b8cTvF-ldfdFO1ocRKUFUzk3J6RANJmfSIg4uJoo81meSuMHUDHh6bt5msqtvne-bzlVguDjc9iAmQ80u8oar_qTPBMifzrqeFJMEfDSrYy-PIzuzKTx7KbbWjES9PbSF_xgRJe7q4P8uLsyhoISPd4AQt8wMJ7ukuS03EyUJypTrZDhsW2ZEfpw7QG5V8SXfEvZcZhAq7XKCTSJCG5DtoM3xTaMQtaDjtv6CSicNEa_iaMLcUWiIQ",
  },
  {
    id: "dana",
    name: "DANA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg",
  },
  {
    id: "shopee",
    name: "ShopeePay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/ShopeePay_logo.svg",
  },
];

const NOMINALS: Product[] = [
  { id: "e1", nominal: "20.000", price: 21500 },
  { id: "e2", nominal: "50.000", price: 51500 },
  { id: "e3", nominal: "100.000", price: 101500 },
  { id: "e4", nominal: "200.000", price: 201500 },
];

const EMoney: React.FC<EMoneyProps> = ({ onNavigate, onBack }) => {
  const [selectedWallet, setSelectedWallet] = useState("gopay");
  const [selectedNominal, setSelectedNominal] = useState("e2");
  const [phone, setPhone] = useState("0812 3456 7890");

  const activeProduct =
    NOMINALS.find((p) => p.label === selectedNominal) || NOMINALS[0];

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 h-16 flex items-center justify-between">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full"
        >
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold">E-Money Top Up</h1>
        <div className="w-10"></div>
      </header>

      <main className="pb-40">
        <section className="p-4 grid grid-cols-4 gap-3">
          {WALLETS.map((w) => (
            <button
              key={w.id}
              onClick={() => setSelectedWallet(w.id)}
              className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                selectedWallet === w.id
                  ? "bg-primary/5 border-primary shadow-sm"
                  : "bg-white dark:bg-slate-800 border-transparent"
              }`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src={w.logo}
                  alt={w.name}
                  className="max-w-full max-h-full object-contain"
                  height={40}
                  width={40}
                />
              </div>
              <span className="text-[10px] font-black uppercase text-slate-500">
                {w.name}
              </span>
            </button>
          ))}
        </section>

        <section className="px-4 mb-8">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
              Account Number / Phone
            </label>
            <input
              className="w-full bg-transparent border-none p-0 text-xl font-black focus:ring-0"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
            />
          </div>
        </section>

        <section className="px-4">
          <h2 className="text-sm font-black text-slate-700 dark:text-slate-300 mb-4 px-1">
            Select Amount
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {NOMINALS.map((nom) => (
              <button
                key={nom.label}
                // onClick={() => setSelectedNominal(nom.label)}
                className={`p-5 rounded-2xl text-left border-2 transition-all ${
                  selectedNominal === nom.label
                    ? "bg-primary/5 border-primary shadow-md"
                    : "bg-white dark:bg-slate-800 border-transparent"
                }`}
              >
                <p className="text-xs text-slate-400 font-bold mb-1 uppercase tracking-tight">
                  Top Up
                </p>
                <p className="text-xl font-black text-slate-900 dark:text-white mb-2">
                  {nom.nominal}
                </p>
                <p
                  className={`text-sm font-bold ${selectedNominal === nom.label ? "text-primary" : "text-slate-500"}`}
                >
                  Rp
                </p>
              </button>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-5 pt-4 pb-10 shadow-2xl z-50">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Total Pay
            </span>
            <p className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
              Rp
            </p>
          </div>
          <button
            onClick={() => onNavigate("checkout", activeProduct)}
            className="bg-primary text-white px-10 py-4 rounded-xl font-black shadow-lg shadow-primary/30"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export { EMoney };
