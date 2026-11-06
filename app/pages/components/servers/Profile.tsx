"use client";

import { View } from "@/types";
import { useSession } from "@utils/session";

import ProfileClient from "../clients/ProfileClient";

export const Profile = ({ onNavigate }: { onNavigate: (v: View) => void }) => {
  const { isLogin, user } = useSession();

  return (
    <ProfileClient user={user} isLogin={isLogin} onNavigate={onNavigate} />
  );
};
