import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lip/connectDB";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const result = await prisma.blog.findFirst({
      where: { id },
    });
    return NextResponse.json(
      { result, message: "Blog fetched successfully" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const result = await prisma.blog.delete({
      where: { id },
    });
    return NextResponse.json(
      { result, message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
