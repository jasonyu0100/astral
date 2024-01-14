import { getResourceObj, listResourceObjs } from "@/graphql/queries";
import {
  ObjectDescriptor,
  TableDescriptor,
  TableObjectDescriptor,
} from "../tables";
import { exampleResourceConnect } from "./connect/main";
import { exampleFile, exampleFiles, fileSchema } from "./file/main";
import { exampleResource, exampleResources, resourceSchema } from "./main";
import { deleteResourceObj, updateResourceObj } from "@/graphql/mutations";
import { exampleResourceSearch } from "./search/main";

export const resourceTable: TableDescriptor = {
  example: exampleResource,
  examples: exampleResources,
  schema: resourceSchema,
  reducer: {
    get: getResourceObj,
    list: listResourceObjs,
    update: updateResourceObj,
    delete: deleteResourceObj,
  },
};

export const fileObject: TableObjectDescriptor = {
  example: exampleFile,
  examples: exampleFiles,
  schema: fileSchema,
};

export const searchObject: ObjectDescriptor = {
  example: exampleResourceSearch,
  examples: [],
};

export const connectObject: ObjectDescriptor = {
  example: exampleResourceConnect,
  examples: [],
};
