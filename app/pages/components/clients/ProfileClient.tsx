"use client";

import Image from "next/image";
import { View } from "@/types";

interface Props {
  user: {
    username?: string;
    name?: string;
  } | null;
  isLogin: boolean;
  onNavigate: (v: View) => void;
}

export default function ProfileClient({ user, isLogin, onNavigate }: Props) {
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auths/logout", { method: "POST" });
      if (res.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="relative z-10 flex justify-between items-center mb-6">
      <div className="flex items-center space-x-3">
        {isLogin ? (
          <>
            <div className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden bg-white/20">
              <Image
                alt="Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu2dDxD_55vzo7uuUPxW5mdjW0HCQHO3yrdZ99fX4ukldXod9XbiT_oC8XAX9h6ll7RoASD3qjDGmU3p00HCPZ2ipFrW9IztJTtICl1tXZkKhdYjVdXHBseOiRJbBDPLYrF-jh96vxobLdxhjmsBvSISlqBRfgrWHETct0vnkHlBTQ4EaftGzAETePpWy4LKeUMkE9OmIynK7qCDinMqpMvbsbf14U3Ujxhrs5-XxJyw1i3vCO-eG2dO_4frHcBgTkU7lcyR_Rbg"
                width={40}
                height={40}
              />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">
                {user?.name || user?.username}
              </h2>
            </div>
          </>
        ) : (
          <button
            onClick={() => onNavigate("login")}
            className="px-4 py-2 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all"
          >
            Login
          </button>
        )}
      </div>

      {isLogin && (
        <button
          onClick={handleLogout}
          className="text-white/60 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1"
        >
          <span className="material-icons-round text-xs">logout</span>
        </button>
      )}
    </div>
  );
}
