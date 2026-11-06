import React, { useState } from "react";
import Image from "next/image";
import { BottomNav } from "./components";
import { CheckoutProps, PaymentOptionProps } from "./interfaces";

const Checkout: React.FC<CheckoutProps> = ({
  product,
  phone,
  onNavigate,
  onBack,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("gopay");
  const adminFee = 2000;

  // Safely get properties from either BaseProduct (legacy) or ProdukAttributes (database)
  const isBaseProduct = product && "id" in product;
  const price =
    product && (isBaseProduct ? product.harga_jual1 : product.harga_jual1 || 0);
  const nominal =
    product && (isBaseProduct ? product.nominal : product.label || "");

  const totalPrice = (Number(price) || 0) + adminFee;

  if (!product) {
    return <div className="p-10 text-center">No product selected</div>;
  }

  return (
    <div className="flex-1 bg-white dark:bg-slate-900 min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-icons-round">chevron_left</span>
        </button>
        <h1 className="text-lg font-extrabold tracking-tight">Checkout</h1>
        <div className="w-10"></div>
      </header>

      <main className="pb-56 px-5 pt-6 space-y-6">
        <section className="space-y-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">
            Ringkasan Order
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 p-2 flex items-center justify-center overflow-hidden">
                <Image
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxlJa5vELaX9QoroXwPLjg5Zd1mv2mZ5yWv17pw9zbOy8sHd5ZLkDjZkH2fJPBNZjWjgM6JeGquKNnViE4vVAzqBRGPSRCfu8HcUsYDzWzuaJacWrt-uxGxBYPYB2V9LL8R_iBAa0chaTXG19Fm3jCDInssduM0M2--aQkt3_jcOy-ZKpLunvz8l_e4f5sMWEGsm8c8yzraf3jemECAfrYThtYqmda8iSRCNNECJzig0atMcH-etaL6LkfFIkw0Nrx0fyrpGSssg"
                  alt="Telkomsel"
                  height={40}
                  width={40}
                />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 dark:text-white">
                  {nominal}
                </p>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">
                  Pembelian • {phone}
                </p>
              </div>
            </div>
            <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Harga</span>
                <span className="text-slate-900 dark:text-slate-300 font-extrabold">
                  Rp {Number(price).toLocaleString("id-ID")}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Admin Fee</span>
                <span className="text-slate-900 dark:text-slate-300 font-extrabold">
                  Rp {adminFee.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">
            Metode Pembayaran
          </h2>
          <div className="space-y-3">
            <PaymentOption
              id="wallet"
              name="MD Balance"
              desc="Available: Rp 2.450.000"
              selected={paymentMethod === "wallet"}
              onClick={setPaymentMethod}
              logo="https://fonts.gstatic.com/s/i/materialiconsround/account_balance_wallet/v20/24px.svg"
            />
            <PaymentOption
              id="gopay"
              name="GoPay"
              desc="Connected"
              selected={paymentMethod === "gopay"}
              onClick={setPaymentMethod}
              logo="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ9Qo95PQSfwwocJhCm6a9sQSAzy5BHi0vkwm2wwG9B_EAI7hPbEwHJx-nBzZSH1BOI8ABk19Xy9tDMu3OsMRvy958HuKPO31orIyqJZXtU9H463MCdc9D-jWImNICfSCJR8QLpxBFOZkbVFD0qfGl6b2sMtxC6qdQ9vlBBmJ8Uz0KgtO4b4-RMNnEFf_0K2TgZ0pJKuALBIqi6lO8j2YCTRk3dfxZqdOlVXOPi9AYs_c6p3vE0bBBHuGW_YiEcS6fb0YO22kbOg"
            />
          </div>
        </section>
      </main>

      <footer className="fixed bottom-20 left-0 right-0 max-w-[430px] mx-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-6 shadow-2xl z-50">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-extrabold">
              Total Pembayaran
            </p>
            <p className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
              Rp {totalPrice.toLocaleString("id-ID")}
            </p>
          </div>
          <button
            onClick={() => onNavigate("receipt")}
            className="px-8 py-4 bg-primary text-white rounded-2xl font-black shadow-xl shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Beli Sekarang
          </button>
        </div>
      </footer>

      <BottomNav onNavigate={onNavigate} current="home" />
    </div>
  );
};

const PaymentOption = ({
  id,
  name,
  desc,
  selected,
  onClick,
  logo,
}: PaymentOptionProps) => (
  <button
    onClick={() => onClick(id)}
    className={`w-full flex items-center p-4 rounded-2xl border-2 transition-all shadow-sm ${
      selected
        ? "bg-primary/5 border-primary ring-1 ring-primary/20"
        : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-800"
    }`}
  >
    <div className="w-10 h-10 flex items-center justify-center mr-4">
      <Image
        className={`w-full h-full object-contain ${id === "wallet" ? "filter grayscale brightness-50 contrast-150" : ""}`}
        src={logo}
        alt={name}
        height={40}
        width={40}
      />
    </div>
    <div className="flex-1 text-left">
      <p className="font-extrabold text-sm dark:text-white">{name}</p>
      <p
        className={`text-[10px] font-bold ${selected ? "text-primary" : "text-slate-500"}`}
      >
        {desc}
      </p>
    </div>
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected ? "border-primary" : "border-slate-300"}`}
    >
      {selected && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
    </div>
  </button>
);

export { Checkout };
