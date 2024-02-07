import { TableDescriptor } from '../tables';
import { exampleFile, exampleFiles } from './file/main';
import { exampleResource, exampleResources } from './main';
import { exampleNote, exampleNotes } from './note/main';
import { exampleLoom, exampleLooms } from './log/main';

export const resourceTable: TableDescriptor = {
  example: exampleResource,
  examples: exampleResources,
};

export const fileTable: TableDescriptor = {
  example: exampleFile,
  examples: exampleFiles,
};

export const stickyTable: TableDescriptor = {
  example: exampleNote,
  examples: exampleNotes,
};

export const loomTable: TableDescriptor = {
  example: exampleLoom,
  examples: exampleLooms,
};
