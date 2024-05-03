import { GalleryContext } from '@/(lgx)/internal/model/gallery/main';
import { useContext } from 'react';
import { ContainerDescription } from '../../common/cover/description/main';
import { GalleryThumbnail } from '../../common/cover/thumbnail/main';
import { MapSidebarContext } from '@/(cx)/(studio)/space/[id]/(process-stages)/map/(map-epic)/sidebar/main';

export function GallerySidebarCover() {
  const gallery = useContext(GalleryContext);
  const { sidebarHandler } = useContext(MapSidebarContext);

  return (
    <div>
      <GalleryThumbnail />
      <div
        className="w-full cursor-pointer"
        onClick={() => {
          sidebarHandler.goToGallery(gallery);
        }}
      >
        <ContainerDescription />
      </div>
    </div>
  );
}
