import { useState } from "react";

import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { Plus } from "lucide-react";

import InvestmentTable from "../../components/tables/InvestmentTable";
import CreateInvestmentModal from "../../components/investments/CreateInvestmentModal";

import {
  getInvestments,
  createInvestment,
} from "../../api/investment.api";

const Investments = () => {
  const [open, setOpen] =
    useState(false);

  const queryClient =
    useQueryClient();

  const { data } = useQuery({
    queryKey: ["investments"],
    queryFn: getInvestments,
  });

  const mutation =
    useMutation({
      mutationFn:
        createInvestment,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [
            "investments",
          ],
        });

        setOpen(false);
      },
    });

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          md:items-end
          md:justify-between
          gap-6
        "
      >
        <div>
          <p
            className="
              text-[13px]
              uppercase
              tracking-wide
              text-[#999ba3]
            "
          >
            Portfolio
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
            Investments
          </h1>

          <p
            className="
              mt-3
              text-[16px]
              text-[#999ba3]
              max-w-xl
            "
          >
            Manage active investment plans,
            monitor returns, and track
            portfolio performance.
          </p>
        </div>

        <button
          onClick={() =>
            setOpen(true)
          }
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-[4px]
            bg-[#e4f222]
            text-[#0c0a08]
            font-medium
            transition-all
            hover:opacity-90
          "
        >
          <Plus size={18} />

          New Investment →
        </button>
      </div>

      {/* Table */}
      <InvestmentTable
        investments={data}
      />

      {open && (
        <CreateInvestmentModal
          onSubmit={(data) =>
            mutation.mutate(data)
          }
          closeModal={() =>
            setOpen(false)
          }
        />
      )}
    </div>
  );
};

export default Investments;