import { View, Product } from "@/types";
import React, { useEffect, useState } from "react";
import { useSession } from "../utils";
import { LoginRequired, DenominationsDataPackage } from "./components";
import {
  ProdukAttributes,
  ProviderAttributes,
} from "@/app/database/attributes";
import { detectProviderByPhone } from "@/app/utils/detect-provider-phone";

interface DataPackageProps {
  onNavigate: (view: View, product?: Product, phone?: string) => void;
  onBack: () => void;
}

const DataPackage: React.FC<DataPackageProps> = ({ onNavigate, onBack }) => {
  const [phone, setPhone] = useState("");
  const { isLogin, loading } = useSession();
  const [products, setProducts] = useState<ProdukAttributes[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProdukAttributes[]>(
    [],
  );
  const [loadingProducts, setLoadingProducts] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoadingProducts(true);
      const category = "INTERNET";
      const res = await fetch(`/api/produk/${category}`);

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const result = await res.json();
      setProducts(result?.data || []);
    } catch (error: unknown) {
      const err = error as { message?: string };
      console.error("Fetch data package error:", err.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    if (isLogin) {
      fetchProducts();
    }
  }, [isLogin]);

  // Filter produk berdasarkan prefix nomor HP
  useEffect(() => {
    if (!products.length) return;

    const providers = products
      .map((p) => p.provider)
      .filter((p): p is ProviderAttributes => !!p);
    const foundProvider = detectProviderByPhone(phone, providers);

    if (foundProvider) {
      const filtered = products.filter(
        (p) => p.kode_provider === foundProvider.kode,
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [phone, products]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isLogin) {
    return (
      <LoginRequired
        description="Silahkan login untuk mengakses menu Data Package dan melanjutkan transaksi."
        onNavigate={onNavigate}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 h-16 flex items-center justify-between">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full"
        >
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold">Data Packages</h1>
        <div className="w-10"></div>
      </header>

      <main className="pb-40">
        {/* Phone Input */}
        <section className="p-4">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Phone Number
            </label>
            <div className="relative flex items-center">
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

        {/* Product List */}
        {loadingProducts ? (
          <div className="flex justify-center mt-6">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          </div>
        ) : (
          <DenominationsDataPackage
            onNavigate={onNavigate}
            phone={phone}
            data={filteredProducts}
          />
        )}
      </main>
    </div>
  );
};

export { DataPackage };
