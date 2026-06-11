const TransactionHistory = ({
  transactions = [],
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
          Activity
        </p>

        <h2
          className="
            mt-1
            text-[24px]
            font-medium
            text-[#0c0a08]
          "
        >
          Transaction History
        </h2>
      </div>

      <div className="p-6">
        {transactions.length ===
        0 ? (
          <div
            className="
              py-16
              text-center
              text-[#999ba3]
            "
          >
            No transactions found
          </div>
        ) : (
          <div className="space-y-4">
            {transactions.map(
              (
                transaction
              ) => (
                <div
                  key={
                    transaction._id
                  }
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#e5e2df]
                    pb-4
                  "
                >
                  <div>
                    <h3
                      className="
                        text-[#0c0a08]
                        font-medium
                      "
                    >
                      {
                        transaction.type
                      }
                    </h3>

                    <p
                      className="
                        text-sm
                        text-[#999ba3]
                        mt-1
                      "
                    >
                      {
                        transaction.status
                      }
                    </p>
                  </div>

                  <div
                    className="
                      text-right
                    "
                  >
                    <p
                      className="
                        text-[#0c0a08]
                        font-medium
                        text-lg
                      "
                    >
                      ₹
                      {Number(
                        transaction.amount
                      ).toLocaleString()}
                    </p>

                    <span
                      className="
                        inline-flex
                        items-center
                        mt-2
                        px-3
                        py-1
                        rounded-full
                        text-[12px]
                        font-medium
                        bg-[#e4f222]/40
                        text-[#0c0a08]
                      "
                    >
                      Completed
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;