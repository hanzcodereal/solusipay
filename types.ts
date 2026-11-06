import { ProdukAttributes } from "./app/database/attributes";

export type View =
  | "home"
  | "topup"
  | "pln"
  | "promos"
  | "checkout"
  | "receipt"
  | "history"
  | "profile"
  | "data_package"
  | "bpjs"
  | "pdam"
  | "emoney"
  | "more"
  | "games"
  | "login";

export interface BaseProduct {
  id?: string;
  nominal: string;
  price: number;
  label?: string;
  description?: string;
  validity?: string;
  harga_jual1?: number;
}

export type Product = BaseProduct | ProdukAttributes;

export interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: number;
  status: "Success" | "Pending" | "Failed";
  type:
    | "bolt"
    | "smartphone"
    | "health_and_safety"
    | "water_drop"
    | "account_balance";
}

export interface User {
  name: string;
  balance: number;
  profilePic: string;
}
