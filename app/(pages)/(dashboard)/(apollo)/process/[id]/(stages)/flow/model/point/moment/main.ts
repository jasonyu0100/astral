import { CraftFile } from "@/(pages)/(dashboard)/(voyager)/craft/model/drive/section/folder/file/main";
import {
  exampleFlowSnapshot,
} from "../../context/snapshot/main";

export interface FlowMomentObj {
  id: string;
  date: string;
  snapshots: CraftFile[];
}

export const exampleFlowMoment: FlowMomentObj = {
  id: "0",
  date: new Date("2023-12-19").toISOString(),
  snapshots: [exampleFlowSnapshot, exampleFlowSnapshot],
};

export const exampleFlowMoments: FlowMomentObj[] = [
  {
    id: "0",
    date: new Date("2023-12-19").toISOString(),
    snapshots: [{...exampleFlowSnapshot}],
  },
  {
    id: "1",
    date: new Date("2023-12-19").toISOString(),
    snapshots: [exampleFlowSnapshot, exampleFlowSnapshot],
  },
];
