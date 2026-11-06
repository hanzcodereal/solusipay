export interface ProviderAttributes {
  kode: string;
  nama: string | null;
  prefix_tujuan: string | null;
  gangguan: number | null;
  kosong: number | null;
  regex_tujuan: string | null;
  kode_hlr: string | null;
  panjang_maks: number | null;
  panjang_min: number | null;
  prioritas: number;
  format_sukses: string | null;
  kode_area: string | null;
  catatan: string | null;
  blok_kelompok: string | null;
  ts: Date | null;
  awalCutOff: string | null;
  akhirCutOff: string | null;
  keteranganCutOff: string | null;
  skip_normalisasi_tujuan: number | null;
}
