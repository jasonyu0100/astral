import { galleryCollectionGql } from '../../gallery/collection/main';
import { galleryGql } from '../../gallery/main';
import { collectionResourceGql } from '../../gallery/collection/resource/main';
import { galleryDbWrapper } from '@/(model)/(db)/gallery/main';
import { galleryCollectionDbWrapper } from '@/(model)/(db)/gallery/collection/main';
import { collectionResourceDbWrapper } from '@/(model)/(db)/gallery/collection/resource/main';

export const galleryMap = {
  children: ['collection'],
  gql: galleryGql,
  db: galleryDbWrapper,
  collection: {
    children: ['resource'],
    gql: galleryCollectionGql,
    db: galleryCollectionDbWrapper,
    resource: {
      children: [],
      gql: collectionResourceGql,
      db: collectionResourceDbWrapper,
    },
  },
};
