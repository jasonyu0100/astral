import { createContext } from 'react';
import { ResourceObj } from '../resource/main';

export interface CollectionObj {
  id: string;
  galleryId: string;
  title: string;
  description: string;
}

export const exampleCollection: CollectionObj = {
  id: '0',
  galleryId: '0',
  title: 'Symbols',
  description: 'A collection of symbols',
};

export const CollectionContext = createContext<CollectionObj>(
  {} as CollectionObj,
);
export const ResourcesContext = createContext<ResourceObj[]>(
  [] as ResourceObj[],
);

export const exampleCollections: CollectionObj[] = [
  {
    id: '0',
    galleryId: '0',
    title: 'Symbols',
    description: 'A collection of symbols',
  },
  {
    id: '1',
    galleryId: '0',
    title: 'Symbols',
    description: 'A collection of symbols',
  },
];
