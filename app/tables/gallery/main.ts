import { FileObj, exampleFile } from "../resource/file/main";
import { exampleCollections } from "./collection/main";

export interface GalleryObj {
  id: string;
  title: string;
  description: string;
  thumbnail: FileObj;
  collectionIds: string[];
}

export const gallerySchema = `
type GalleryObj {
  id: String!
  title: String!
  description: String!
  thumbnail: FileObj!
  collectionIds: [String!]!
}
`

export const exampleGallery: GalleryObj = {
  id: "0",
  title: "Example Gallery",
  description: "Example Gallery Description",
  collectionIds: exampleCollections.map((collection) => collection.id),
  thumbnail: exampleFile,
};

export const exampleGallerys: GalleryObj[] = [
  {
    id: "0",
    title: "Example Gallery",
    description: "Example Gallery Description",
    collectionIds: exampleCollections.map((collection) => collection.id),
    thumbnail: exampleFile,
  },
  {
    id: "1",
    title: "Example Gallery",
    description: "Example Gallery Description",
    collectionIds: exampleCollections.map((collection) => collection.id),
    thumbnail: exampleFile,
  },
];
