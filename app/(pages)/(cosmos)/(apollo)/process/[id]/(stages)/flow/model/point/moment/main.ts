import { CraftFile } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/file/type";
import {
  exampleFlowSnapshot,
} from "../../context/snapshot/main";

export interface FlowMomentObj {
  id: string;
  time: string;
  snapshots: CraftFile[];
}

export const exampleFlowMoment: FlowMomentObj = {
  id: "0",
  time: new Date("2023-12-19").toISOString(),
  snapshots: [exampleFlowSnapshot, exampleFlowSnapshot],
};

export const exampleFlowMoments: FlowMomentObj[] = [
  {
    id: "0",
    time: new Date("2023-12-19").toISOString(),
    snapshots: [{...exampleFlowSnapshot}],
  },
  {
    id: "1",
    time: new Date("2023-12-19").toISOString(),
    snapshots: [exampleFlowSnapshot, exampleFlowSnapshot],
  },
];
