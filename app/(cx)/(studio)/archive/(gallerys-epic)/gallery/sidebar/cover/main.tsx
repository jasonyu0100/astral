import { GalleryContext } from '@/(logic)/model/gallery/main';
import { useContext } from 'react';
import { ContainerDescription } from '../../common/cover/description/main';
import { GalleryThumbnail } from '../../common/cover/thumbnail/main';
import { DraftSidebarContext } from '@/(cx)/(process)/space/[id]/(stages)/draft/(draft-epic)/sidebar/main';

export function GallerySidebarCover() {
  const gallery = useContext(GalleryContext);
  const { sidebarHandler } = useContext(DraftSidebarContext);

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
