import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const EarningsBreakdown = ({
  data,
}) => {
  const chartData = [
    {
      name: "ROI Earnings",
      value:
        data?.totalROIEarned || 0,
    },
    {
      name: "Referral Income",
      value:
        data?.totalLevelIncome || 0,
    },
  ];

  const COLORS = [
    "#0c0a08",
    "#e4f222",
  ];

  return (
    <div
      className="
        bg-[#f4f2f0]
        border
        border-[#d2cecb]
        rounded-[12px]
        overflow-hidden
      "
    >
      {/* Header */}
      <div
        className="
          px-6
          py-5
          bg-white
          border-b
          border-[#d2cecb]
        "
      >
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
            mt-1
            text-[24px]
            font-medium
            text-[#0c0a08]
          "
        >
          Income Distribution
        </h2>
      </div>

      {/* Chart */}
      <div className="p-6">
        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={4}
            >
              {chartData.map(
                (
                  entry,
                  index
                ) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip
              contentStyle={{
                border:
                  "1px solid #d2cecb",
                borderRadius:
                  "12px",
                background:
                  "#ffffff",
                color:
                  "#0c0a08",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div
          className="
            mt-4
            flex
            flex-col
            gap-3
          "
        >
          {chartData.map(
            (
              item,
              index
            ) => (
              <div
                key={item.name}
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-3
                      w-3
                      rounded-full
                    "
                    style={{
                      backgroundColor:
                        COLORS[index],
                    }}
                  />

                  <span
                    className="
                      text-[#4d505d]
                      text-sm
                    "
                  >
                    {item.name}
                  </span>
                </div>

                <span
                  className="
                    text-[#0c0a08]
                    font-medium
                  "
                >
                  ₹
                  {Number(
                    item.value
                  ).toLocaleString()}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default EarningsBreakdown;