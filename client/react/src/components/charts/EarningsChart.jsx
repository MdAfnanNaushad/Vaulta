import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const EarningsChart = ({
  data,
}) => {
  const chartData =
    data?.map((item) => ({
      month: `${item._id.month}/${item._id.year}`,
      earnings: item.total,
    })) || [];

  return (
    <div
      className="
        rounded-[12px]
        border
        border-slate-200 dark:border-slate-700
        bg-white dark:bg-slate-900
        p-6
      "
    >
      <div className="mb-6">
        <p
          className="
            text-[13px]
            uppercase
            tracking-wide
            text-slate-900 dark:text-white
          "
        >
          Earnings
        </p>

        <h2
          className="
            mt-2
            text-2xl
            font-medium
            text-[#0c0a08]
          "
        >
          Monthly Earnings
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-[#999ba3]
          "
        >
          Total earnings generated each month
        </p>
      </div>

      <ResponsiveContainer
        width="100%"
        height={340}
      >
        <BarChart
          data={chartData}
          margin={{
            top: 10,
            right: 20,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid
            stroke="#d2cecb"
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="month"
            tick={{
              fill: "#999ba3",
              fontSize: 12,
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{
              fill: "#999ba3",
              fontSize: 12,
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #d2cecb",
              backgroundColor: "#ffffff",
              color: "#0c0a08",
            }}
          />

          <Bar
            dataKey="earnings"
            fill="#e4f222"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;