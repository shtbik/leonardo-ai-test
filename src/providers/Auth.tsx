"use client";

import type { TSessionData } from "@/types/session";
import { createContext, type PropsWithChildren, useContext } from "react";

export const AuthContextInitialValue: TSessionData = {
  username: "",
  job: "",
};

const AuthContext = createContext<TSessionData>(AuthContextInitialValue);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({
  user,
  children,
}: PropsWithChildren<{
  user: TSessionData;
}>) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
