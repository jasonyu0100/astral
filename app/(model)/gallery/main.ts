import { createContext } from 'react';
import { FileElem, exampleFileElem } from '../elements/file/main';
export interface GalleryObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  thumbnail: FileElem;
  created: string;
}

export const galleryGql = `
type GalleryObj {
  id: String!
  userId: String!
  title: String!
  description: String!
  thumbnail: FileElem!
  created: String!
}
`;

export const ContextForGalleryObj = createContext<GalleryObj>({} as GalleryObj);

export const exampleGallery: GalleryObj = {
  id: '0',
  userId: '0',
  title: 'Example Gallery',
  description: 'Example Gallery Description',
  thumbnail: exampleFileElem,
  created: new Date().toISOString(),
};

export const exampleGallerys: GalleryObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Example Gallery',
    description: 'Example Gallery Description',
    thumbnail: exampleFileElem,
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    title: 'Example Gallery',
    description: 'Example Gallery Description',
    thumbnail: exampleFileElem,
    created: new Date().toISOString(),
  },
];
