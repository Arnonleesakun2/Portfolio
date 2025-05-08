import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import prisma from "@/lip/connectDB";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET || "test";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;
    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (!user) {
      return NextResponse.json({ error: "Invalid username " }, { status: 401 });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid  password" }, { status: 401 });
    }
    const payload = {
      username: user.username,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    return NextResponse.json(
      {
        message: "Login successful",
        user: payload,
        token: token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(error, { status: 500 });
  }
}
