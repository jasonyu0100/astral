import { TableDescriptor } from '../tables';
import { exampleChapter, exampleChapters } from './chapter/main';
import { exampleSpace, exampleSpaces } from './main';

export const spaceTable: TableDescriptor = {
  example: exampleSpace,
  examples: exampleSpaces,
};

export const chapterTable: TableDescriptor = {
  example: exampleChapter,
  examples: exampleChapters,
};
