import { GalleryContext } from '@/(logic)/internal/data/infra/model/gallery/main';
import { useContext } from 'react';
import { GalleryBackEdit } from '../../common/back/edit/main';
import { GalleryBackDescription } from '../../common/back/description/main';
import { GalleryBackAuthor } from '../../common/back/author/main';
import { GalleryBackTitle } from '../../common/back/title/main';
import { FlipContext } from '@/(logic)/internal/contexts/flip/main';
import { DraftSidebarContext } from '@/(cx)/(process)/space/[id]/(process-stages)/draft/(draft-epic)/sidebar/main';

export function GallerySidebarBack() {
  const { flip } = useContext(FlipContext);
  const gallery = useContext(GalleryContext);
  const { sidebarHandler } = useContext(DraftSidebarContext);

  return (
    <div
      className='flex w-full flex-grow flex-col p-[1rem]'
      onClick={() => flip()}
    >
      <div
        className='w-full'
        onClick={() => {
          sidebarHandler.goToGallery(gallery);
        }}
      >
        <GalleryBackTitle />
      </div>
      <GalleryBackAuthor />
      <GalleryBackDescription />
      <GalleryBackEdit />
    </div>
  );
}
