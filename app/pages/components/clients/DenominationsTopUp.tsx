import { useState } from "react";
import { Product, View } from "@/types";
import { ProdukAttributes } from "@/app/database/attributes";
import { idrFormated } from "@/app/utils";
// Removed ProdukAttributes import as it's no longer used

interface TopUpProps {
  // Make product optional to match App.tsx navigateTo signature and allow passing to BottomNav
  onNavigate: (view: View, product?: Product, phone?: string) => void;
  phone: string;
  data: ProdukAttributes[];
}

export const DenominationsTopUp: React.FC<TopUpProps> = ({
  onNavigate,
  phone,
  data,
}) => {
  const [selected, setSelected] = useState<string>(data[0]?.kode || "");

  const activeProduct =
    data.find((p) => p.kode === selected) || data[0] || null;

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center p-8 text-slate-400">
        No products available
      </div>
    );
  }

  return (
    <section>
      <section className="px-4">
        <h2 className="text-sm font-bold mb-4 text-slate-700 dark:text-slate-300">
          Pilih Nominal
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {data.map((prod) => (
            <button
              key={prod.kode}
              onClick={() => setSelected(prod.kode)}
              className={`relative text-left p-4 rounded-xl transition-all ${
                selected === prod.kode
                  ? "bg-primary/5 dark:bg-primary/10 border-2 border-primary shadow-lg ring-1 ring-primary/20"
                  : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {prod.label && (
                <div
                  className={`absolute -top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase ${
                    prod.label === "BEST SELLER"
                      ? "bg-orange-500 text-white"
                      : "bg-primary text-white"
                  }`}
                >
                  {prod.label}
                </div>
              )}
              <div className="text-sm font-extrabold mb-2 dark:text-white">
                {prod.nama}
              </div>
              <div className="text-xs font-semibold text-slate-400 mb-1">
                {idrFormated(prod.nominal ?? 0)}
              </div>
              <div
                className={`text-sm font-bold ${selected === prod.kode ? "text-primary" : "text-slate-400"}`}
              >
                Rp {idrFormated(prod.harga_jual1 ?? 0)}
              </div>
            </button>
          ))}
        </div>
      </section>
      <div className="fixed bottom-20 left-0 right-0 max-w-[430px] mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-5 pt-4 pb-4 shadow-2xl z-50">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              Total Pembayaran
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
              Rp {idrFormated(activeProduct?.harga_jual1 ?? 0)}
            </div>
          </div>
          <button
            onClick={() =>
              activeProduct && onNavigate("checkout", activeProduct, phone)
            }
            disabled={!activeProduct}
            className="px-10 bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 disabled:bg-slate-300"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};
