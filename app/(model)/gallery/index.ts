import { galleryCollectionGql } from './collection/main';
import { galleryGql } from './main';
import { collectionResourceGql } from './collection/resource/main';

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
