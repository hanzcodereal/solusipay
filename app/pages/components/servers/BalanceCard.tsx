"use client";

import { useSession } from "@utils/session";
import BalanceCardClient from "../clients/BalanceCardClient";

export const BalanceCard = () => {
  const { isLogin } = useSession();

  return <BalanceCardClient isLogin={isLogin} />;
};
