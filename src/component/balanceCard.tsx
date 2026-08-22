import { balanceData } from "../data/balanceData";

const colorMap = {
  blue: { bar: "bg-blue-500", iconText: "text-blue-500" },
  green: {
    bar: "bg-green-500",
    iconText: "text-green-500",
  },
  red: { bar: "bg-red-500", iconText: "text-red-500" },
};

export const BalanceCard = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {balanceData.map((data) => {
        const colors = colorMap[data.color];
        const Icon = data.icon;
        return (
          <div
            key={data.title}
            className="relative bg-white rounded-2xl shadow-md pl-8 pr-6 py-6 overflow-hidden"
          >
            {/* left accent bar */}
            <div
              className={`absolute left-0 top-0 h-full w-1 rounded-l-2xl ${colors.bar}`}
            />

            {/* top row */}
            <div className="flex items-center justify-between">
              <div className="text-gray-500 font-normal">{data.title}</div>
              <div className={`p-2 rounded-lg  ${colors.iconText}`}>
                <Icon size={20} />
              </div>
            </div>

            {/* amount */}
            <div className="mt-6 text-2xl font-medium text-gray-900">
              {data.amount}
            </div>

            {/* subtext */}
            <div className="mt-1 text-sm text-gray-400 font-light">
              {data.subTitle}
            </div>
          </div>
        );
      })}
    </div>
  );
};
