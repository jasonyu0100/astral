import { ContextForGalleryObj } from '@/(model)/gallery/main';
import { useContext } from 'react';
import { ContainerDescription } from '../../common/cover/description/main';
import { GalleryThumbnail } from '../../common/cover/thumbnail/main';
import { MapSidebarContext } from '@/(core)/(project)/space/[id]/(pages)/map/view/sidebar/main';

export function GallerySidebarCover() {
  const gallery = useContext(ContextForGalleryObj);
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
