import { createContext } from "react";

export interface CollectionObj {
  id: string;
  galleryId: string;
  title: string;
}

export const exampleCollection: CollectionObj = {
  id: '0',
  galleryId: '0',
  title: 'Symbols',
};

export const CollectionContext = createContext<CollectionObj>({} as CollectionObj);

export const exampleCollections: CollectionObj[] = [
  {
    id: '0',
    galleryId: '0',
    title: 'Symbols',
  },
  {
    id: '1',
    galleryId: '0',
    title: 'Symbols',
  },
];
