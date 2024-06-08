import { galleryCollectionGql } from '../../gallery/collection/main';
import { galleryGql } from '../../gallery/main';
import { collectionResourceGql } from '../../gallery/collection/resource/main';
import { galleryDbWrapper } from '@/(model)/(db)/gallery/main';
import { galleryCollectionDbWrapper } from '@/(model)/(db)/gallery/collection/main';
import { collectionResourceDbWrapper } from '@/(model)/(db)/gallery/collection/resource/main';
import { galleryMemberGql } from '@/(model)/gallery/member/main';
import { galleryMemberDbWrapper } from '@/(model)/(db)/gallery/member/main';

export const galleryMap = {
  children: ['collection', 'member'],
  gql: galleryGql,
  db: galleryDbWrapper,
  member: {
    children: [],
    db: galleryMemberDbWrapper,
    gql: galleryMemberGql,
  },
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
