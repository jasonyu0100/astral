import { useContext } from 'react';
import { DraftSidebarContext } from '../../../../main';
import { GalleryObj } from '@/tables/gallery/main';

export function HomeGalleryThumbnail({ gallery }: { gallery: GalleryObj }) {
  const { sidebarHandler } = useContext(DraftSidebarContext);

  return (
    <img
      className='w-full aspect-square cursor-pointer'
      src={gallery?.thumbnail?.src}
      onClick={() => {
        sidebarHandler.goToGallery(gallery);
      }}
    />
  );
}
