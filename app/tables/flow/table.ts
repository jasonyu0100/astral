import { TableDescriptor } from '../tables';
import {
  exampleComment,
  exampleComments,
} from './moment/comment/main';
import { exampleMoment, exampleMoments } from './moment/main';

export const momentTable: TableDescriptor = {
  example: exampleMoment,
  examples: exampleMoments,
};

export const commentTable: TableDescriptor = {
  example: exampleComment,
  examples: exampleComments,
};
