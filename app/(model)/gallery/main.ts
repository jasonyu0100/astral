import { createContext } from 'react';
import { FileElem, exampleFileElem } from '../elements/file/main';
export interface ArchiveGalleryObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  thumbnail: FileElem;
}

export const archiveGalleryGql = `
type ArchiveGalleryObj {
  id: String!
  userId: String!
  title: String!
  description: String!
  thumbnail: FileElem!
}

input CreateArchiveGalleryObjInput {
	userId: String!
	title: String!
	description: String!
  thumbnail: FileElemInput
}

input UpdateArchiveGalleryObjInput {
	id: String!
	userId: String
	title: String
	description: String
    thumbnail: FileElemInput
}

`;

export const exampleArchiveGallery: ArchiveGalleryObj = {
  id: '0',
  userId: '0',
  title: 'Example Gallery',
  description: 'Example Gallery Description',
  thumbnail: exampleFileElem,
};

export const ArchiveGalleryContext = createContext<ArchiveGalleryObj>(
  {} as ArchiveGalleryObj,
);

export const exampleArchiveGallerys: ArchiveGalleryObj[] = [
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
