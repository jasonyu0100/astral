import { TableDescriptor } from '../tables';
import {
  collectionSchema,
  exampleCollection,
  exampleCollections,
} from './collection/main';
import { exampleGallery, exampleGallerys, gallerySchema } from './main';

export const galleryTable: TableDescriptor = {
  example: exampleGallery,
  examples: exampleGallerys,
  schema: gallerySchema,
};

export const collectionTable: TableDescriptor = {
  example: exampleCollection,
  examples: exampleCollections,
  schema: collectionSchema,
};
