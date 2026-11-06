import { View } from "@/types";
import {
  BalanceCard,
  Profile,
  Search,
  Service,
  Transaction,
  BottomNav,
} from "./components";

const Home = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  return (
    <div className="flex-1 pb-32 bg-background">
      {/* Blue Header */}
      <header className="bg-primary pt-12 pb-20 px-6 rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-10 -mb-10"></div>
        <Profile onNavigate={onNavigate} />
        <Search />
      </header>
      {/* Balance Card */}
      <BalanceCard />
      {/* Service Grid */}
      <Service onNavigate={onNavigate} />
      {/* Recent Transactions */}
      <Transaction />
      {/* Bottom Nav */}
      <BottomNav onNavigate={onNavigate} current="home" />
    </div>
  );
};

export { Home };
