// APOLLO

export interface ApolloFlow {
  snapshots: FlowSnapshot[];
}

export interface FlowSnapshot {
  src: string;
}

export const defaultFlowSnapshot: FlowSnapshot = {
  src: "/apollo/flow/snapshots/1.png",
};

export const defaultFlowSnapshots: FlowSnapshot[] = [
  { src: "/apollo/flow/snapshots/1.png" },
  { src: "/apollo/flow/snapshots/2.png" },
  { src: "/apollo/flow/snapshots/3.png" },
  { src: "/apollo/flow/snapshots/4.png" },
  { src: "/apollo/flow/snapshots/5.png" },
  { src: "/apollo/flow/snapshots/6.png" },
];

export const defaultApolloFlow: ApolloFlow = {
  snapshots: defaultFlowSnapshots,
};

// CONSTELLATION

export interface ConstellationFlow {
  timeline: FlowTimeline;
}

export type FlowTimeline = FlowPoint[];

export interface FlowPoint {
  date: Date;
  snapshots: FlowPointSnapshot[];
}

export interface FlowPointSnapshot {
  snapshot: FlowSnapshot;
}

export const defaultFlowLeaf: FlowPointSnapshot = {
  snapshot: defaultFlowSnapshot,
};

export const defaultFlowPoint: FlowPoint = {
  date: new Date("2023-12-19"),
  snapshots: [defaultFlowLeaf, defaultFlowLeaf],
};

export const defaultFlowTimeline: FlowTimeline = [
  defaultFlowPoint,
  defaultFlowPoint,
  defaultFlowPoint,
];

export const defaultConstellationFlow: ConstellationFlow = {
  timeline: defaultFlowTimeline,
};
