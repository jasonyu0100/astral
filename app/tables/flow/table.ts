import { ObjectDescriptor, TableDescriptor, TableObjectDescriptor } from "../tables";
import { exampleFlow, exampleFlows, flowSchema } from "./main";
import { commentSchema, exampleComment, exampleComments } from "./moment/comment/main";
import { exampleMoment, exampleMoments, momentSchema } from "./moment/main";

export const flowTable: TableDescriptor = {
  example: exampleFlow,
  examples: exampleFlows,
  schema: flowSchema,
};

export const momentTable: TableDescriptor = {
  example: exampleMoment,
  examples: exampleMoments,
  schema: momentSchema,
};

export const commentObject: TableObjectDescriptor = {
  example: exampleComment,
  examples: exampleComments,
  schema: commentSchema
};
