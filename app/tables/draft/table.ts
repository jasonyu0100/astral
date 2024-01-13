import { draftSchema, exampleDraft, exampleDrafts } from "./main";
import {
  exampleStars,
  exampleStar,
  starSchema,
} from "./constellation/star/main";
import {
  constellationSchema,
  exampleConstellation,
  exampleConstellations,
} from "./constellation/main";
import { TableDescriptor, TableObjectDescriptor } from "../tables";
import {
  getConstellationObj,
  getDraftObj,
  listConstellationObjs,
  listDraftObjs,
} from "@/graphql/queries";
import {
  deleteConstellationObj,
  deleteDraftObj,
  updateConstellationObj,
  updateDraftObj,
} from "@/graphql/mutations";

export const draftTable: TableDescriptor = {
  example: exampleDraft,
  examples: exampleDrafts,
  schema: draftSchema,
  reducer: {
    get: getDraftObj,
    list: listDraftObjs,
    update: updateDraftObj,
    delete: deleteDraftObj,
  },
};

export const constellationTable: TableDescriptor = {
  example: exampleConstellation,
  examples: exampleConstellations,
  schema: constellationSchema,
  reducer: {
    get: getConstellationObj,
    list: listConstellationObjs,
    update: updateConstellationObj,
    delete: deleteConstellationObj,
  }
};

export const starObject: TableObjectDescriptor = {
  example: exampleStar,
  examples: exampleStars,
  schema: starSchema,
};
