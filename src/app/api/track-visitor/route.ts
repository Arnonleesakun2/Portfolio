import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lip/connectDB";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    await prisma.visitorLog.create({
      data: {
        ipAddress: ip,
        userAgent,
      },
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET() {
  try {
    const result = await prisma.visitorLog.findMany();
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
