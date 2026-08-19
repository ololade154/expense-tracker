import type { ReactNode } from "react";

export interface BalanceProps {
  title: string;
  icon: ReactNode;
  amount: string;
  subTitle: string;
  color: "blue" | "red" | "green";
}
