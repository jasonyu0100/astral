import { createContext } from 'react';
import { CollectionResourceObj } from '../resource/main';

export interface GalleryCollectionObj {
  id: string;
  galleryId: string;
  title: string;
  description: string;
}

export const exampleGalleryCollection: GalleryCollectionObj = {
  id: '0',
  galleryId: '0',
  title: 'Symbols',
  description: 'A collection of symbols',
};

export const GalleryCollectionContext = createContext<GalleryCollectionObj>(
  {} as GalleryCollectionObj,
);
export const CollectionResourcesContext = createContext<CollectionResourceObj[]>(
  [] as CollectionResourceObj[],
);

export const exampleGalleryCollections: GalleryCollectionObj[] = [
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
