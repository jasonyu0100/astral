import { createContext } from 'react';
import { FileObj, exampleFile, exampleFiles } from '../../concept/file/main';
import { LinkObj } from '../../concept/link/main';
import { LogObj } from '../../concept/log/main';
import { NoteObj } from '../../concept/note/main';

export enum CollectionResourceVariant {
  FILE = 'FILE',
  LOG = 'LOG',
  NOTE = 'NOTE',
  LINK = 'LINK',
}

export interface CollectionResourceObj {
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

export const CollectionResourceContext = createContext<CollectionResourceObj>({} as CollectionResourceObj);

export const exampleCollectionResource: CollectionResourceObj = {
  id: '0',
  userId: '0',
  collectionId: '0',
  title: 'Example Resource',
  description: 'Example Resource Description',
  file: exampleFile,
  variant: CollectionResourceVariant.FILE,
};

export const exampleCollectionResources: CollectionResourceObj[] = [
  ...exampleFiles.map((file, i) => {
    return {
      id: i.toString(),
      userId: '0',
      collectionId: '0',
      title: `Resource ${i}`,
      description: `Example Resource Description ${i}`,
      file: file,
      variant: CollectionResourceVariant.FILE,
    };
  }),
];
