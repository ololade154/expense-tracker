import { tableFeatures, useTable, type ColumnDef } from "@tanstack/react-table";
import type { ITableProps } from "../types";
import { useState } from "react";
import { AddTransactionModal } from "../modal/addTransactionModal";
import { Trash2 } from "lucide-react";
interface TableProps {
  transactions: ITableProps[];
  setTransactions: React.Dispatch<React.SetStateAction<ITableProps[]>>;
}
const features = tableFeatures({});
export const Table = ({ setTransactions, transactions }: TableProps) => {
  const handleTransaction = (newTransaction: Omit<ITableProps, "id">) => {
    setTransactions((prev) => [
      ...prev,
      { ...newTransaction, id: crypto.randomUUID() },
    ]);
  };
  const handleDelete = (rowToDelet: ITableProps) => {
    setTransactions((prev) => prev.filter((t) => t.id !== rowToDelet.id));
  };
  const [isOpen, setIsOpen] = useState(false);

  const columns: Array<ColumnDef<typeof features, ITableProps>> = [
    {
      accessorKey: "date",
      header: "Date",
      cell: (info) =>
        (info.getValue() as Date).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: (info) => {
        const value = info.getValue() as string;
        const isIncome = value === "income";
        return (
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
              isIncome ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"
            }`}
          >
            {value}
          </span>
        );
      },
    },
    {
      id: "delete",
      header: "Delete",
      cell: (info) => (
        <button
          onClick={() => handleDelete(info.row.original)}
          aria-label="Delete transaction"
          className="text-gray-400 hover:text-red-600 transition-colors"
        >
          <Trash2 size={16} />
        </button>
      ),
    },
  ];
  const table = useTable({
    features,
    columns,
    data: transactions,
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 lg:p-6">
      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8 gap-3">
        <h2 className="text-xl font-semibold text-gray-900">
          Recent Transactions
        </h2>
        <button
          className="w-full sm:w-auto flex items-center justify-center gap-1 lg:gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors shadow-sm"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-2xl lg:text-lg leading-none">+</span> Add
          Transaction
        </button>
      </div>
      {/* Table */}
      <div className="overflow-x-auto -mx-4 lg:mx-0">
        <table className="w-full border-collapse min-w-160">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-50">
                {headerGroup.headers.map((header, i) => (
                  <th
                    key={header.id}
                    className={`text-xs font-semibold text-gray-500 uppercase tracking-wide py-3 px-4 first:pl-4 last:pr-4 ${
                      i === 3 ? "text-right" : "text-left"
                    } ${i === 5 ? "w-12 text-center px-2" : ""}`}
                  >
                    {header.isPlaceholder ? null : (
                      <table.FlexRender header={header} />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center text-sm text-gray-400 py-10"
                >
                  No transactions yet. Add your first one to get started.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60 transition-colors"
                >
                  {row.getAllCells().map((cell, i) => (
                    <td
                      key={cell.id}
                      className={`py-4 px-4 first:pl-4 last:pr-4 text-sm ${
                        i === 0
                          ? "text-gray-400 whitespace-nowrap"
                          : i === 3
                            ? "text-right text-gray-900 font-medium"
                            : "text-gray-700"
                      } ${i === 5 ? "text-center px-2" : ""}`}
                    >
                      <table.FlexRender cell={cell} />
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <AddTransactionModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleTransaction}
      />
    </div>
  );
};
