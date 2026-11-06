import React, { useState } from "react";
import { View, Product } from "@/types";
import { BottomNav } from "./components";
import Image from "next/image";

interface GamesProps {
  onNavigate: (view: View, product?: Product) => void;
  onBack: () => void;
}

interface Game {
  id: string;
  name: string;
  developer: string;
  icon: string;
  banner: string;
  color: string;
  packages: Product[];
}

// Fixed missing properties and cleaned up corrupted data
const GAMES_DATA: Game[] = [
  {
    id: "mlbb",
    name: "Mobile Legends",
    developer: "Moonton",
    icon: "https://img.icons8.com/color/96/mobile-legends.png",
    banner: "https://picsum.photos/400/200?random=10",
    color: "bg-blue-600",
    packages: [
      { id: "ml1", nominal: "86 Diamonds", price: 20000 },
      { id: "ml2", nominal: "172 Diamonds", price: 40000 },
      { id: "ml3", nominal: "257 Diamonds", price: 60000 },
    ],
  },
  {
    id: "ff",
    name: "Free Fire",
    developer: "Garena",
    icon: "https://img.icons8.com/color/96/free-fire.png",
    banner: "https://picsum.photos/400/200?random=11",
    color: "bg-orange-600",
    packages: [
      { id: "ff1", nominal: "50 Diamonds", price: 8000 },
      { id: "ff2", nominal: "100 Diamonds", price: 15000 },
      { id: "ff3", nominal: "355 Diamonds", price: 50000 },
    ],
  },
  {
    id: "pubg",
    name: "PUBG Mobile",
    developer: "Tencent",
    icon: "https://img.icons8.com/color/96/pubg.png",
    banner: "https://picsum.photos/400/200?random=12",
    color: "bg-slate-900",
    packages: [
      { id: "pg1", nominal: "60 UC", price: 13000 },
      { id: "pg2", nominal: "325 UC", price: 65000 },
    ],
  },
];

const Games: React.FC<GamesProps> = ({ onNavigate, onBack }) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [userId, setUserId] = useState("");

  if (selectedGame) {
    return (
      <div className="flex-1 bg-white dark:bg-slate-900 min-h-screen">
        <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 h-16 flex items-center gap-4">
          <button
            onClick={() => setSelectedGame(null)}
            className="w-10 h-10 flex items-center justify-center rounded-full"
          >
            <span className="material-icons-round">arrow_back_ios_new</span>
          </button>
          <h1 className="text-lg font-bold">{selectedGame.name}</h1>
        </header>

        <div className="h-40 relative">
          <Image
            src={selectedGame.banner}
            alt={selectedGame.name}
            className="w-full h-full object-cover"
            height={40}
            width={40}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <Image
              src={selectedGame.icon}
              alt={selectedGame.name}
              className="w-12 h-12 rounded-xl bg-white p-1"
              height={40}
              width={40}
            />
            <div>
              <h2 className="text-white font-bold">{selectedGame.name}</h2>
              <p className="text-white/70 text-xs">{selectedGame.developer}</p>
            </div>
          </div>
        </div>

        <main className="p-5 pb-40 space-y-6">
          <section>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">
              Player ID
            </label>
            <input
              className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 focus:border-primary focus:ring-0 transition-all text-lg font-black"
              placeholder="Enter User ID"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </section>

          <section>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">
              Select Package
            </label>
            <div className="grid grid-cols-2 gap-3">
              {selectedGame.packages.map((pkg) => (
                <button
                  key={pkg.label}
                  onClick={() => onNavigate("checkout", pkg)}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-left active:scale-95 transition-all"
                >
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {pkg.nominal}
                  </p>
                  <p className="text-primary font-bold">Rp</p>
                </button>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 h-16 flex items-center justify-between">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <span className="material-icons-round">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold">Games Top Up</h1>
        <div className="w-10"></div>
      </header>

      <main className="p-4 grid grid-cols-3 gap-4 pb-32">
        {GAMES_DATA.map((game) => (
          <button
            key={game.id}
            onClick={() => setSelectedGame(game)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-full aspect-square rounded-2xl bg-white dark:bg-slate-800 shadow-sm overflow-hidden p-3 border border-slate-100 dark:border-slate-700 group-active:scale-90 transition-transform">
              <Image
                src={game.icon}
                alt={game.name}
                className="w-full h-full object-contain"
                height={40}
                width={40}
              />
            </div>
            <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 text-center leading-tight">
              {game.name}
            </span>
          </button>
        ))}
      </main>

      <BottomNav onNavigate={onNavigate} current="home" />
    </div>
  );
};

// Fixed missing default export
export { Games };
