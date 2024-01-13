import { exampleMoments } from "./moment/main";

export interface FlowObj {
  id: string;
  momentIds: string[];
}

export const exampleFlow: FlowObj = {
  id: "0",
  momentIds: exampleMoments.map((moment) => moment.id),
};

export const exampleFlows: FlowObj[] = [
  {
    id: "0",
    momentIds: exampleMoments.map((moment) => moment.id),
  },
  {
    id: "1",
    momentIds: exampleMoments.map((moment) => moment.id),
  },
];
