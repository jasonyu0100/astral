import {
  exampleStars,
  exampleStar,
} from './constellation/star/main';
import {
  exampleConstellation,
  exampleConstellations,
} from './constellation/main';
import { TableDescriptor } from '../tables';

export const constellationTable: TableDescriptor = {
  example: exampleConstellation,
  examples: exampleConstellations,
};

export const starTable: TableDescriptor = {
  example: exampleStar,
  examples: exampleStars,
};
