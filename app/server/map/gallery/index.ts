import { galleryCollectionDbWrapper } from '@/server/client/gallery/collection/main';
import { collectionResourceDbWrapper } from '@/server/client/gallery/collection/resource/main';
import { galleryDbWrapper } from '@/server/client/gallery/main';
import { galleryMemberDbWrapper } from '@/server/client/gallery/member/main';
import { galleryCollectionModel } from '@/server/model/gallery/collection/main';
import { collectionResourceModel } from '@/server/model/gallery/collection/resource/main';
import { galleryModel } from '@/server/model/gallery/main';
import { galleryMemberModel } from '@/server/model/gallery/member/main';

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
