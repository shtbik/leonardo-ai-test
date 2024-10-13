import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import type { TSessionData } from "@/types/session";

export async function POST(req: NextRequest) {
  const sessionData = (await req.json()) as TSessionData;

  const cookieStore = cookies();
  cookieStore.set("auth", JSON.stringify(sessionData), {
    secure: true,
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60, // One hour
  });

  return new Response(null, {
    status: 200,
  });
}
