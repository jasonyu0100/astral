import { TableDescriptor } from "../tables";
import { chapterSchema, exampleChapter, exampleChapters } from "./chapter/main";
import { exampleSpace, exampleSpaces, spaceSchema } from "./main";

export const spaceTable: TableDescriptor = {
  example: exampleSpace,
  examples: exampleSpaces,
  schema: spaceSchema,
};

export const chapterTable: TableDescriptor = {
  example: exampleChapter,
  examples: exampleChapters,
  schema: chapterSchema,
};
