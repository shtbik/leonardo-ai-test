import type { NextRequest } from "next/server";

/**
 *
 * @description Auth Middleware. Blocks access to pages if user is not authenticated.
 */
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("auth");

  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
