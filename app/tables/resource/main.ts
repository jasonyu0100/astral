import { FileObj, exampleFile, exampleFiles } from '../file/main';
import { LoomObj } from './loom/main';
import { StickyObj } from './sticky/main';

export enum ResourceType {
  FILE = 'FILE',
  LOOM = 'LOOM',
  STICKY = 'STICKY',
}

export interface ResourceObj {
  id: string;
  userId: string;
  collectionId: string;
  name: string;
  description: string;
  file?: FileObj;
  sticky?: StickyObj;
  loom?: LoomObj;
  resourceType: string;
}

export const resourceSchema = `
type ResourceObj {
  id: String!
  userId: String!
  collectionId: String!
  name: String!
  description: String!
  file: FileObj
  sticky: StickyObj
  loom: LoomObj
  resourceType: String!
}`;

export const exampleResource: ResourceObj = {
  id: '0',
  userId: '0',
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
      userId: '0',
      collectionId: '0',
      name: `Resource ${i}`,
      description: `Example Resource Description ${i}`,
      file: file,
      resourceType: ResourceType.FILE,
    };
  }),
];
