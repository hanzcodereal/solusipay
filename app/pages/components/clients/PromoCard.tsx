import { PromoCardProps } from "../../interfaces";

const Promo = ({
  title,
  badge,
  icon,
  bgColor,
  badgeColor = "text-primary",
}: PromoCardProps) => (
  <div
    className={`min-w-[280px] h-36 ${bgColor} rounded-2xl flex items-center justify-between p-5 relative overflow-hidden shrink-0 active:scale-[0.98] transition-all cursor-pointer`}
  >
    <div className="relative z-10 w-2/3 text-left">
      <p className={`text-[10px] font-bold ${badgeColor} mb-1`}>{badge}</p>
      <p className="text-sm font-extrabold text-slate-800 leading-tight mb-3">
        {title}
      </p>
      <div
        className={`inline-block text-white bg-slate-900 bg-opacity-80 text-[10px] font-bold py-1.5 px-4 rounded-full`}
      >
        Claim Now
      </div>
    </div>
    <div
      className={`absolute -right-4 -bottom-4 w-32 h-32 ${bgColor} dark:bg-opacity-30 rounded-full flex items-center justify-center`}
    >
      <span
        className={`material-icons-round text-primary/30 text-6xl opacity-30`}
      >
        {icon}
      </span>
    </div>
  </div>
);

export const PromoCard = () => {
  return (
    <section className="mt-8">
      <div className="px-6 flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-900 dark:text-white">Hot Promos</h3>
        <button className="text-primary text-sm font-semibold">View All</button>
      </div>
      <div className="flex overflow-x-auto hide-scrollbar gap-4 px-6">
        <Promo
          title="Payment for Electricity Token"
          badge="CASHBACK 50%"
          icon="electric_bolt"
          bgColor="bg-primary/10"
        />
        <Promo
          title="Extra Data for Video Streaming"
          badge="INTERNET HEMAT"
          icon="movie"
          bgColor="bg-green-100"
          badgeColor="text-green-600"
        />
      </div>
    </section>
  );
};
