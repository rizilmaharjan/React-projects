import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { Data } from "../data/Data";

const Chart = ({title, aspect}) => {
  return (
    <>
      <div className="flex-[2] bg-white drop-shadow-lg py-4 px-3">
        <div className="mb-6">
          <p className="text-[#908E9B] opacity-40 ">{title}</p>
        </div>
        <ResponsiveContainer width={"100%"} aspect={aspect}>
          <AreaChart
            width={730}
            height={250}
            data={Data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
