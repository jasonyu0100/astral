import { SidebarHomeGalleryInfo } from './info/main';
import { SidebarHomeGalleryThumbnail } from './thumbnail/main';
import { SidebarGalleryContainer } from './container/main';

export function SidebarHomeGallery() {
  return (
    <SidebarGalleryContainer>
      <SidebarHomeGalleryThumbnail />
      <SidebarHomeGalleryInfo />
    </SidebarGalleryContainer>
  );
}
