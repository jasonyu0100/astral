import { FileObj, exampleFile, exampleFiles } from '../file/main';

export enum ResourceType {
  FILE = 'FILE',
  LOOM = 'LOOM',
}

export interface ResourceObj {
  id: string;
  collectionId: string;
  name: string;
  description: string;
  file?: FileObj;
  loom?: string;
  resourceType: string;
}

export const resourceSchema = `
type ResourceObj {
  id: String!
  collectionId: String!
  name: String!
  description: String!
  file: FileObj
  loom: String
  resourceType: String!
}`;

export const exampleResource: ResourceObj = {
  id: '0',
  collectionId: '0',
  name: 'Example Resource',
  description: 'Example Resource Description',
  file: exampleFile,
  resourceType: ResourceType.FILE,
};

export const exampleResources: ResourceObj[] = [
  ...exampleFiles.map((file, i) => {
    return {
      id: i.toString(),
      collectionId: '0',
      name: `Resource ${i}`,
      description: `Example Resource Description ${i}`,
      file: file,
      resourceType: ResourceType.FILE,
    };
  }),
];
