import { FileObj, exampleFile, exampleFiles } from '../file/main';
import { LoomObj } from './loom/main';
import { NoteObj } from './note/main';

export enum ResourceVariant {
  FILE = 'FILE',
  LOOM = 'LOOM',
  NOTE = 'NOTE',
}

export interface ResourceObj {
  id: string;
  userId: string;
  collectionId: string;
  name: string;
  description: string;
  file?: FileObj;
  sticky?: NoteObj;
  loom?: LoomObj;
  variant: string;
}

export const exampleResource: ResourceObj = {
  id: '0',
  userId: '0',
  collectionId: '0',
  name: 'Example Resource',
  description: 'Example Resource Description',
  file: exampleFile,
  variant: ResourceVariant.FILE,
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
      variant: ResourceVariant.FILE,
    };
  }),
];
