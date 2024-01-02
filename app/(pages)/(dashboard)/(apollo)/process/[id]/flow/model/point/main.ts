import {
  FlowMomentObj,
  exampleFlowMoments,
} from "./moment/main";

export interface FlowPointObj {
  timeline: FlowMomentObj[];
}

export const exampleFlowPoint = {
  timeline: exampleFlowMoments,
};
