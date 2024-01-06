import { ProcessContextObj, exampleProcessContext } from "./context/main";
import { ProcessStepObj, exampleProcessSteps } from "./step/main";

export interface ProcessObj {
  steps: ProcessStepObj[];
  contexts: ProcessContextObj;
}

export const exampleProcessObj : ProcessObj = {
  steps: exampleProcessSteps,
  contexts: exampleProcessContext,
};
