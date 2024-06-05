import { galleryCollectionGql } from './collection/main';
import { archiveGalleryGql } from './gallery/main';
import { collectionResourceGql } from './resource/main';

export const archiveGqlMap = {
  gallery: {
    gql: archiveGalleryGql,
    collection: {
      gql: galleryCollectionGql,
      resource: {
        gql: collectionResourceGql,
      },
    },
  },
};