import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";

import "reactflow/dist/style.css";

import { getReferralTree } from "../../api/referral.api";
import UserNode from "../../components/referral/UserNode";
import { buildReferralGraph } from "../../utils/buildReferralGraph";

const nodeTypes = {
  userNode: UserNode,
};

const ReferralTree = () => {
  const { data, isLoading } =
    useQuery({
      queryKey: [
        "referralTree",
      ],
      queryFn:
        getReferralTree,
    });

  const graph =
    useMemo(() => {
      if (!data)
        return {
          nodes: [],
          edges: [],
        };

      return buildReferralGraph(
        data
      );
    }, [data]);

  if (isLoading) {
    return (
      <div className="text-[#999ba3]">
        Loading referral network...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[13px] uppercase tracking-wide text-[#999ba3]">
          Network
        </p>

        <h1 className="mt-2 text-5xl font-normal text-[#0c0a08]">
          Referral Tree
        </h1>

        <p className="mt-3 text-[#999ba3]">
          Visualize your referral hierarchy
          and network growth.
        </p>
      </div>

      <div
        className="
          h-[80vh]
          bg-[#f4f2f0]
          border
          border-[#d2cecb]
          rounded-[12px]
          overflow-hidden
        "
      >
        <ReactFlow
          nodes={graph.nodes}
          edges={graph.edges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background color="#d2cecb" />

          <Controls />

          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
};

export default ReferralTree;