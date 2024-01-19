import { TableDescriptor } from '../tables';
import {
  commentSchema,
  exampleComment,
  exampleComments,
} from './moment/comment/main';
import { exampleMoment, exampleMoments, momentSchema } from './moment/main';

export const momentTable: TableDescriptor = {
  example: exampleMoment,
  examples: exampleMoments,
  schema: momentSchema,
};

export const commentTable: TableDescriptor = {
  example: exampleComment,
  examples: exampleComments,
  schema: commentSchema,
};
