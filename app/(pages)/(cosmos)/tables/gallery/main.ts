import { FileObj, exampleFile } from "../collection/file/main";
import { CollectionObj, exampleCollections } from "../collection/main";

export interface GalleryObj {
  id: string;
  name: string;
  description: string;
  thumbnail: FileObj;
  collections: CollectionObj[];
}

export interface GalleryModel {
  id: string;
  name: string;
  description: string;
  thumbnail: FileObj;
  collectionIds: string[];
}

export const exampleGallery: GalleryObj = {
  id: "0",
  name: "Example Gallery",
  description: "Example Gallery Description",
  collections: exampleCollections,
  thumbnail: exampleFile,
};

export const exampleGallerys: GalleryObj[] = [
  {
    id: "0",
    name: "Example Gallery",
    description: "Example Gallery Description",
    collections: exampleCollections,
    thumbnail: exampleFile,
  },
  {
    id: "1",
    name: "Example Gallery",
    description: "Example Gallery Description",
    collections: exampleCollections,
    thumbnail: exampleFile,
  },
];
