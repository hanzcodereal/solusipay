import { Produk } from "@/app/database/entities";
import { NextResponse } from "next/server";
import { produkRepository } from "./repositories";

class ProdukQueryService {
  async getAllProdukByCondition(
    category: string,
  ): Promise<NextResponse<{ success: boolean; data: Produk[] }>> {
    const products = await produkRepository.getAllProdukByCondition({
      catatan: category,
    });

    return NextResponse.json({
      success: true,
      data: products,
    });
  }
}

export const produkQueryService = new ProdukQueryService();
