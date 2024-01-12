import { exampleFlow, exampleFlows } from "./main";
import { exampleSession, exampleSessions } from "./session/main";
import { exampleComment, exampleComments } from "./session/moment/comment/main";
import { exampleMoment, exampleMoments } from "./session/moment/main";

export const flowTable = {
  example: exampleFlow,
  examples: exampleFlows,
  session: {
    example: exampleSession,
    examples: exampleSessions,
    moment: {
      example: exampleMoment,
      examples: exampleMoments,
      comment: {
        example: exampleComment,
        examples: exampleComments
      }
    },
  },
};
