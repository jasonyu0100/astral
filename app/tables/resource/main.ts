import { FileObj, exampleFile, exampleFiles } from "../file/main";

// Create a file, create resource reference
// Edit a file, edit resource reference
// Duplicate a file, duplicate a resource

export interface ResourceObj {
  id: string;
  file: FileObj;
}

export const exampleResource: ResourceObj = {
  id: "0",
  file: exampleFile,
};

export const exampleResources: ResourceObj[] = [
  ...exampleFiles.map((file, i) => {
    return {
      id: i.toString(),
      file: file,
    };
  }),
];
