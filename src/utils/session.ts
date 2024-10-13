import type { TSessionData } from "@/types/session";
import { cookies } from "next/headers";

const authKey = "auth";

export async function getSessionData(): Promise<TSessionData | undefined> {
  const user = cookies().get(authKey)?.value;
  if (!user) return undefined;
  return JSON.parse(user);
}
