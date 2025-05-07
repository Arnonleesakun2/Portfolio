import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { message: "Signed out" },
    { status: 200 }
  );
  response.headers.set(
    "Set-Cookie",
    "token=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict"
  );
  return response;
}
