import { NextResponse } from "next/server";
import { resellerRepository } from "./repositories";

export async function GET() {
  try {
    const resellers = await resellerRepository.getAllResellers();

    return NextResponse.json({
      success: true,
      data: resellers,
    });
  } catch (error: unknown) {
    const err = error as { message?: string; code?: string };
    console.error("Fetch Resellers Failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch resellers",
        error: err.message || "Unknown error",
        code: err.code,
      },
      { status: 500 },
    );
  }
}
