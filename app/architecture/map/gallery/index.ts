import { galleryCollectionDbWrapper } from '@/architecture/client/gallery/collection/main';
import { collectionResourceDbWrapper } from '@/architecture/client/gallery/collection/resource/main';
import { galleryDbWrapper } from '@/architecture/client/gallery/main';
import { galleryMemberDbWrapper } from '@/architecture/client/gallery/member/main';
import { galleryCollectionModel } from '@/architecture/model/gallery/collection/main';
import { collectionResourceModel } from '@/architecture/model/gallery/collection/resource/main';
import { galleryModel } from '@/architecture/model/gallery/main';
import { galleryMemberModel } from '@/architecture/model/gallery/member/main';

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
