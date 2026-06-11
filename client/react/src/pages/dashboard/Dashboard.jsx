import { useQuery } from "@tanstack/react-query";

import {
  Wallet,
  TrendingUp,
  Landmark,
  Users,
  Briefcase,
} from "lucide-react";

import StatCard from "../../components/cards/StatCard";
import ROIChart from "../../components/charts/ROIChart";
import EarningsChart from "../../components/charts/EarningsChart";
import TransactionsTable from "../../components/tables/TransactionsTable";
import LoadingSkeleton from "../../components/common/LoadingSkeleton";

import { getDashboard } from "../../api/dashboard.api";

const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboard,
  });

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <LoadingSkeleton />
          <LoadingSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section
        className="
          rounded-[12px]
          overflow-hidden
          border
          border-[#d2cecb]

          bg-gradient-to-r
          from-[#0c0a08]
          via-[#5683d2]
          to-[#f4f2f0]

          p-8
          md:p-12
        "
      >
        <div className="max-w-3xl">
          <span
            className="
              inline-flex
              items-center

              px-3
              py-1

              rounded-full

              bg-white/10
              backdrop-blur-md

              text-white
              text-sm
            "
          >
            Financial Intelligence Platform
          </span>

          <h1
            className="
              mt-5

              text-4xl
              md:text-6xl

              font-medium
              leading-tight

              text-white
            "
          >
            Monitor investments,
            referrals and earnings
            from a single dashboard.
          </h1>

          <p
            className="
              mt-5

              text-lg

              text-white/80

              max-w-2xl
            "
          >
            Track portfolio growth,
            referral performance,
            wallet balances and ROI
            distributions in real time.
          </p>
        </div>
      </section>

      {/* KPI Cards */}
      <section>
        <div className="mb-5">
          <h2
            className="
              text-2xl
              font-medium
              text-[#0c0a08]
            "
          >
            Portfolio Overview
          </h2>

          <p className="text-[#999ba3]">
            Key financial metrics
          </p>
        </div>

        <div
          className="
            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-5
          "
        >
          <StatCard
            title="Wallet Balance"
            value={`₹${data.walletBalance || 0}`}
            icon={<Wallet size={18} />}
          />

          <StatCard
            title="Total Investment"
            value={`₹${data.totalInvestment || 0}`}
            icon={<Landmark size={18} />}
          />

          <StatCard
            title="ROI Earned"
            value={`₹${data.totalROIEarned || 0}`}
            icon={<TrendingUp size={18} />}
          />

          <StatCard
            title="Referral Income"
            value={`₹${data.totalLevelIncome || 0}`}
            icon={<Users size={18} />}
          />

          <StatCard
            title="Active Plans"
            value={data.activeInvestments || 0}
            icon={<Briefcase size={18} />}
          />
        </div>
      </section>

      {/* Charts */}
      <section>
        <div className="mb-5">
          <h2
            className="
              text-2xl
              font-medium
              text-[#0c0a08]
            "
          >
            Performance Analytics
          </h2>

          <p className="text-[#999ba3]">
            Earnings and ROI growth
          </p>
        </div>

        <div
          className="
            grid
            gap-6
            xl:grid-cols-2
          "
        >
          <ROIChart
            data={data.monthlyROI}
          />

          <EarningsChart
            data={data.monthlyROI}
          />
        </div>
      </section>

      {/* Transactions */}
      <section>
        <div className="mb-5">
          <h2
            className="
              text-2xl
              font-medium
              text-[#0c0a08]
            "
          >
            Recent Activity
          </h2>

          <p className="text-[#999ba3]">
            Latest wallet and ROI
            transactions
          </p>
        </div>

        <TransactionsTable
          transactions={
            data.recentTransactions
          }
        />
      </section>
    </div>
  );
};

export default Dashboard;