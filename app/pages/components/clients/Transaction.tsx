import { TransactionItemProps } from "../../interfaces";

const TransactionItem = ({
  title,
  date,
  amount,
  type,
}: TransactionItemProps) => (
  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 flex items-center justify-between border border-slate-100 dark:border-slate-700 shadow-sm">
    <div className="flex items-center space-x-3">
      <div
        className={`w-10 h-10 rounded-full ${type === "bolt" ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"} flex items-center justify-center`}
      >
        <span className="material-icons-round text-xl">{type}</span>
      </div>
      <div>
        <p className="text-sm font-bold text-slate-900 dark:text-white">
          {title}
        </p>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
          {date}
        </p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-bold text-slate-900 dark:text-white">
        Rp {amount}
      </p>
      <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-bold uppercase tracking-tight">
        Success
      </span>
    </div>
  </div>
);

export const Transaction = () => {
  return (
    <section className="mt-8 px-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-900 dark:text-white">
          Transaksi Terakhir
        </h3>
      </div>
      <div className="space-y-3">
        <TransactionItem
          title="Token PLN - 829103..."
          date="Today, 09:42 AM"
          amount="102.500"
          type="bolt"
        />
        <TransactionItem
          title="Pulsa Telkomsel - 0812..."
          date="Yesterday, 04:15 PM"
          amount="50.000"
          type="smartphone"
        />
      </div>
    </section>
  );
};
