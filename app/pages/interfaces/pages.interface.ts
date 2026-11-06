import { View, Product } from "@/types";
export interface PromoCardProps {
  title: string;
  badge: string;
  icon: string;
  bgColor: string;
  badgeColor?: string;
}

export interface TransactionItemProps {
  title: string;
  date: string;
  amount: string;
  type: string;
}

export interface ServiceIconProps {
  icon: string;
  label: string;
  color: string;
  textColor: string;
}

export interface CheckoutProps {
  product: Product | null;
  phone: string;
  onNavigate: (view: View) => void;
  onBack: () => void;
}

export interface PaymentOptionProps {
  id: string;
  name: string;
  desc: string;
  selected: boolean;
  onClick: (id: string) => void;
  logo: string;
}

export interface ReceiptRowProps {
  label: string;
  value: string;
  highlight?: boolean;
}
