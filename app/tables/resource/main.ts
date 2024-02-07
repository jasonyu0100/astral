import { FileObj, exampleFile, exampleFiles } from './file/main';
import { LinkObj } from './link/main';
import { LogObj } from './log/main';
import { NoteObj } from './note/main';

export enum ResourceVariant {
  FILE = 'FILE',
  LOG = 'LOG',
  NOTE = 'NOTE',
  LINK = 'LINK',
}

export interface ResourceObj {
  id: string;
  userId: string;
  collectionId: string;
  title: string;
  description: string;
  file?: FileObj;
  note?: NoteObj;
  log?: LogObj;
  link? : LinkObj;
  variant: string;
}

export const exampleResource: ResourceObj = {
  id: '0',
  userId: '0',
  collectionId: '0',
  title: 'Example Resource',
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
      title: `Resource ${i}`,
      description: `Example Resource Description ${i}`,
      file: file,
      variant: ResourceVariant.FILE,
    };
  }),
];
