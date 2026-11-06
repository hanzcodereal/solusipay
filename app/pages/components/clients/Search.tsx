export const Search = () => {
  return (
    <div className="relative z-10">
      <div className="relative">
        <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          search
        </span>
        <input
          className="w-full bg-white dark:bg-slate-900 border-none rounded-xl py-3.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-white/50 transition-all shadow-lg"
          placeholder="Find services or bills..."
          type="text"
        />
      </div>
    </div>
  );
};
