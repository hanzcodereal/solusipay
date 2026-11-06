import { DataTypes, Model } from "sequelize";
import sequelize from "../../../lib/sequelize";
import { ResellerAttributes } from "../attributes";

class Reseller extends Model<ResellerAttributes> implements ResellerAttributes {
  public kode!: string;
  public nama!: string;
  public alamat!: string;
  public saldo!: number;
}

Reseller.init(
  {
    kode: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    saldo: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: "reseller",
    timestamps: false, // Assuming the table doesn't have createdAt/updatedAt
  },
);

export { Reseller };
