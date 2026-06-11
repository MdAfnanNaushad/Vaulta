const TransactionsTable = ({
  transactions = [],
}) => {
  return (
    <div
      className="
        rounded-[12px]
        border
        border-[#d2cecb]
        bg-white
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
          Ledger
        </p>

        <h2
          className="
            mt-2
            text-2xl
            font-medium
            text-[#0c0a08]
          "
        >
          Recent Transactions
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-[#999ba3]
          "
        >
          Latest activity across your account
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr
              className="
                border-b
                border-[#d2cecb]
                bg-[#f4f2f0]
              "
            >
              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-medium
                  uppercase
                  tracking-wide
                  text-[#999ba3]
                "
              >
                Transaction
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-medium
                  uppercase
                  tracking-wide
                  text-[#999ba3]
                "
              >
                Amount
              </th>

              <th
                className="
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-medium
                  uppercase
                  tracking-wide
                  text-[#999ba3]
                "
              >
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions?.map(
              (transaction) => (
                <tr
                  key={transaction._id}
                  className="
                    border-b
                    border-[#f1efed]
                    hover:bg-[#faf9f8]
                    transition-colors
                  "
                >
                  <td className="px-6 py-5">
                    <div>
                      <p
                        className="
                          font-medium
                          text-[#0c0a08]
                        "
                      >
                        {transaction.type}
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-[#999ba3]
                        "
                      >
                        Transaction ID
                      </p>
                    </div>
                  </td>

                  <td
                    className="
                      px-6
                      py-5
                      font-medium
                      text-[#0c0a08]
                    "
                  >
                    ₹{transaction.amount}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`
                        inline-flex
                        items-center
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-medium
                        ${
                          transaction.status?.toLowerCase() ===
                          "completed"
                            ? "bg-[#e4f222]/30 text-[#0c0a08]"
                            : transaction.status?.toLowerCase() ===
                              "pending"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              )
            )}

            {transactions?.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="
                    py-16
                    text-center
                    text-[#999ba3]
                  "
                >
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;