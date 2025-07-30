import { NextRequest, NextResponse } from "next/server";

function decodeJWT(token: string): any | null {
  try {
    const base64Payload = token.split(".")[1];
    const jsonPayload = atob(
      base64Payload.replace(/-/g, "+").replace(/_/g, "/")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("accessToken")?.value;

  const pathname = url.pathname;

  const isProfileRoute = pathname.startsWith("/profile");
  const isAdminRoute = pathname.startsWith("/admin");
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password" ||
    pathname === "/reset-password" ||
    pathname === "/verify-email";

  if (!token && (isProfileRoute || isAdminRoute)) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (token) {
    const decoded = decodeJWT(token);

    if (!decoded) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    const isExpired = decoded.exp && Date.now() >= decoded.exp * 1000;

    if (isExpired) {
      return NextResponse.next();
    }

    if (isAdminRoute && decoded.role !== "admin") {
      url.pathname = "/not-found";
      return NextResponse.redirect(url);
    }

    if (isAuthPage) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/admin/:path*",
    "/login",
    "/signup",
    "/forgot-password",
  ],
};
