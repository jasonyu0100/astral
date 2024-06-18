import { createContext } from 'react';
import { ModelInterface } from '../../main';

export interface GalleryCollectionObj {
  id: string;
  galleryId: string;
  title: string;
  description: string;
  created: string;
}

export const galleryCollectionGql = `
type GalleryCollectionObj {
  id: String!
  galleryId: String!
  title: String!
  description: String!
  created: String!
}
`;

export const exampleGalleryCollection: GalleryCollectionObj = {
  id: '0',
  galleryId: '0',
  title: 'Symbols',
  description: 'A collection of symbols',
  created: new Date().toISOString(),
};

export const ContextForGalleryCollectionObj =
  createContext<GalleryCollectionObj>({} as GalleryCollectionObj);

export const exampleGalleryCollections: GalleryCollectionObj[] = [
  {
    id: '0',
    galleryId: '0',
    title: 'Symbols',
    description: 'A collection of symbols',
    created: new Date().toISOString(),
  },
  {
    id: '1',
    galleryId: '0',
    title: 'Symbols',
    description: 'A collection of symbols',
    created: new Date().toISOString(),
  },
  {
    id: '2',
    galleryId: '0',
    title: 'Symbols',
    description: 'A collection of symbols',
    created: new Date().toISOString(),
  },
];

export const galleryCollectionModel: ModelInterface<GalleryCollectionObj> = {
  name: 'collection',
  example: exampleGalleryCollection,
  examples: exampleGalleryCollections,
  gql: galleryCollectionGql,
  children: ['resource'],
  parentKey: 'galleryId',
};
