// APOLLO

export interface ApolloFlow {
  snapshots: FlowSnapshot[];
}

export interface FlowSnapshot {
  src: string;
}

export const defaultFlowSnapshot: FlowSnapshot = {
  src: "/voyager/craft/snapshots/1.png",
};

export const defaultFlowSnapshots: FlowSnapshot[] = [
  { src: "/voyager/craft/snapshots/1.png" },
  { src: "/voyager/craft/snapshots/2.png" },
  { src: "/voyager/craft/snapshots/3.png" },
  { src: "/voyager/craft/snapshots/4.png" },
  { src: "/voyager/craft/snapshots/5.png" },
  { src: "/voyager/craft/snapshots/6.png" },
];

export const defaultApolloFlow: ApolloFlow = {
  snapshots: defaultFlowSnapshots,
};

// CONSTELLATION

export interface ConstellationFlow {
  tree: FlowTree;
}

export type FlowTree = FlowBranch[];

export interface FlowBranch {
  date: Date;
  leaves: FlowLeaf[];
}

export interface FlowLeaf {
  snapshot: FlowSnapshot;
}

export const defaultFlowLeaf: FlowLeaf = {
  snapshot: defaultFlowSnapshot,
};

export const defaultFlowBranch: FlowBranch = {
  date: new Date("2023-12-19"),
  leaves: [defaultFlowLeaf, defaultFlowLeaf],
};

export const defaultFlowTree: FlowTree = [
  defaultFlowBranch,
  defaultFlowBranch,
  defaultFlowBranch,
];

export const defaultConstellationFlow: ConstellationFlow = {
  tree: defaultFlowTree,
};
