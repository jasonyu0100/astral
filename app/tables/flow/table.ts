import {
  getFlowObj,
  getMomentObj,
  listFlowObjs,
  listMomentObjs,
} from "@/graphql/queries";
import { TableDescriptor, TableObjectDescriptor } from "../tables";
import { exampleFlow, exampleFlows, flowSchema } from "./main";
import {
  commentSchema,
  exampleComment,
  exampleComments,
} from "./moment/comment/main";
import { exampleMoment, exampleMoments, momentSchema } from "./moment/main";
import {
  deleteFlowObj,
  deleteMomentObj,
  updateFlowObj,
  updateMomentObj,
} from "@/graphql/mutations";

export const flowTable: TableDescriptor = {
  example: exampleFlow,
  examples: exampleFlows,
  schema: flowSchema,
  reducer: {
    get: getFlowObj,
    list: listFlowObjs,
    update: updateFlowObj,
    delete: deleteFlowObj,
  },
};

export const momentTable: TableDescriptor = {
  example: exampleMoment,
  examples: exampleMoments,
  schema: momentSchema,
  reducer: {
    get: getMomentObj,
    list: listMomentObjs,
    update: updateMomentObj,
    delete: deleteMomentObj,
  },
};

export const commentObject: TableObjectDescriptor = {
  example: exampleComment,
  examples: exampleComments,
  schema: commentSchema,
};
