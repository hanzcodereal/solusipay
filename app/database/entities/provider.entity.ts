import { DataTypes, Model } from "sequelize";
import sequelize from "../../../lib/sequelize";
import { ProviderAttributes } from "../attributes";

class Provider extends Model<ProviderAttributes> implements ProviderAttributes {
  public kode!: string;
  public nama!: string | null;
  public prefix_tujuan!: string | null;
  public gangguan!: number | null;
  public kosong!: number | null;
  public regex_tujuan!: string | null;
  public kode_hlr!: string | null;
  public panjang_maks!: number | null;
  public panjang_min!: number | null;
  public prioritas!: number;
  public format_sukses!: string | null;
  public kode_area!: string | null;
  public catatan!: string | null;
  public blok_kelompok!: string | null;
  public ts!: Date | null;
  public awalCutOff!: string | null;
  public akhirCutOff!: string | null;
  public keteranganCutOff!: string | null;
  public skip_normalisasi_tujuan!: number | null;
}

Provider.init(
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
    prefix_tujuan: {
      type: DataTypes.STRING(4000),
      allowNull: true,
    },
    gangguan: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    kosong: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    regex_tujuan: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    kode_hlr: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    panjang_maks: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    panjang_min: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    prioritas: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    format_sukses: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    kode_area: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    catatan: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    blok_kelompok: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ts: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    awalCutOff: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    akhirCutOff: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
    keteranganCutOff: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    skip_normalisasi_tujuan: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "provider",
    timestamps: false,
  },
);

export { Provider };
