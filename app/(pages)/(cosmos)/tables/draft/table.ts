import { exampleDraft, exampleDrafts } from "./main";
import { exampleStars, exampleStar } from "./constellation/star/main";
import {
  exampleConstellation,
  exampleConstellations,
} from "./constellation/main";

export const draftTable = {
  example: exampleDraft,
  examples: exampleDrafts,
  constellation: {
    example: exampleConstellation,
    examples: exampleConstellations,
  },
  star: {
    example: exampleStar,
    examples: exampleStars,
  },
};
