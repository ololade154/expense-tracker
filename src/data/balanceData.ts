import type { BalanceProps, ITableProps } from "../types";
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
export const data: ITableProps[] = [
  {
    date: new Date(),
    category: "salary",
    description: "Monthly Salary",
    amount: "₹4,25,000",
    type: "income",
  },
  {
    date: new Date(),
    category: "Food & Dining",
    description: "Grocery shopping",
    amount: "₹25,000",
    type: "expense",
  },
  {
    date: new Date(),
    category: "Transportation",
    description: "Gas",
    amount: "₹5,000",
    type: "expense",
  },
  {
    date: new Date(),
    category: "Entertainment",
    description: "Movie ticket",
    amount: "₹3,000",
    type: "expense",
  },
  {
    date: new Date(),
    category: "Bill &n Utilities",
    description: "Electricity Bill",
    amount: "₹10,000",
    type: "expense",
  },
];
