import { createContext } from 'react';
import {
  FileElem,
  exampleFileElem,
  exampleFileElems,
} from '../../../elements/file/main';
import { LinkElem } from '../../../elements/link/main';
import { NoteElem } from '../../../elements/note/main';
import { ModelInterface } from '@/(server)/(model)/main';

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
  fileElem?: FileElem;
  noteElem?: NoteElem;
  linkElem?: LinkElem;
  variant: string;
  created: string;
}

export const collectionResourceGql = `
type CollectionResourceObj {
  id: String!
  userId: String!
  collectionId: String!
  title: String!
  description: String!
  fileElem: FileElem
  noteElem: NoteElem
  linkElem: LinkElem
  variant: String!
  created: String!
}
`;

export const ContextForCollectionResourceObj =
  createContext<CollectionResourceObj>({} as CollectionResourceObj);

export const exampleCollectionResource: CollectionResourceObj = {
  id: '0',
  userId: '0',
  collectionId: '0',
  title: 'Example Resource',
  description: 'Example Resource Description',
  fileElem: exampleFileElem,
  variant: CollectionResourceVariant.FILE,
  created: new Date().toISOString(),
};

export const exampleCollectionResources: CollectionResourceObj[] = [
  ...exampleFileElems.map((fileElem, i) => {
    return {
      id: i.toString(),
      userId: '0',
      collectionId: '0',
      title: `Resource ${i}`,
      description: `Example Resource Description ${i}`,
      fileElem: fileElem,
      variant: CollectionResourceVariant.FILE,
      created: new Date().toISOString(),
    };
  }),
];

export const collectionResourceModel: ModelInterface<CollectionResourceObj> = {
  name: 'resource',
  example: exampleCollectionResource,
  examples: exampleCollectionResources,
  gql: collectionResourceGql,
  children: [],
  parentKey: 'collectionId',
}