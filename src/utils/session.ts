import type { TSessionData } from "@/types/session";
import { cookies } from "next/headers";

export async function getSessionData(): Promise<TSessionData> {
  const user = cookies().get("auth")?.value;
  return JSON.parse(user || "");
}
