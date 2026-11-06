// Buat user login: node scripts/create-user.mjs "Nama" email password
import bcrypt from "bcrypt";
import pg from "pg";

const [name, email, password] = process.argv.slice(2);
if (!name || !email || !password) {
  console.error('Pakai: node scripts/create-user.mjs "Nama" email password');
  process.exit(1);
}
const client = new pg.Client({ connectionString: (process.env.DATABASE_URL_POOLED || process.env.DATABASE_URL), ssl: { rejectUnauthorized: false } });
await client.connect();
const hash = await bcrypt.hash(password, 10);
await client.query(
  `INSERT INTO users ("Name","Username","Email","Password","CreatedAt","CreatedBy") VALUES ($1,$2,$3,$4,NOW(),'system')`,
  [name, email.split("@")[0], email, hash],
);
console.log("User dibuat:", email);
await client.end();
