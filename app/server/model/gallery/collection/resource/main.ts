import { ElementVariant } from '@/server/model/elements/main';
import { ModelInterface } from '@/server/model/main';
import { createContext } from 'react';
import {
  FileElem,
  exampleFileElem,
  exampleFileElems,
} from '../../../elements/file/main';
import { TextElem } from '../../../elements/text/main';
import { UrlElem } from '../../../elements/url/main';

export interface CollectionResourceObj {
  id: string;
  userId: string;
  collectionId: string;
  title: string;
  description: string;
  fileElem?: FileElem;
  textElem?: TextElem;
  urlElem?: UrlElem;
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
  textElem: TextElem
  urlElem: UrlElem
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
  variant: ElementVariant.FILE,
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
      variant: ElementVariant.FILE,
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
};
