export interface CollectionObj {
  id: string;
  galleryId: string;
  name: string;
}

export const collectionSchema = `
type CollectionObj {
  id: String!
  galleryId: String!
  name: String!
}`;

export const exampleCollection: CollectionObj = {
  id: "0",
  galleryId: "0",
  name: "Symbols",
};

export const exampleCollections: CollectionObj[] = [
  {
    id: "0",
    galleryId: "0",
    name: "Symbols",
  },
  {
    id: "1",
    galleryId: "0",
    name: "Symbols",
  },
];
