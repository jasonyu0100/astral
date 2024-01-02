import { ProcessContextObj, exampleProcessContext } from "./context/main";
import { ProcessStepObj, exampleProcessSteps } from "./step/main";

export interface ProcessObj {
  processSteps: ProcessStepObj[];
  contexts: ProcessContextObj;
}

export const exampleProcessObj = {
  processSteps: exampleProcessSteps,
  contexts: exampleProcessContext,
};
