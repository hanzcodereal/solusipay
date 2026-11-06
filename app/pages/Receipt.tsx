import React from "react";
import { View, Product } from "@/types";
import { ReceiptRowProps } from "./interfaces";

interface ReceiptProps {
  product: Product | null;
  phone: string;
  onNavigate: (view: View) => void;
}

const Receipt: React.FC<ReceiptProps> = ({ product, phone, onNavigate }) => {
  const adminFee = 1000;

  // Safely get properties from either BaseProduct (legacy) or ProdukAttributes (database)
  const isBaseProduct = product && "id" in product;
  const price = product && (isBaseProduct ? product.price : product.label || 0);
  const nominal =
    product && (isBaseProduct ? product.nominal : resultNominal(product));

  const totalPrice = (Number(price) || 0) + adminFee;

  function resultNominal(p: Product) {
    if ("nama" in p) {
      return p.nama || p.nominal?.toString() || "";
    }
    return p.nominal || "";
  }

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark min-h-screen flex flex-col px-6 pt-12 pb-10">
      <div className="flex flex-col items-center mb-8 animate-fade-in">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
          <span className="material-icons-round text-green-500 text-5xl">
            check_circle
          </span>
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          Pembayaran Berhasil
        </h1>
        <p className="text-slate-500 text-sm text-center mt-1 font-medium">
          Transaksi Anda telah berhasil diproses.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700/50 overflow-hidden relative mb-8">
        <div className="h-1.5 w-full bg-primary"></div>
        <div className="p-6">
          <div className="space-y-4">
            <ReceiptRow label="ID Transaksi" value="#TRX-992038411" highlight />
            <ReceiptRow label="Tanggal & Waktu" value="24 Oct 2023, 14:32" />
            <div className="flex justify-between items-start">
              <span className="text-sm text-slate-500 font-medium">Produk</span>
              <div className="text-right">
                <span className="text-sm font-extrabold block dark:text-white">
                  Telkomsel {nominal}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">
                  {phone}
                </span>
              </div>
            </div>
            <ReceiptRow label="Metode Pembayaran" value="GOPAY Wallet" />
          </div>

          <div className="relative my-8">
            <div className="absolute top-1/2 left-[-32px] w-6 h-6 rounded-full bg-background-light dark:bg-background-dark -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-[-32px] w-6 h-6 rounded-full bg-background-light dark:bg-background-dark -translate-y-1/2"></div>
            <div className="border-t border-dashed border-slate-200 dark:border-slate-700 w-full"></div>
          </div>

          <div className="space-y-3">
            <ReceiptRow
              label="Harga"
              value={`Rp ${Number(price).toLocaleString("id-ID")}`}
            />
            <ReceiptRow
              label="Biaya Admin"
              value={`Rp ${adminFee.toLocaleString("id-ID")}`}
            />
            <div className="flex justify-between items-center pt-2">
              <span className="text-base font-extrabold text-slate-900 dark:text-white">
                Total Pembayaran
              </span>
              <span className="text-xl font-extrabold text-primary">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-t border-slate-100 dark:border-slate-700/50">
          <div className="flex items-center gap-3">
            <span className="material-icons-round text-primary text-xl">
              verified_user
            </span>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold leading-tight">
              Ini adalah bukti pembayaran digital resmi. Harap simpan ini untuk
              arsip Anda sebagai bukti pembayaran.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-3">
        <button className="w-full bg-primary text-white font-extrabold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">
          <span className="material-icons-round text-xl">file_download</span>
          Download Bukti Pembayaran
        </button>
        <button
          onClick={() => onNavigate("home")}
          className="w-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-extrabold py-4 rounded-2xl border border-slate-200 dark:border-slate-700 active:scale-[0.98] transition-all"
        >
          Kembali Ke Beranda
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-slate-400 font-medium">
          Punya kendala?{" "}
          <button className="text-primary font-bold hover:underline">
            Hubungi Support
          </button>
        </p>
      </div>
    </div>
  );
};

const ReceiptRow = ({ label, value, highlight }: ReceiptRowProps) => (
  <div className="flex justify-between items-center">
    <span className="text-sm text-slate-500 font-medium">{label}</span>
    <span
      className={`text-sm font-extrabold ${highlight ? "text-primary" : "text-slate-900 dark:text-white"}`}
    >
      {value}
    </span>
  </div>
);

export { Receipt };
