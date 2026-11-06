"use client";

import React, { useState } from "react";
import {
  TopUp,
  DataPackage,
  PLN,
  Home,
  BPJS,
  PDAM,
  Games,
  EMoney,
  MoreServices,
  Checkout,
  Receipt,
  Login,
} from "./pages";
import { Product, View } from "@/types";

const App: React.FC = () => {
  const [view, setView] = useState<View>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleNavigate = (newView: View, product?: Product, phone?: string) => {
    if (product) setSelectedProduct(product);
    if (phone) setPhoneNumber(phone);
    setView(newView);
  };

  const renderView = () => {
    switch (view) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
      case "topup":
        return (
          <TopUp onNavigate={handleNavigate} onBack={() => setView("home")} />
        );
      case "data_package":
        return (
          <DataPackage
            onNavigate={handleNavigate}
            onBack={() => setView("home")}
          />
        );
      case "pln":
        return (
          <PLN onNavigate={handleNavigate} onBack={() => setView("home")} />
        );
      case "bpjs":
        return (
          <BPJS onNavigate={handleNavigate} onBack={() => setView("home")} />
        );
      case "pdam":
        return (
          <PDAM onNavigate={handleNavigate} onBack={() => setView("home")} />
        );
      case "games":
        return (
          <Games onNavigate={handleNavigate} onBack={() => setView("home")} />
        );
      case "emoney":
        return (
          <EMoney onNavigate={handleNavigate} onBack={() => setView("home")} />
        );
      case "more":
        return (
          <MoreServices
            onNavigate={handleNavigate}
            onBack={() => setView("home")}
          />
        );
      case "checkout":
        return (
          <Checkout
            product={selectedProduct}
            phone={phoneNumber}
            onNavigate={handleNavigate}
            onBack={() => setView("topup")}
          />
        );
      case "receipt":
        return (
          <Receipt
            product={selectedProduct}
            phone={phoneNumber}
            onNavigate={handleNavigate}
          />
        );
      case "login":
        return <Login onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-[430px] bg-white dark:bg-slate-900 shadow-2xl relative min-h-screen flex flex-col overflow-hidden">
        {renderView()}
      </div>
    </div>
  );
};

export default App;
