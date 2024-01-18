import { FileObj, exampleFile, exampleFiles } from '../file/main';

export interface ResourceObj {
  id: string;
  collectionId: string;
  name: string;
  description: string;
  file: FileObj;
}

export const resourceSchema = `
type ResourceObj {
  id: String!
  collectionId: String!
  name: String!
  description: String!
  file: FileObj!
}`;

export const exampleResource: ResourceObj = {
  id: '0',
  collectionId: '0',
  name: 'Example Resource',
  description: 'Example Resource Description',
  file: exampleFile,
};

export const exampleResources: ResourceObj[] = [
  ...exampleFiles.map((file, i) => {
    return {
      id: i.toString(),
      collectionId: '0',
      name: `Resource ${i}`,
      description: `Example Resource Description ${i}`,
      file: file,
    };
  }),
];
