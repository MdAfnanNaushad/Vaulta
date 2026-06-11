import dayjs from "dayjs";

const InvestmentTable = ({
  investments = [],
}) => {
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
          border-b
          border-[#d2cecb]
          bg-white
        "
      >
        <h2
          className="
            text-[24px]
            font-medium
            text-[#0c0a08]
          "
        >
          Investment Portfolio
        </h2>

        <p
          className="
            mt-1
            text-[14px]
            text-[#999ba3]
          "
        >
          Active and completed investment plans.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr
              className="
                bg-white
                border-b
                border-[#d2cecb]
              "
            >
              <th
                className="
                  text-left
                  px-6
                  py-4
                  text-[13px]
                  font-medium
                  text-[#999ba3]
                  uppercase
                "
              >
                Plan
              </th>

              <th
                className="
                  text-left
                  px-6
                  py-4
                  text-[13px]
                  font-medium
                  text-[#999ba3]
                  uppercase
                "
              >
                Amount
              </th>

              <th
                className="
                  text-left
                  px-6
                  py-4
                  text-[13px]
                  font-medium
                  text-[#999ba3]
                  uppercase
                "
              >
                ROI
              </th>

              <th
                className="
                  text-left
                  px-6
                  py-4
                  text-[13px]
                  font-medium
                  text-[#999ba3]
                  uppercase
                "
              >
                Start Date
              </th>

              <th
                className="
                  text-left
                  px-6
                  py-4
                  text-[13px]
                  font-medium
                  text-[#999ba3]
                  uppercase
                "
              >
                End Date
              </th>

              <th
                className="
                  text-left
                  px-6
                  py-4
                  text-[13px]
                  font-medium
                  text-[#999ba3]
                  uppercase
                "
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {investments?.length > 0 ? (
              investments.map(
                (investment) => (
                  <tr
                    key={
                      investment._id
                    }
                    className="
                      border-b
                      border-[#e8e6e4]
                      hover:bg-white/70
                      transition-colors
                    "
                  >
                    <td
                      className="
                        px-6
                        py-5
                        text-[#0c0a08]
                        font-medium
                      "
                    >
                      {
                        investment.planName
                      }
                    </td>

                    <td
                      className="
                        px-6
                        py-5
                        text-[#0c0a08]
                      "
                    >
                      ₹
                      {Number(
                        investment.amount
                      ).toLocaleString()}
                    </td>

                    <td
                      className="
                        px-6
                        py-5
                        text-[#0c0a08]
                      "
                    >
                      {
                        investment.dailyROIPercentage
                      }
                      %
                    </td>

                    <td
                      className="
                        px-6
                        py-5
                        text-[#4d505d]
                      "
                    >
                      {dayjs(
                        investment.startDate
                      ).format(
                        "DD MMM YYYY"
                      )}
                    </td>

                    <td
                      className="
                        px-6
                        py-5
                        text-[#4d505d]
                      "
                    >
                      {dayjs(
                        investment.endDate
                      ).format(
                        "DD MMM YYYY"
                      )}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className="
                          inline-flex
                          items-center
                          px-3
                          py-1
                          rounded-full
                          text-[13px]
                          font-medium
                          bg-[#e4f222]/40
                          text-[#0c0a08]
                        "
                      >
                        {
                          investment.status
                        }
                      </span>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="
                    py-20
                    text-center
                    text-[#999ba3]
                  "
                >
                  No investments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestmentTable;