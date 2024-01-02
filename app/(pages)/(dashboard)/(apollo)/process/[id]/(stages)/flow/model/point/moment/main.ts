import { FlowSnapshotObj, exampleFlowSnapshot } from "../../context/snapshot/main";

export interface FlowMomentObj {
  date: Date;
  snapshots: FlowSnapshotObj[];
}

export const exampleFlowMoment: FlowMomentObj = {
  date: new Date("2023-12-19"),
  snapshots: [exampleFlowSnapshot, exampleFlowSnapshot],
};

export const exampleFlowMoments: FlowMomentObj[] = [
    exampleFlowMoment,
    exampleFlowMoment,
    exampleFlowMoment,
]