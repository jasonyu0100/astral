import { ProcessContextObj, exampleProcessContext } from "./process/context/main";
import {
  ProcessObj,
  exampleProcessObj,
} from "./process/main";
import {
  ProcessStepObj,
  exampleProcessStep,
  exampleProcessSteps,
} from "./process/step/main";

export const processModel: {
  process: {
    steps: {
      step: {
        example: ProcessStepObj;
      };
      example: ProcessStepObj[];
    };
    contexts: {
      example: ProcessContextObj;
    };
    example: ProcessObj;
  };
} = {
  process: {
    steps: {
      step: {
        example: exampleProcessStep,
      },
      example: exampleProcessSteps,
    },
    contexts: {
      example: exampleProcessContext,
    },
    example: exampleProcessObj,
  },
};
