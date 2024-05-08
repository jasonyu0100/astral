import { ModelExample } from '../tables';
import { exampleCollection, exampleCollections } from './collection/main';
import { exampleGallery, exampleGallerys } from './main';

export const galleryExamples: ModelExample = {
  description: "Gallery examples.",
  example: exampleGallery,
  examples: exampleGallerys,
};

export const collectionExamples: ModelExample = {
  description: "Collection examples.",
  example: exampleCollection,
  examples: exampleCollections,
};
