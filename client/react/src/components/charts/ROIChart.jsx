import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const ROIChart = ({ data }) => {
  const formattedData =
    data?.map((item) => ({
      month: `${item._id.month}/${item._id.year}`,
      roi: item.total,
    })) || [];

  return (
    <div
      className="
        rounded-[12px]
        border
        border-[#d2cecb]
        bg-[#f4f2f0]
        p-6
      "
    >
      <div className="mb-6">
        <p
          className="
            text-[13px]
            uppercase
            tracking-wide
            text-[#999ba3]
          "
        >
          Analytics
        </p>

        <h2
          className="
            mt-2
            text-2xl
            font-medium
            text-[#0c0a08]
          "
        >
          ROI Growth
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-[#999ba3]
          "
        >
          Monthly return on investment trend
        </p>
      </div>

      <ResponsiveContainer
        width="100%"
        height={340}
      >
        <AreaChart
          data={formattedData}
          margin={{
            top: 10,
            right: 20,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient
              id="roiGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#e4f222"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#e4f222"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

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

          <Area
            type="monotone"
            dataKey="roi"
            stroke="#0c0a08"
            strokeWidth={3}
            fill="url(#roiGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ROIChart;