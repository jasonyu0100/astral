import { exampleFlow, exampleFlows } from "./main";
import { exampleComment, exampleComments } from "./moment/comment/main";
import { exampleMoment, exampleMoments } from "./moment/main";

export const flowTable = {
  example: exampleFlow,
  examples: exampleFlows,
  moment: {
    example: exampleMoment,
    examples: exampleMoments,
    comment: {
      example: exampleComment,
      examples: exampleComments,
    },
  },
};
