import { useQuery } from "@tanstack/react-query";

import WalletSummary from "../../components/wallet/WalletSummary";
import EarningsBreakdown from "../../components/wallet/EarningsBreakdown";
import TransactionHistory from "../../components/wallet/TransactionHistory";

import { getWalletData } from "../../api/wallet.api";

import LoadingSkeleton from "../../components/common/LoadingSkeleton";

const Wallet = () => {
  const { data, isLoading } =
    useQuery({
      queryKey: ["wallet"],
      queryFn: getWalletData,
    });

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Page Heading */}
      <div>
        <p
          className="
            text-[13px]
            uppercase
            tracking-wide
            text-[#999ba3]
          "
        >
          Financial Overview
        </p>

        <h1
          className="
            mt-2
            text-4xl
            md:text-5xl
            font-normal
            text-[#0c0a08]
            leading-tight
          "
        >
          Wallet
        </h1>

        <p
          className="
            mt-3
            text-[16px]
            text-[#999ba3]
            max-w-xl
          "
        >
          Track balances, referral earnings,
          ROI income, and transaction activity.
        </p>
      </div>

      {/* Summary Cards */}
      <WalletSummary data={data} />

      {/* Analytics Section */}
      <div
        className="
          grid
          gap-6
          xl:grid-cols-2
        "
      >
        <EarningsBreakdown
          data={data}
        />

        <TransactionHistory
          transactions={
            data?.recentTransactions ||
            []
          }
        />
      </div>
    </div>
  );
};

export default Wallet;