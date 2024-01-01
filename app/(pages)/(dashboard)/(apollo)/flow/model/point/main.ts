import { FlowMomentObj, exampleFlowMoment } from "./moment/main";

export interface FlowPointObj {
  timeline: FlowMomentObj[];
}


export const exampleFlowTimeline: FlowMomentObj[] = [
  exampleFlowMoment,
  exampleFlowMoment,
  exampleFlowMoment,
];
