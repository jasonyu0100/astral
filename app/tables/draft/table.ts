import {
  exampleStars,
  exampleStar,
  starSchema,
} from './constellation/star/main';
import {
  constellationSchema,
  exampleConstellation,
  exampleConstellations,
} from './constellation/main';
import { TableDescriptor } from '../tables';

export const constellationTable: TableDescriptor = {
  example: exampleConstellation,
  examples: exampleConstellations,
  schema: constellationSchema,
};

export const starTable: TableDescriptor = {
  example: exampleStar,
  examples: exampleStars,
  schema: starSchema,
};
