import type { LucideIcon } from "lucide-react";

export interface BalanceProps {
  title: string;
  icon: LucideIcon;
  amount: string;
  subTitle: string;
  color: "blue" | "red" | "green";
}
export interface ITableProps {
  date: Date;
  category: string;
  description: string;
  amount: string;
  type: "expense" | "income";
}
