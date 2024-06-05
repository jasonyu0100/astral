import { galleryCollectionGql } from './resource/collection/main';
import { galleryGql } from './main';
import { collectionResourceGql } from './resource/main';

export const galleryMap = {
  children: ['collection'],
  gql: galleryGql,
  collection: {
    children: ['resource'],
    gql: galleryCollectionGql,
    resource: {
      children: [],
      gql: collectionResourceGql,
    },
  },
};
