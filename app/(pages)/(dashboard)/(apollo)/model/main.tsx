import { DraftContextObj } from "../draft/model/context/main";
import { FlowContextObj } from "../flow/model/context/main";
import { SeaContextObj } from "../sea/model/context/main";
import { StormContextObj } from "../storm/model/context/main";
import { ProcessObj, exampleProcessContext } from "./process/main";
import { ProcessStepObj, exampleProcessStep, exampleProcessSteps } from "./process/step/main";


export const processModel: {
  process: {
    processSteps?: {
      processStep: ProcessStepObj;
      example: ProcessStepObj[];
    };
    contexts?: {
      example: {
        stormContext: StormContextObj;
        draftContext: DraftContextObj;
        flowContext: FlowContextObj;
        seaContext: SeaContextObj;
      };
    };
    example: ProcessObj;
  };
} = {
  process: {
    processSteps: {
      example: exampleProcessSteps,
      processStep: exampleProcessStep,
    },
    contexts: {
      example: exampleProcessContext,
    },
    example: {
      processSteps: exampleProcessSteps,
      contexts: exampleProcessContext,
    },
  },
};
