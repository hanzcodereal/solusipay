-- Skema database SolusiPay (Neon / PostgreSQL)
-- Nama kolom pakai tanda kutip karena Sequelize memakai nama persis seperti di model.

CREATE TABLE IF NOT EXISTS provider (
  "kode" VARCHAR(20) PRIMARY KEY,
  "nama" VARCHAR(255),
  "prefix_tujuan" VARCHAR(4000),
  "gangguan" SMALLINT,
  "kosong" SMALLINT,
  "regex_tujuan" VARCHAR(255),
  "kode_hlr" VARCHAR(50),
  "panjang_maks" SMALLINT,
  "panjang_min" SMALLINT,
  "prioritas" SMALLINT NOT NULL,
  "format_sukses" VARCHAR(255),
  "kode_area" VARCHAR(255),
  "catatan" VARCHAR(255),
  "blok_kelompok" VARCHAR(255),
  "ts" TIMESTAMPTZ,
  "awalCutOff" VARCHAR(4),
  "akhirCutOff" VARCHAR(4),
  "keteranganCutOff" VARCHAR(255),
  "skip_normalisasi_tujuan" SMALLINT
);

CREATE TABLE IF NOT EXISTS produk (
  "kode" VARCHAR(20) PRIMARY KEY,
  "nama" VARCHAR(255),
  "aktif" SMALLINT NOT NULL,
  "gangguan" SMALLINT NOT NULL,
  "kosong" SMALLINT NOT NULL,
  "harga_beli" NUMERIC(18, 2),
  "harga_jual1" NUMERIC(18, 2),
  "harga_jual2" NUMERIC(18, 2),
  "harga_jual3" NUMERIC(18, 2),
  "harga_jual4" NUMERIC(18, 2),
  "nominal" INTEGER,
  "tanpa_kode" SMALLINT,
  "prepaid" SMALLINT,
  "pospaid" SMALLINT,
  "voucher" SMALLINT,
  "unit" SMALLINT,
  "jumlah_Stok_unit" INTEGER,
  "kode_provider" VARCHAR(20),
  "kode_hlr" VARCHAR(50),
  "kode_area" VARCHAR(255),
  "rumus_harga" VARCHAR(255),
  "catatan" VARCHAR(400),
  "autoOn" VARCHAR(4) NOT NULL,
  "autoOff" VARCHAR(4) NOT NULL,
  "autoOnOff" SMALLINT NOT NULL,
  "max_unit" INTEGER,
  "min_unit" INTEGER,
  "param" VARCHAR(255),
  "aktifkanCashback" SMALLINT NOT NULL,
  "limitWajib" INTEGER,
  "cashback" NUMERIC(18, 2),
  "tglberakhir" TIMESTAMPTZ,
  "harga_permanen" SMALLINT NOT NULL,
  "info_enduser" SMALLINT NOT NULL,
  "rumus_produk" SMALLINT,
  "min_qty" INTEGER,
  "max_qty" INTEGER,
  "poin" INTEGER,
  "kode_kategori" INTEGER,
  "ts" TIMESTAMPTZ,
  "modified" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS reseller (
  "kode" VARCHAR(255) PRIMARY KEY,
  "nama" VARCHAR(255) NOT NULL,
  "alamat" VARCHAR(255),
  "saldo" NUMERIC(18, 2) NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS users (
  "Id" SERIAL PRIMARY KEY,
  "Name" VARCHAR(255) NOT NULL,
  "Username" VARCHAR(255) NOT NULL,
  "Email" VARCHAR(255) NOT NULL,
  "Password" VARCHAR(255) NOT NULL,
  "KodeReseller" VARCHAR(255),
  "CreatedAt" TIMESTAMPTZ NOT NULL,
  "CreatedBy" VARCHAR(255) NOT NULL,
  "UpdatedAt" TIMESTAMPTZ,
  "UpdateBy" VARCHAR(255),
  "DeletedAt" TIMESTAMPTZ,
  "DeletedBy" VARCHAR(255)
);
