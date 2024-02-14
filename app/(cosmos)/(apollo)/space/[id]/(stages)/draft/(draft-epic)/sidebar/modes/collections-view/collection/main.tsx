import { GalleryCollectionInfo } from './info/main';
import { GalleryCollectionThumbnail } from './thumbnail/main';
import { GalleryCollectionContainer } from './container/main';

export function GalleryCollection() {
  return (
    <GalleryCollectionContainer>
      <GalleryCollectionThumbnail />
      <GalleryCollectionInfo />
    </GalleryCollectionContainer>
  );
}
