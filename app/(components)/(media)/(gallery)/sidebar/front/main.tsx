import { BoardSidebarContext } from '@/(core)/(project)/space/[id]/(pages)/board/view/sidebar/main';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { useContext } from 'react';
import { ContainerDescription } from '../../common/cover/description/main';
import { GalleryThumbnail } from '../../common/cover/thumbnail/main';

export function GallerySidebarCover() {
  const gallery = useContext(ContextForGalleryObj);
  const { sidebarHandler } = useContext(BoardSidebarContext);

  return (
    <div>
      <GalleryThumbnail />
      <div
        className='w-full cursor-pointer'
        onClick={() => {
          sidebarHandler.goToGallery(gallery);
        }}
      >
        <ContainerDescription />
      </div>
    </div>
  );
}
