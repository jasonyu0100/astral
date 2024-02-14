import { useContext } from 'react';
import { DraftSidebarContext } from '../../../../main';
import { GalleryObj } from '@/(ouros)/(model)/gallery/main';

export function HomeGalleryThumbnail({ gallery }: { gallery: GalleryObj }) {
  const { sidebarHandler } = useContext(DraftSidebarContext);

  return (
    <img
      className='aspect-square w-full cursor-pointer'
      src={gallery?.thumbnail?.src}
      onClick={() => {
        sidebarHandler.goToGallery(gallery);
      }}
    />
  );
}
