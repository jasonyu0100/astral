import { HomeGalleryInfo } from './info/main';
import { HomeGalleryThumbnail } from './thumbnail/main';
import { GalleryObj } from '@/(ouros)/(model)/gallery/main';
import { GalleryContainer } from './container/main';

export function HomeGallery({ gallery }: { gallery: GalleryObj }) {
  return (
    <GalleryContainer>
      <HomeGalleryThumbnail gallery={gallery} />
      <HomeGalleryInfo gallery={gallery} />
    </GalleryContainer>
  );
}
