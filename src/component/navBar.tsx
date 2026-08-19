import { Wallet } from "lucide-react";

export const NavBar = () => {
  return (
    <div className="bg-white w-full px-4 py-3 sm:px-8 lg:px-10 lg:py-4 flex items-center justify-between shadow-md shadow-gray-300/50 fixed top-0 left-0 z-50">
      {/* logo */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Wallet size={22} className="text-white" />
        </div>
        <div className="text-base sm:text-lg font-normal">Expense Tracker</div>
      </div>
      {/* profile */}
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-normal">
          SO
        </div>
        <div className="hidden sm:block">Shogbaike Ololade</div>
      </div>
    </div>
  );
};
