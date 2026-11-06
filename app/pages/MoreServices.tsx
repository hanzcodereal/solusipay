import React from "react";
import { View } from "@/types";
import { BottomNav } from "./components";

interface MoreServicesProps {
  onNavigate: (view: View) => void;
  onBack: () => void;
}

const CATEGORIES = [
  {
    name: "Top Up & Data",
    items: [
      {
        id: "topup",
        icon: "smartphone",
        label: "Pulsa",
        color: "bg-orange-100",
        text: "text-orange-600",
      },
      {
        id: "data_package",
        icon: "wifi_tethering",
        label: "Paket Data",
        color: "bg-blue-100",
        text: "text-blue-600",
      },
      {
        id: "emoney",
        icon: "account_balance_wallet",
        label: "E-Wallet",
        color: "bg-indigo-100",
        text: "text-indigo-600",
      },
      {
        id: "roaming",
        icon: "public",
        label: "Roaming",
        color: "bg-emerald-100",
        text: "text-emerald-600",
      },
    ],
  },
  {
    name: "Bills & Utilities",
    items: [
      {
        id: "pln",
        icon: "bolt",
        label: "PLN",
        color: "bg-yellow-100",
        text: "text-yellow-600",
      },
      {
        id: "pdam",
        icon: "water_drop",
        label: "PDAM",
        color: "bg-cyan-100",
        text: "text-cyan-600",
      },
      {
        id: "bpjs",
        icon: "health_and_safety",
        label: "BPJS",
        color: "bg-green-100",
        text: "text-green-600",
      },
      {
        id: "telkom",
        icon: "phone_in_talk",
        label: "Telkom",
        color: "bg-red-100",
        text: "text-red-600",
      },
      {
        id: "internet_tv",
        icon: "tv",
        label: "Internet & TV",
        color: "bg-slate-100",
        text: "text-slate-600",
      },
      {
        id: "pbb",
        icon: "home",
        label: "PBB",
        color: "bg-stone-100",
        text: "text-stone-600",
      },
    ],
  },
  {
    name: "Entertainment",
    items: [
      {
        id: "games",
        icon: "sports_esports",
        label: "Games",
        color: "bg-purple-100",
        text: "text-purple-600",
      },
      {
        id: "vouchers",
        icon: "card_giftcard",
        label: "Vouchers",
        color: "bg-pink-100",
        text: "text-pink-600",
      },
      {
        id: "cinema",
        icon: "movie",
        label: "Cinema",
        color: "bg-slate-900",
        text: "text-white",
      },
    ],
  },
];

const MoreServices: React.FC<MoreServicesProps> = ({ onNavigate, onBack }) => {
  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark min-h-screen pb-32">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-5 h-16 flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-bold">All Services</h1>
      </header>

      <main className="px-5 pt-6 space-y-8">
        <div className="relative">
          <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>
          <input
            className="w-full bg-white dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary shadow-sm"
            placeholder="Search service..."
            type="text"
          />
        </div>

        {CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 ml-1">
              {cat.name}
            </h2>
            <div className="grid grid-cols-4 gap-y-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
              {cat.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id as View)}
                  className="flex flex-col items-center gap-2 active:scale-90 transition-transform"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} dark:bg-opacity-20 flex items-center justify-center ${item.text}`}
                  >
                    <span className="material-icons-round">{item.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 text-center leading-tight">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </main>

      <BottomNav onNavigate={onNavigate} current="home" />
    </div>
  );
};

export { MoreServices };
