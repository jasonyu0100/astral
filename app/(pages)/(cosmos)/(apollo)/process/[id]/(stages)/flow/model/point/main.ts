import {
  FlowMomentObj,
  exampleFlowMoments,
} from "./moment/main";

export interface FlowPointObj {
  moments: FlowMomentObj[];
}

export const exampleFlowPoint: FlowPointObj = {
  moments: exampleFlowMoments,
};
