"use client";

import { useEffect, useState } from "react";

export interface SessionData {
  isLogin: boolean;
  user: {
    name?: string;
    username?: string;
  } | null;
}

export function useSession() {
  const [session, setSession] = useState<SessionData>({
    isLogin: false,
    user: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auths/me")
      .then((res) => res.json())
      .then((data) => {
        setSession(data);
        setLoading(false);
      })
      .catch(() => {
        setSession({ isLogin: false, user: null });
        setLoading(false);
      });
  }, []);

  return { ...session, loading };
}
