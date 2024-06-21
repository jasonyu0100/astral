import { galleryCollectionDbWrapper } from '@/(server)/(db)/gallery/collection/main';
import { collectionResourceDbWrapper } from '@/(server)/(db)/gallery/collection/resource/main';
import { galleryDbWrapper } from '@/(server)/(db)/gallery/main';
import { galleryMemberDbWrapper } from '@/(server)/(db)/gallery/member/main';
import { galleryMemberModel } from '@/(server)/(model)/gallery/member/main';
import { galleryCollectionModel } from '../../(model)/gallery/collection/main';
import { collectionResourceModel } from '../../(model)/gallery/collection/resource/main';
import { galleryModel } from '../../(model)/gallery/main';

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
