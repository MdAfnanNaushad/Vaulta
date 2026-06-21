const WalletSummary = ({
  data,
}) => {
  const cards = [
    {
      title: "Wallet Balance",
      value:
        data?.walletBalance || 0,
    },
    {
      title: "ROI Earned",
      value:
        data?.totalROIEarned || 0,
    },
    {
      title: "Referral Income",
      value:
        data?.totalLevelIncome || 0,
    },
  ];

  return (
    <div
      className="
        grid
        gap-6
        md:grid-cols-3
      "
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            bg-white
dark:bg-slate-900
            border
            border-slate-200
dark:border-slate-700
            rounded-[12px]
            p-6
            transition-all
            duration-300
            hover:bg-white
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
            {card.title}
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-normal
              text-slate-900
dark:text-white
              leading-none
            "
          >
            ₹
            {Number(
              card.value
            ).toLocaleString()}
          </h2>

          <div
            className="
              mt-6
              h-[4px]
              w-20
              rounded-full
              bg-[#e4f222]
            "
          />
        </div>
      ))}
    </div>
  );
};

export default WalletSummary;