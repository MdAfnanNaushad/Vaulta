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
    border-slate-200
    dark:border-slate-700

    bg-gradient-to-r
    from-[#0f172a]
    via-[#1e3a8a]
    to-[#06b6d4]

    dark:from-[#020617]
    dark:via-[#0f172a]
    dark:to-[#1e293b]

    p-8
    md:p-12
  "
>
  <div className="max-w-3xl">
    <p
      className="
        text-cyan-100
        text-sm
        uppercase
        tracking-wider
      "
    >
      Investment Dashboard
    </p>

    <h1
      className="
        mt-3
        text-3xl
        md:text-5xl
        font-bold
        text-white
      "
    >
      Welcome Back,
      {" "}
      {data?.user?.fullName || "Investor"}
    </h1>

    <p
      className="
        mt-4
        text-slate-200
        text-lg
      "
    >
      Track your investments, monitor ROI,
      and grow your wealth through referrals.
    </p>

    <div className="mt-8 flex flex-wrap gap-4">
      <div
        className="
          bg-white/10
          backdrop-blur
          px-5
          py-3
          rounded-xl
        "
      >
        <p className="text-slate-300 text-sm">
          Wallet Balance
        </p>

        <p className="text-white text-2xl font-bold">
          ₹{data?.walletBalance || 0}
        </p>
      </div>

      <div
        className="
          bg-white/10
          backdrop-blur
          px-5
          py-3
          rounded-xl
        "
      >
        <p className="text-slate-300 text-sm">
          Total ROI
        </p>

        <p className="text-white text-2xl font-bold">
          ₹{data?.roiTotal || 0}
        </p>
      </div>
    </div>
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
            value={`₹${data.roiTotal || 0}`}
            icon={<TrendingUp size={18} />}
          />

          <StatCard
            title="Referral Income"
            value={`₹${data.referralTotal || 0}`}
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