import { ModelExample } from '../tables';
import { exampleFile, exampleFiles } from './file/main';
import { exampleResource, exampleResources } from './main';
import { exampleNote, exampleNotes } from './note/main';
import { exampleLog, exampleLogs } from './log/main';

export const resourceExamples: ModelExample = {
  description: "Resource examples.",
  example: exampleResource,
  examples: exampleResources,
};

export const fileExamples: ModelExample = {
  description: "File examples.",
  example: exampleFile,
  examples: exampleFiles,
};

export const stickyExamples: ModelExample = {
  description: "Sticky examples.",
  example: exampleNote,
  examples: exampleNotes,
};

export const logExamples: ModelExample = {
  description: "Log examples.",
  example: exampleLog,
  examples: exampleLogs,
};
