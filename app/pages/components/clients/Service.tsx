"use client";

import { View } from "@/types";
import { ServiceIconProps } from "../../interfaces";

const ServiceIcon = ({
  icon,
  label,
  color,
  textColor,
  onClick,
}: ServiceIconProps & { onClick?: () => void }) => (
  <div
    className="flex flex-col items-center gap-2 active:scale-90 transition-transform cursor-pointer"
    onClick={onClick}
  >
    <div
      className={`w-14 h-14 rounded-2xl ${color} dark:bg-opacity-20 flex items-center justify-center ${textColor}`}
    >
      <span className="material-icons-round">{icon}</span>
    </div>
    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400">
      {label}
    </span>
  </div>
);

export const Service = ({
  onNavigate,
}: {
  onNavigate: (view: View) => void;
}) => {
  return (
    <section className="mt-8 px-6">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 dark:text-white">Layanan</h3>
      </div>
      <div className="grid grid-cols-4 gap-y-6">
        <ServiceIcon
          icon="smartphone"
          label="Pulsa"
          color="bg-orange-100"
          textColor="text-orange-600"
          onClick={() => onNavigate("topup")}
        />
        <ServiceIcon
          icon="wifi_tethering"
          label="Paket Data"
          color="bg-blue-100"
          textColor="text-blue-600"
          onClick={() => onNavigate("data_package")}
        />
        <ServiceIcon
          icon="bolt"
          label="Listrik PLN"
          color="bg-yellow-100"
          textColor="text-yellow-600"
          onClick={() => onNavigate("pln")}
        />
        <ServiceIcon
          icon="health_and_safety"
          label="BPJS"
          color="bg-green-100"
          textColor="text-green-600"
          onClick={() => onNavigate("bpjs")}
        />
        <ServiceIcon
          icon="water_drop"
          label="PDAM"
          color="bg-cyan-100"
          textColor="text-cyan-600"
          onClick={() => onNavigate("pdam")}
        />
        <ServiceIcon
          icon="sports_esports"
          label="Games"
          color="bg-purple-100"
          textColor="text-purple-600"
          onClick={() => onNavigate("games")}
        />
        <ServiceIcon
          icon="account_balance"
          label="E-Money"
          color="bg-red-100"
          textColor="text-red-600"
          onClick={() => onNavigate("emoney")}
        />
        <ServiceIcon
          icon="grid_view"
          label="More"
          color="bg-slate-100"
          textColor="text-slate-600"
          onClick={() => onNavigate("more")}
        />
      </div>
    </section>
  );
};
