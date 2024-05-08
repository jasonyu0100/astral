import { exampleIdeas, exampleIdea } from './part/idea/main';
import {
  examplePart,
  exampleParts,
} from './part/main';
import { ModelExample } from '../tables';

export const partExamples: ModelExample = {
  description: "Part examples.",
  example: examplePart,
  examples: exampleParts,
};

export const ideaExamples: ModelExample = {
  description: "Idea examples.",
  example: exampleIdea,
  examples: exampleIdeas,
};
