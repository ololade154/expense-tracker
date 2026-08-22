import { tableFeatures, useTable, type ColumnDef } from "@tanstack/react-table";
import type { ITableProps } from "../types";
import { data } from "../data/balanceData";

const features = tableFeatures({});

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
];

export const Table = () => {
  const table = useTable({
    features,
    columns,
    data,
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 lg:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 lg:mb-10 ">
        <h2 className="text-xl font-semibold text-gray-900">
          Recent Transactions
        </h2>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium lg:px-4 lg:py-2.5 rounded-lg transition-colors">
          <span className="text-lg leading-none">+</span> Add Transaction
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-gray-200">
              {headerGroup.headers.map((header, i) => (
                <th
                  key={header.id}
                  className={`text-sm font-semibold text-gray-900 pb-3 ${
                    i === 3 ? "text-right" : "text-left"
                  } ${i === 4 ? "text-right pr-0" : ""}`}
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b border-gray-100 last:border-0">
              {row.getAllCells().map((cell, i) => (
                <td
                  key={cell.id}
                  className={`lg:py-4 text-sm ${
                    i === 0
                      ? "text-gray-400"
                      : i === 3
                        ? "text-right text-gray-900"
                        : "text-gray-700"
                  } ${i === 4 ? "text-right" : ""}`}
                >
                  <table.FlexRender cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
