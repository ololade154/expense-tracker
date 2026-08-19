import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { label: "Jan", income: 380000, expense: 210000 },
  { label: "Feb", income: 405000, expense: 195000 },
  { label: "Mar", income: 390000, expense: 240000 },
  { label: "Apr", income: 420000, expense: 180000 },
  { label: "May", income: 410000, expense: 225000 },
  { label: "Jun", income: 425000, expense: 131000 },
];

const SimpleBarChart = () => {
  return (
    <div style={{ width: "100%", maxWidth: "700px", aspectRatio: 1.618 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="label" />
          <YAxis width={60} />

          <Legend />
          <Bar dataKey="income" fill="#16a34a" radius={[10, 10, 0, 0]} />
          <Bar dataKey="expense" fill="#dc2626" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
