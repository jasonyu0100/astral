import { GalleryCollectionInfo } from './info/main';
import { GalleryCollectionThumbnail } from './thumbnail/main';
import { CollectionObj } from '@/(ouros)/(model)/gallery/collection/main';
import { GalleryCollectionContainer } from './container/main';

export function GalleryCollection({
  collection,
}: {
  collection: CollectionObj;
}) {
  return (
    <GalleryCollectionContainer>
      <GalleryCollectionThumbnail collection={collection} />
      <GalleryCollectionInfo collection={collection} />
    </GalleryCollectionContainer>
  );
}
