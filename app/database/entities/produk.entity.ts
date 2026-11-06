import { DataTypes, Model } from "sequelize";
import sequelize from "../../../lib/sequelize";
import { ProdukAttributes } from "../attributes";

class Produk extends Model<ProdukAttributes> implements ProdukAttributes {
  public kode!: string;
  public nama!: string | null;
  public aktif!: number;
  public gangguan!: number;
  public kosong!: number;
  public harga_beli!: number | null;
  public harga_jual1!: number | null;
  public harga_jual2!: number | null;
  public harga_jual3!: number | null;
  public harga_jual4!: number | null;
  public nominal!: number | null;
  public tanpa_kode!: number | null;
  public prepaid!: number | null;
  public pospaid!: number | null;
  public voucher!: number | null;
  public unit!: number | null;
  public jumlah_Stok_unit!: number | null;
  public kode_provider!: string | null;
  public kode_hlr!: string | null;
  public kode_area!: string | null;
  public rumus_harga!: string | null;
  public catatan!: string | null;
  public autoOn!: string;
  public autoOff!: string;
  public autoOnOff!: number;
  public max_unit!: number | null;
  public min_unit!: number | null;
  public param!: string | null;
  public aktifkanCashback!: number;
  public limitWajib!: number | null;
  public cashback!: number | null;
  public tglberakhir!: Date | null;
  public harga_permanen!: number;
  public info_enduser!: number;
  public rumus_produk!: number | null;
  public min_qty!: number | null;
  public max_qty!: number | null;
  public poin!: number | null;
  public kode_kategori!: number | null;
  public ts!: Date | null;
  public modified!: Date | null;
}

Produk.init(
  {
    kode: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    aktif: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    gangguan: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    kosong: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    harga_beli: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
    },
    harga_jual1: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
    },
    harga_jual2: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
    },
    harga_jual3: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
    },
    harga_jual4: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
    },
    nominal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tanpa_kode: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    prepaid: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    pospaid: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    voucher: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    unit: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    jumlah_Stok_unit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    kode_provider: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    kode_hlr: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    kode_area: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    rumus_harga: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    catatan: {
      type: DataTypes.STRING(400),
      allowNull: true,
    },
    autoOn: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    autoOff: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    autoOnOff: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    max_unit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    min_unit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    param: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    aktifkanCashback: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    limitWajib: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cashback: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: true,
    },
    tglberakhir: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    harga_permanen: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    info_enduser: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    rumus_produk: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    min_qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    max_qty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    poin: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    kode_kategori: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ts: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "produk",
    timestamps: false,
  },
);

export { Produk };
