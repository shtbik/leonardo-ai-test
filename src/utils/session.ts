import type { TSessionData } from "@/types/session";
import { cookies } from "next/headers";

export async function getSessionData(): Promise<TSessionData | undefined> {
  const user = cookies().get("auth")?.value;
  if (!user) return undefined;
  return JSON.parse(user);
}
