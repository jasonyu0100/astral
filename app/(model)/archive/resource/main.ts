import { createContext } from 'react';
import { FileElem, exampleFileElem, exampleFileElems } from '../../elements/file/main';
import { LinkElem } from '../../elements/link/main';
import { LogElem } from '../../elements/log/main';
import { NoteElem } from '../../elements/note/main';

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
  file?: FileElem;
  note?: NoteElem;
  log?: LogElem;
  link? : LinkElem;
  variant: string;
}

export const collectionResourceGql = `
type CollectionResourceObj {
  id: String!
  userId: String!
  collectionId: String!
  title: String!
  description: String!
  file: FileElem
  note: NoteElem
  log: LogElem
  link: LinkElem
  variant: String!
}

input CreateCollectionResourceObjInput {
	userId: String!
	collectionId: String!
	title: String!
	description: String!
	variant: String!
    file: FileElemInput
  log: LogElemInput
  note: NoteElemInput
  link: LinkElemInput
  score: ScoreElemInput
}

input UpdateCollectionResourceObjInput {
	userId: String!
	collectionId: String!
	title: String!
	description: String!
	variant: String!
    file: FileElemInput
  log: LogElemInput
  note: NoteElemInput
  link: LinkElemInput
  score: ScoreElemInput
}
`;

export const CollectionResourceContext = createContext<CollectionResourceObj>({} as CollectionResourceObj);

export const exampleCollectionResource: CollectionResourceObj = {
  id: '0',
  userId: '0',
  collectionId: '0',
  title: 'Example Resource',
  description: 'Example Resource Description',
  file: exampleFileElem,
  variant: CollectionResourceVariant.FILE,
};

export const exampleCollectionResources: CollectionResourceObj[] = [
  ...exampleFileElems.map((file, i) => {
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
