"use client";

import { TSessionData } from "@/types/session";
import { createContext, useContext } from "react";

export const AuthContextInitialValue: TSessionData = {
  username: "",
  job: "",
};

const AuthContext = createContext<TSessionData>(AuthContextInitialValue);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: TSessionData;
}) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
