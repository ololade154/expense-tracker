// import SimpleBarChart from "../chart/barChart";
import { useEffect, useState } from "react";
import { BalanceCard } from "./balanceCard";
import { Table } from "./table";
import type { ITableProps } from "../types";

export const Content = () => {
  const [transactions, setTransactions] = useState<ITableProps[]>(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (!storedTransactions) return [];
    const parsed = JSON.parse(storedTransactions) as ITableProps[];
    return parsed.map((t) => ({ ...t, date: new Date(t.date) }));
  });
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const sum = transactions.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.amount),
    0,
  );

  const expenseSum = transactions
    .filter((t) => t.type === "expense")
    .reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.amount),
      0,
    );
  const incomeSum = transactions
    .filter((p) => p.type === "income")
    .reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.amount),
      0,
    );
  return (
    <div className="bg-blue-50 min-h-screen pt-20 lg:pt-24 pb-10 px-4 lg:px-10  space-y-10">
      <BalanceCard sum={sum} incomeSum={incomeSum} expenseSum={expenseSum} />
      {/* <div>
        <SimpleBarChart />
      </div> */}
      <Table transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
};
