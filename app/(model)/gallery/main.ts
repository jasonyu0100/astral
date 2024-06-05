import { createContext } from 'react';
import { FileElem, exampleFileElem } from '../elements/file/main';
export interface GalleryObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  thumbnail: FileElem;
}

export const galleryGql = `
type GalleryObj {
  id: String!
  userId: String!
  title: String!
  description: String!
  thumbnail: FileElem!
}

input CreateGalleryObjInput {
	userId: String!
	title: String!
	description: String!
  thumbnail: FileElemInput
}

input UpdateGalleryObjInput {
	id: String!
	userId: String
	title: String
	description: String
    thumbnail: FileElemInput
}

`;

export const exampleGallery: GalleryObj = {
  id: '0',
  userId: '0',
  title: 'Example Gallery',
  description: 'Example Gallery Description',
  thumbnail: exampleFileElem,
};

export const GalleryContext = createContext<GalleryObj>({} as GalleryObj);

export const exampleGallerys: GalleryObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Example Gallery',
    description: 'Example Gallery Description',
    thumbnail: exampleFileElem,
  },
  {
    id: '1',
    userId: '0',
    title: 'Example Gallery',
    description: 'Example Gallery Description',
    thumbnail: exampleFileElem,
  },
];
