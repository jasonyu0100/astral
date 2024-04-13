import { TableDescriptor } from '../tables';
import { exampleComment, exampleComments } from '../sea/update/comment/main';
import { exampleMoment, exampleMoments } from '../journal/moment/main';

export const momentTable: TableDescriptor = {
  example: exampleMoment,
  examples: exampleMoments,
};

export const commentTable: TableDescriptor = {
  example: exampleComment,
  examples: exampleComments,
};
