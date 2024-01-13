import { ObjectDescriptor, TableDescriptor, TableObjectDescriptor } from "../tables";
import { exampleResourceConnect } from "./connect/main";
import { exampleFile, exampleFiles, fileSchema } from "./file/main";
import { exampleResource, exampleResources, resourceSchema } from "./main";

export const fileObject: TableObjectDescriptor = {
  example: exampleFile,
  examples: exampleFiles,
  schema: fileSchema,
};

export const searchObject: ObjectDescriptor = {
  example: exampleFile,
  examples: [],
};

export const connectObject: ObjectDescriptor = {
  example: exampleResourceConnect,
  examples: [],
};

export const resourceTable: TableDescriptor = {
  example: exampleResource,
  examples: exampleResources,
  schema: resourceSchema,
};
