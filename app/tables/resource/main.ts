import { FileObj, exampleFile, exampleFiles } from "../collection/file/main";

// Create a file, create resource reference
// Edit a file, edit resource reference
// Duplicate a file, duplicate a resource

export interface ResourceObj {
  id: string;
  collectionId: string;
  file: FileObj;
}

export const exampleResource: ResourceObj = {
  id: "0",
  collectionId: "0",
  file: exampleFile,
};

export const exampleResources: ResourceObj[] = [
  ...exampleFiles.map((file, i) => {
    return {
      id: i.toString(),
      collectionId: "0",
      file: file,
    };
  }),
];
