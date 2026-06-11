let nodeCounter = 0;

export const buildReferralGraph =
  (
    node,
    parentId = null,
    depth = 0,
    nodes = [],
    edges = []
  ) => {
    const currentId = `node-${nodeCounter++}`;

    nodes.push({
      id: currentId,

      position: {
        x: depth * 300,
        y: nodes.length * 150,
      },

      type: "userNode",

      data: {
        name:
          node.user?.fullName ||
          "User",

        role: "Investor",
      },
    });

    if (parentId) {
      edges.push({
        id: `${parentId}-${currentId}`,

        source: parentId,

        target: currentId,

        animated: true,
      });
    }

    if (
      node.children &&
      node.children.length
    ) {
      node.children.forEach(
        (child) =>
          buildReferralGraph(
            child,
            currentId,
            depth + 1,
            nodes,
            edges
          )
      );
    }

    return {
      nodes,
      edges,
    };
  };