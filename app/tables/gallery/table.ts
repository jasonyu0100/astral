import {
  getCollectionObj,
  getGalleryObj,
  listCollectionObjs,
  listGalleryObjs,
} from "@/graphql/queries";
import { TableDescriptor } from "../tables";
import {
  collectionSchema,
  exampleCollection,
  exampleCollections,
} from "./collection/main";
import { exampleGallery, exampleGallerys, gallerySchema } from "./main";
import {
  deleteCollectionObj,
  deleteGalleryObj,
  updateCollectionObj,
  updateGalleryObj,
} from "@/graphql/mutations";

export const galleryTable: TableDescriptor = {
  example: exampleGallery,
  examples: exampleGallerys,
  schema: gallerySchema,
  reducer: {
    get: getGalleryObj,
    list: listGalleryObjs,
    update: updateGalleryObj,
    delete: deleteGalleryObj,
  },
};

export const collectionTable: TableDescriptor = {
  example: exampleCollection,
  examples: exampleCollections,
  schema: collectionSchema,
  reducer: {
    get: getCollectionObj,
    list: listCollectionObjs,
    update: updateCollectionObj,
    delete: deleteCollectionObj,
  },
};
