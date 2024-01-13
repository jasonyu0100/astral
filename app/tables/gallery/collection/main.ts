import { exampleResources } from "../../resource/main";

export interface CollectionObj {
  id: string;
  name: string;
  resourceIds: string[];
}

export const collectionSchema = `
type CollectionObj {
  id: String!
  name: String!
  resourceIds: [String!]!
}`;

export const exampleCollection: CollectionObj = {
  id: "0",
  name: "Symbols",
  resourceIds: exampleResources.map((resource) => resource.id),
};

export const exampleCollections: CollectionObj[] = [
  {
    id: "0",
    name: "Symbols",
    resourceIds: exampleResources.map((resource) => resource.id),
  },
  {
    id: "1",
    name: "Symbols",
    resourceIds: exampleResources.map((resource) => resource.id),
  },
];
