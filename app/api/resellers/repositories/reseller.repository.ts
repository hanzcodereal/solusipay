import { Reseller } from "@/app/database/entities";

export class ResellerRepository {
  async getAllResellers(): Promise<Reseller[]> {
    return await Reseller.findAll({
      limit: 100,
      order: [["nama", "ASC"]],
      attributes: ["kode", "nama", "alamat", "saldo"],
    });
  }

  async getResellerByKode(kode: string): Promise<Reseller | null> {
    return await Reseller.findByPk(kode, {
      attributes: ["kode", "nama", "alamat", "saldo"],
    });
  }
}

export const resellerRepository = new ResellerRepository();
