import {
  getChapterObj,
  getSpaceObj,
  listChapterObjs,
  listSpaceObjs,
} from "@/graphql/queries";
import { TableDescriptor } from "../tables";
import { chapterSchema, exampleChapter, exampleChapters } from "./chapter/main";
import { exampleSpace, exampleSpaces, spaceSchema } from "./main";
import {
  deleteChapterObj,
  deleteSpaceObj,
  updateChapterObj,
  updateSpaceObj,
} from "@/graphql/mutations";

export const spaceTable: TableDescriptor = {
  example: exampleSpace,
  examples: exampleSpaces,
  schema: spaceSchema,
  reducer: {
    get: getSpaceObj,
    list: listSpaceObjs,
    update: updateSpaceObj,
    delete: deleteSpaceObj,
  },
};

export const chapterTable: TableDescriptor = {
  example: exampleChapter,
  examples: exampleChapters,
  schema: chapterSchema,
  reducer: {
    get: getChapterObj,
    list: listChapterObjs,
    update: updateChapterObj,
    delete: deleteChapterObj,
  },
};
