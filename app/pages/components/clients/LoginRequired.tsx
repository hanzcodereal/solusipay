"use client";

import React from "react";
import { View } from "@/types";

interface LoginRequiredProps {
  description: string;
  onNavigate: (view: View) => void;
  onBack: () => void;
}

export const LoginRequired: React.FC<LoginRequiredProps> = ({
  description,
  onNavigate,
  onBack,
}) => {
  return (
    <div className="flex-1 bg-white dark:bg-slate-900 flex flex-col items-center justify-center p-8 text-center min-h-screen">
      <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
        <span className="material-icons-round text-4xl text-slate-400">
          lock
        </span>
      </div>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Login Dibutuhkan
      </h2>
      <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs">
        {description}
      </p>
      <button
        onClick={() => onNavigate("login")}
        className="w-full max-w-xs bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-all"
      >
        Login
      </button>
      <button
        onClick={onBack}
        className="mt-4 text-slate-500 font-semibold text-sm hover:underline"
      >
        Kembali
      </button>
    </div>
  );
};
