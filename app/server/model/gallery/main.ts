import { createContext } from 'react';
import { FileElement, exampleFileElement } from '../elements/file/main';
import { ModelInterface } from '../main';
export interface GalleryObj {
  id: string;
  userId: string;
  title: string;
  description: string;
  thumbnail: FileElement;
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
  thumbnail: exampleFileElement,
  created: new Date().toISOString(),
};

export const exampleGallerys: GalleryObj[] = [
  {
    id: '0',
    userId: '0',
    title: 'Example Gallery',
    description: 'Example Gallery Description',
    thumbnail: exampleFileElement,
    created: new Date().toISOString(),
  },
  {
    id: '1',
    userId: '0',
    title: 'Example Gallery',
    description: 'Example Gallery Description',
    thumbnail: exampleFileElement,
    created: new Date().toISOString(),
  },
];

export const galleryModel: ModelInterface<GalleryObj> = {
  name: 'Gallery',
  example: exampleGallery,
  examples: exampleGallerys,
  gql: galleryGql,
  children: ['collection', 'member'],
  parentKey: 'userId',
};
