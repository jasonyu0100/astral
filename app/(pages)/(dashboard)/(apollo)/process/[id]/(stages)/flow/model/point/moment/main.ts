import {
  FlowSnapshotObj,
  exampleFlowSnapshot,
} from "../../context/snapshot/main";

export interface FlowMomentObj {
  id: string;
  date: Date;
  snapshots: FlowSnapshotObj[];
}

export const exampleFlowMoment: FlowMomentObj = {
  id: "0",
  date: new Date("2023-12-19"),
  snapshots: [exampleFlowSnapshot, exampleFlowSnapshot],
};

export const exampleFlowMoments: FlowMomentObj[] = [
  {
    id: "0",
    date: new Date("2023-12-19"),
    snapshots: [{...exampleFlowSnapshot}],
  },
  {
    id: "1",
    date: new Date("2023-12-19"),
    snapshots: [exampleFlowSnapshot, exampleFlowSnapshot],
  },
];
