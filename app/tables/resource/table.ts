import { TableDescriptor } from '../tables';
import { exampleFile, exampleFiles } from './file/main';
import { exampleResource, exampleResources } from './main';
import { exampleNote, exampleNotes } from './note/main';
import { exampleLog, exampleLogs } from './log/main';

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

export const logTable: TableDescriptor = {
  example: exampleLog,
  examples: exampleLogs,
};
