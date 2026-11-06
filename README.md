# SolusiPay

Aplikasi web PPOB (pulsa, paket data, PLN, PDAM, BPJS, e-money, game) dengan Next.js 16, Tailwind CSS 4, Sequelize, dan database Neon (PostgreSQL). Deploy di Vercel.

## Environment Variables

Tidak ada file `.env` di proyek ini. Semua variabel diisi langsung di Vercel (Settings > Environment Variables):

- `DATABASE_URL` : connection string Neon (langsung)
- `DATABASE_URL_POOLED` : connection string Neon (pooled, ada `-pooler`)
- `JWT_SECRET` : string acak panjang
- `ADMIN_FEE` : contoh `1000`

## Setup database (sekali saja)

Jalankan dari terminal dengan variabel di baris yang sama:

```bash
npm install
DATABASE_URL="..." npm run db:init
DATABASE_URL="..." node scripts/create-user.mjs "Nama" email@contoh.com password
```

## Deploy ke Vercel

1. Push ke GitHub, lalu Import Project di Vercel (nama project: `solusipay`).
2. Isi Environment Variables di atas.
3. Deploy, lalu cek koneksi di `/api/test-db`.

## Struktur

- `app/` halaman dan API (App Router)
- `app/database/` model Sequelize
- `lib/sequelize.ts` koneksi Neon
- `schema.sql` skema tabel
- `scripts/` init database dan buat user
