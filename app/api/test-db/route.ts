import { NextResponse } from "next/server";
import sequelize from "@/lib/sequelize";

export async function GET() {
  try {
    await sequelize.authenticate();
    return NextResponse.json({
      success: true,
      message: "Terhubung ke database Neon.",
    });
  } catch (error: unknown) {
    console.error("Database Connection Test Failed:", error);
    return NextResponse.json(
      { success: false, message: "Koneksi database gagal. Cek DATABASE_URL." },
      { status: 500 },
    );
  }
}
