import { Produk, Provider } from "@/app/database/entities";
import { WhereOptions } from "sequelize";

export class ProdukRepository {
  async getAllProdukByCondition(
    condition: WhereOptions<Produk>,
  ): Promise<Produk[]> {
    return await Produk.findAll({
      limit: 100,
      order: [["nama", "ASC"]],
      attributes: [
        "kode",
        "nama",
        "aktif",
        "gangguan",
        "kosong",
        "harga_beli",
        "harga_jual1",
        "nominal",
        "kode_provider",
      ],
      include: [
        {
          model: Provider,
          as: "provider",
          attributes: ["kode", "nama", "catatan", "prefix_tujuan"],
          required: true,
          where: {
            ...condition,
          },
        },
      ],
    });
  }
}

export const produkRepository = new ProdukRepository();
