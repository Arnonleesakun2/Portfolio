import prisma from "@/lip/connectDB";
import { uploadFile } from "@/lip/supabaseStorage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const summary = formData.get("summary") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const image = formData.get("image") as File;
    const imageSupabase = await uploadFile(image);
    const result = await prisma.blog.create({
      data: {
        title,
        summary,
        content,
        category,
        image: imageSupabase,
      },
    });
    return NextResponse.json(
      {
        result: result,
        message: "Blog created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const category = req.nextUrl.searchParams.get("category");
    const search = req.nextUrl.searchParams.get("search");
    const result = await prisma.blog.findMany({
      where: {
        AND: [
          category ? { category } : {},
          search
            ? {
                OR: [
                  { title: { contains: search, mode: "insensitive" } },
                ],
              }
            : {},
        ],
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
