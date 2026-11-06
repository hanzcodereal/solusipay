// Membuat tabel di Neon: npm run db:init
// Butuh DATABASE_URL di environment (atau file .env.local, pakai: node scripts/init-db.mjs)
import { readFileSync } from "node:fs";
import pg from "pg";

const url = process.env.DATABASE_URL_POOLED || process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL belum diisi.");
  process.exit(1);
}

const client = new pg.Client({ connectionString: url, ssl: { rejectUnauthorized: false } });
await client.connect();
await client.query(readFileSync(new URL("../schema.sql", import.meta.url), "utf8"));
console.log("Tabel berhasil dibuat.");
await client.end();
