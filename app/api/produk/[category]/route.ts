import { NextResponse } from "next/server";
import { produkQueryService } from "../query.service";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ category: string }>;
  },
) {
  try {
    const { category } = await params;
    const products = await produkQueryService.getAllProdukByCondition(category);
    return products;
  } catch (error: unknown) {
    const err = error as { message?: string; code?: string };
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products",
        error: err.message || "Unknown error",
        code: err.code,
      },
      { status: 500 },
    );
  }
}
