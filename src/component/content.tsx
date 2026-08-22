// import SimpleBarChart from "../chart/barChart";
import { BalanceCard } from "./balanceCard";
import { Table } from "./table";

export const Content = () => {
  return (
    <div className="bg-blue-50 min-h-screen pt-20 lg:pt-24 pb-10 px-4 lg:px-10  space-y-10">
      <BalanceCard />
      {/* <div>
        <SimpleBarChart />
      </div> */}
      <Table />
    </div>
  );
};
