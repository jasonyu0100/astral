import { galleryCollectionGql } from './resource/collection/main';
import { archiveGalleryGql } from './main';
import { collectionResourceGql } from './resource/main';

export const galleryMap = {
  children: ['collection'],
  gql: archiveGalleryGql,
  collection: {
    children: ['resource'],
    gql: galleryCollectionGql,
    resource: {
      children: [],
      gql: collectionResourceGql,
    },
  },
};
