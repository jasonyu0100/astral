import {
  ObjectDescriptor,
  TableDescriptor,
} from '../tables';
import { exampleResourceConnect } from './connect/main';
import { exampleFile, exampleFiles, fileSchema } from '../file/main';
import { exampleResource, exampleResources, resourceSchema } from './main';
import { exampleResourceSearch } from './search/main';
import { exampleSticky, exampleStickys } from './sticky/main';
import { exampleLoom, exampleLooms, loomSchema } from './loom/main';

export const resourceTable: TableDescriptor = {
  example: exampleResource,
  examples: exampleResources,
  schema: resourceSchema,
};

export const fileTable: TableDescriptor = {
  example: exampleFile,
  examples: exampleFiles,
  schema: fileSchema,
};

export const stickyTable:  TableDescriptor = {
  example: exampleSticky,
  examples: exampleStickys,
  schema: fileSchema,
};

export const loomTable: TableDescriptor = {
  example: exampleLoom,
  examples: exampleLooms,
  schema: loomSchema,
};

export const searchObject: ObjectDescriptor = {
  example: exampleResourceSearch,
  examples: [],
};

export const connectObject: ObjectDescriptor = {
  example: exampleResourceConnect,
  examples: [],
};
