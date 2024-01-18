import { FileObj, exampleFile } from '../file/main';
export interface GalleryObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  thumbnail: FileObj;
}

export const gallerySchema = `
type GalleryObj {
  id: String!
  userId: String!
  title: String!
  description: String!
  thumbnail: FileObj!
}
`;

export const exampleGallery: GalleryObj = {
  id: '0',
  userId: '0',
  title: 'Example Gallery',
  description: 'Example Gallery Description',
  thumbnail: exampleFile,
};

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
