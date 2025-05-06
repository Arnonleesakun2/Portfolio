import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return NextResponse.redirect(new URL("/", request.url));
  }
}
export const config = {
  matcher: ["/admin/:path*"],
};
