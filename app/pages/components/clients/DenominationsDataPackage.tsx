import { useState } from "react";
import { Product, View } from "@/types";
import { ProdukAttributes } from "@/app/database/attributes";
import { idrFormated } from "@/app/utils";

interface DenominationsDataPackageProps {
  onNavigate: (view: View, product?: Product, phone?: string) => void;
  phone: string;
  data: ProdukAttributes[];
}

export const DenominationsDataPackage: React.FC<DenominationsDataPackageProps> = ({
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
        <div className="space-y-3">
          {data.map((prod) => (
            <button
              key={prod.kode}
              onClick={() => setSelected(prod.kode)}
              className={`w-full relative text-left p-5 rounded-2xl transition-all border-2 ${
                selected === prod.kode
                  ? "bg-primary/5 dark:bg-primary/10 border-primary shadow-lg ring-1 ring-primary/20"
                  : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-800"
              }`}
            >
              {prod.label && (
                <div className="absolute -top-2 right-4 px-2 py-0.5 rounded-full text-[8px] font-black bg-orange-500 text-white uppercase tracking-wider">
                  {prod.label}
                </div>
              )}
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {prod.nama}
                  </h3>
                  {prod.catatan && (
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {prod.catatan}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-primary font-black text-lg">
                    Rp {idrFormated(prod.harga_jual1 ?? 0)}
                  </p>
                  {prod.nominal && (
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      {idrFormated(prod.nominal)} MB
                    </p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-5 pt-4 pb-10 shadow-2xl z-50">
        <div className="flex items-center justify-between">
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
