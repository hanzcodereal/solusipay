"use client";

import { View } from "@/types";

export const BottomNav = ({
  onNavigate,
  current,
}: {
  onNavigate: (v: View) => void;
  current: View;
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 px-6 py-3 pb-8 flex justify-between items-center z-[100]">
      <button
        onClick={() => onNavigate("home")}
        className={`flex flex-col items-center ${current === "home" ? "text-primary" : "text-slate-400"}`}
      >
        <span className="material-icons-round">home</span>
        <span className="text-[10px] font-bold mt-1">Home</span>
      </button>
      <button
        onClick={() => onNavigate("history")}
        className={`flex flex-col items-center ${current === "history" ? "text-primary" : "text-slate-400"}`}
      >
        <span className="material-icons-round">receipt_long</span>
        <span className="text-[10px] font-bold mt-1">History</span>
      </button>
      <div className="relative -top-8">
        <button className="w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/40 flex items-center justify-center text-white border-4 border-background-light dark:border-background-dark active:scale-95 transition-all">
          <span className="material-icons-round text-2xl">qr_code_scanner</span>
        </button>
      </div>
      <button
        onClick={() => onNavigate("promos")}
        className={`flex flex-col items-center ${current === "promos" ? "text-primary" : "text-slate-400"}`}
      >
        <span className="material-icons-round">local_offer</span>
        <span className="text-[10px] font-bold mt-1">Promo</span>
      </button>
      <button
        onClick={() => onNavigate("profile")}
        className={`flex flex-col items-center ${current === "profile" ? "text-primary" : "text-slate-400"}`}
      >
        <span className="material-icons-round">person</span>
        <span className="text-[10px] font-bold mt-1">Profile</span>
      </button>
    </nav>
  );
};
