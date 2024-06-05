import { createContext } from 'react';
import { FileObj, exampleFile } from '../../concept/file/main';
export interface GalleryObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  thumbnail: FileObj;
}

export const exampleGallery: GalleryObj = {
  id: '0',
  userId: '0',
  title: 'Example Gallery',
  description: 'Example Gallery Description',
  thumbnail: exampleFile,
};

export const GalleryContext = createContext<GalleryObj>({} as GalleryObj);

export const exampleGallerys: GalleryObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Example Gallery',
    description: 'Example Gallery Description',
    thumbnail: exampleFile,
  },
  {
    id: '1',
    userId: '0',
    title: 'Example Gallery',
    description: 'Example Gallery Description',
    thumbnail: exampleFile,
  },
];
