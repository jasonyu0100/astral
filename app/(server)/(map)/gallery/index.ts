import { galleryCollectionGql } from '../../(model)/gallery/collection/main';
import { galleryGql } from '../../(model)/gallery/main';
import { collectionResourceGql } from '../../(model)/gallery/collection/resource/main';
import { galleryDbWrapper } from '@/(server)/(db)/gallery/main';
import { galleryCollectionDbWrapper } from '@/(server)/(db)/gallery/collection/main';
import { collectionResourceDbWrapper } from '@/(server)/(db)/gallery/collection/resource/main';
import { galleryMemberGql } from '@/(server)/(model)/gallery/member/main';
import { galleryMemberDbWrapper } from '@/(server)/(db)/gallery/member/main';

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
