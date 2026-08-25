import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { X } from "lucide-react";
import { Input } from "../component/input";
import { Select } from "../component/select";
import { useState } from "react";
import type { ITableProps } from "../types";

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (transaction: Omit<ITableProps, "id">) => void;
}

export const AddTransactionModal = ({
  isOpen,
  onClose,
  onSave,
}: AddTransactionModalProps) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const handleSave = () => {
    onSave({
      date: new Date(date),
      category,
      description,
      amount,
      type: type as "expense" | "income",
    });
    setDescription("");
    setAmount("");
    setCategory("");
    setDate("");
    setType("");
    onClose();
  };
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg w-full space-y-3 rounded-2xl bg-white p-8 shadow-xl">
          <div className="flex items-centre justify-between">
            <DialogTitle className="text-lg font-semibold text-gray-900">
              Add New Transaction
            </DialogTitle>
            <X size={16} className="text-gray-900" onClick={onClose} />
          </div>
          <Description className="text-sm text-gray-500">
            Entre the details of your transaction below
          </Description>
          <div className="space-y-3">
            <Input
              id="description"
              label="Description"
              type="text"
              placeholder="e.g,Grocery Shopping"
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <Input
              id="amount"
              label="Amount"
              type="number"
              placeholder="0.00"
              required
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
            <Select
              id="category"
              label="Category"
              placeholder="Select a category"
              options={[
                { label: "Salary", value: "Salary" },
                { label: "Food & Dining", value: "expense" },
                { label: "Transportation", value: "Transportation" },
                { label: "Shopping", value: "Shopping" },
                { label: "Entertainment", value: "Entertainment" },
                { label: "Bills $ Utilities", value: "Bills $ Utilities" },
                { label: "Healthcare", value: "Healthcare" },
              ]}
              required
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
            <Input
              id="date"
              label="Date"
              type="Date"
              placeholder="08/23/2026"
              required
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            <Input
              id="type"
              label="Type"
              type="text"
              placeholder="Expense"
              required
              value={type}
              onChange={(event) => setType(event.target.value)}
            />
          </div>

          <div className="flex gap-3  pt-2 justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors  border border-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Save Transaction
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
