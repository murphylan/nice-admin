import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");
  const token =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token");

  if (isDashboard && !token) {
    const loginUrl = new URL("/auth/sign-in", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// 只拦截 dashboard 路由
export const config = {
  matcher: ["/dashboard/:path*"],
};
