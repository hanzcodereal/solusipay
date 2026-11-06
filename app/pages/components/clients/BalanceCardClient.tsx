"use client";

interface Props {
  isLogin: boolean;
}

export default function BalanceCardClient({ isLogin }: Props) {
  if (!isLogin) return null;

  return (
    <div className="px-6 -mt-14 relative z-20">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-xl flex items-center justify-between border border-primary/5">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
            <span className="material-icons-round">account_balance_wallet</span>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-tighter">
              Saldo
            </p>
            <p className="text-slate-900 dark:text-white text-xl font-extrabold tracking-tight">
              Rp 2.450.000
            </p>
          </div>
        </div>

        <button className="bg-primary text-white text-sm font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 active:scale-95 transition-transform">
          <span className="material-icons-round text-sm">add</span>
          Top Up
        </button>
      </div>
    </div>
  );
}
