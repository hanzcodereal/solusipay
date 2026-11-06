import { useEffect, useState } from "react";
import {
  BottomNav,
  DenominationsTopUp,
  HeaderTopUp,
  PhoneInputTopUp,
  LoginRequired,
} from "./components";
import { View, Product } from "@/types";
import { useSession } from "../utils";
import {
  ProdukAttributes,
  ProviderAttributes,
} from "@/app/database/attributes";
import { detectProviderByPhone } from "@/app/utils/detect-provider-phone";

interface TopUpProps {
  onNavigate: (view: View, product?: Product, phone?: string) => void;
  onBack: () => void;
}

const TopUp: React.FC<TopUpProps> = ({ onNavigate, onBack }) => {
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

      const category = "TLP&SMS";
      const res = await fetch(`/api/produk/${category}`);

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const result = await res.json();

      setProducts(result?.data || []);
    } catch (error: unknown) {
      const err = error as { message?: string; code?: string };
      console.error("Fetch products error:", err.message);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    if (isLogin) {
      fetchProducts();
    }
  }, [isLogin]);

  // 🔹 Filter produk berdasarkan prefix nomor HP
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
        description="Silahkan login untuk mengakses menu Top Up dan melanjutkan transaksi."
        onNavigate={onNavigate}
        onBack={onBack}
      />
    );
  }

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark min-h-screen">
      <HeaderTopUp onBack={onBack} />

      <main className="pb-56">
        {/* Phone Input */}
        <PhoneInputTopUp phone={phone} setPhone={setPhone} />
        {/* Denominations */}
        {/* Loading Produk */}
        {loadingProducts ? (
          <div className="flex justify-center mt-6">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          </div>
        ) : (
          <DenominationsTopUp
            onNavigate={onNavigate}
            phone={phone}
            data={filteredProducts}
          />
        )}
      </main>

      {/* Sticky Bottom Summary */}

      <BottomNav onNavigate={onNavigate} current="home" />
    </div>
  );
};

export { TopUp };
