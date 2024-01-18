import { draftSchema, exampleDraft, exampleDrafts } from './main';
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
import { TableDescriptor, TableObjectDescriptor } from '../tables';

export const draftTable: TableDescriptor = {
  example: exampleDraft,
  examples: exampleDrafts,
  schema: draftSchema,
};

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
