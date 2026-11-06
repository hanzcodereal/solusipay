interface PhoneInputProps {
  phone: string;
  setPhone: (phone: string) => void;
}
export const PhoneInputTopUp: React.FC<PhoneInputProps> = ({
  phone,
  setPhone,
}) => {
  return (
    <section className="p-4">
      <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Nomor Tujuan
        </label>

        <div className="relative flex items-center">
          {/* Search Icon */}
          <span className="absolute left-3 text-slate-400 dark:text-slate-300 material-icons-round">
            search
          </span>

          <input
            className="w-full pl-10 pr-4 py-3 text-lg font-bold rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-slate-300 dark:placeholder:text-slate-400 transition-all"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="08xx xxxx xxxx"
            type="tel"
          />
        </div>
      </div>
    </section>
  );
};
