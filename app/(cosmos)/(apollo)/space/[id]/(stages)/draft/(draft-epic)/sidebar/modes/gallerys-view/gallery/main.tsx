import { HomeGalleryInfo } from './info/main';
import { HomeGalleryThumbnail } from './thumbnail/main';
import { GalleryContainer } from './container/main';

export function HomeGallery() {
  return (
    <GalleryContainer>
      <HomeGalleryThumbnail />
      <HomeGalleryInfo />
    </GalleryContainer>
  );
}
