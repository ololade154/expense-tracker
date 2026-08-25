import type { BalanceProps } from "../types";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

export const balanceData: BalanceProps[] = [
  {
    title: "Total Balance",
    amount: "₹2,94,000",
    subTitle: "Current balance",
    icon: Wallet,
    color: "blue",
  },
  {
    title: "Total Income",
    amount: "₹4,25,000",
    subTitle: "This month",
    icon: TrendingUp,
    color: "green",
  },
  {
    title: "Total Expense",
    amount: "₹1,31,000",
    subTitle: "This month",
    icon: TrendingDown,
    color: "red",
  },
];
