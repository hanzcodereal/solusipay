import "server-only";
import { Sequelize } from "sequelize";
import pg from "pg";

let _sequelize: Sequelize | null = null;

const createSequelize = (): Sequelize => {
  // Utamakan koneksi pooled dari Neon, fallback ke koneksi langsung
  const raw = process.env.DATABASE_URL_POOLED || process.env.DATABASE_URL;
  if (!raw) {
    throw new Error("DATABASE_URL_POOLED / DATABASE_URL belum diisi (connection string Neon).");
  }
  // channel_binding tidak dibutuhkan driver pg, dibuang agar koneksi tidak gagal
  const url = raw.replace(/([?&])channel_binding=[^&]*&?/, "$1").replace(/[?&]$/, "");

  return new Sequelize(url, {
    dialect: "postgres",
    dialectModule: pg,
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false },
    },
    logging: false,
    // Serverless (Vercel): pool kecil, Neon sudah punya pooler sendiri
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
  });
};

export const sequelize: Sequelize = new Proxy({} as Sequelize, {
  get(_, prop: keyof Sequelize) {
    if (!_sequelize) {
      _sequelize = createSequelize();
    }
    return _sequelize[prop];
  },
});

export default sequelize;
