import { galleryCollectionGql, galleryCollectionModel } from '../../(model)/gallery/collection/main';
import { galleryGql, galleryModel } from '../../(model)/gallery/main';
import { collectionResourceGql, collectionResourceModel } from '../../(model)/gallery/collection/resource/main';
import { galleryDbWrapper } from '@/(server)/(db)/gallery/main';
import { galleryCollectionDbWrapper } from '@/(server)/(db)/gallery/collection/main';
import { collectionResourceDbWrapper } from '@/(server)/(db)/gallery/collection/resource/main';
import { galleryMemberGql, galleryMemberModel } from '@/(server)/(model)/gallery/member/main';
import { galleryMemberDbWrapper } from '@/(server)/(db)/gallery/member/main';

export const galleryMap = {
  model: galleryModel,
  db: galleryDbWrapper,
  member: {
    model: galleryMemberModel,
    db: galleryMemberDbWrapper,
  },
  collection: {
    model: galleryCollectionModel,
    db: galleryCollectionDbWrapper,
    resource: {
      model: collectionResourceModel,
      db: collectionResourceDbWrapper,
    },
  },
};
