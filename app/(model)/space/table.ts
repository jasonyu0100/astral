import { ModelExample } from '../tables';
import { exampleChapter, exampleChapters } from '../chapter/main';
import { exampleSpace, exampleSpaces } from './main';

export const spaceExamples: ModelExample = {
  description: "Space examples.",
  example: exampleSpace,
  examples: exampleSpaces,
};

export const chapterExamples: ModelExample = {
  description: "Chapter examples.",
  example: exampleChapter,
  examples: exampleChapters,
};
