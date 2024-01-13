import { FileObj, exampleFile, exampleFiles } from "./file/main";

export interface ResourceObj {
  id: string;
  label: string;
  description: string;
  file: FileObj;
}

export const resourceSchema = `
type ResourceObj {
  id: String!
  label: String!
  description: String!
  file: FileObj!
}`;

export const exampleResource: ResourceObj = {
  id: "0",
  label: "Example Resource",
  description: "Example Resource Description",
  file: exampleFile,
};

export const exampleResources: ResourceObj[] = [
  ...exampleFiles.map((file, i) => {
    return {
      id: i.toString(),
      label: `Example Resource ${i}`,
      description: `Example Resource Description ${i}`,
      file: file,
    };
  }),
];
