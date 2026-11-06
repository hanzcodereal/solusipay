import React from "react";

interface HeaderTopUpProps {
  onBack: () => void;
}

export const HeaderTopUp: React.FC<HeaderTopUpProps> = ({ onBack }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 h-16 flex items-center justify-between">
      <button
        onClick={onBack}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="material-icons-round">arrow_back_ios_new</span>
      </button>
      <h1 className="text-lg font-bold">Top Up & Data</h1>
      <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
        <span className="material-icons-round">history</span>
      </button>
    </header>
  );
};
