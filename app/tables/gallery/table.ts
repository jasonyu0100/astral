import { TableDescriptor } from '../tables';
import { exampleCollection, exampleCollections } from './collection/main';
import { exampleGallery, exampleGallerys } from './main';

export const galleryTable: TableDescriptor = {
  example: exampleGallery,
  examples: exampleGallerys,
};

export const collectionTable: TableDescriptor = {
  example: exampleCollection,
  examples: exampleCollections,
};
