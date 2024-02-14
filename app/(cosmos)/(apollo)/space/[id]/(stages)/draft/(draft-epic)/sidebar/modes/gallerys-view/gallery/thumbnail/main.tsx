import { useContext } from 'react';
import { DraftSidebarContext } from '../../../../main';
import { GalleryContext } from '@/(ouros)/(model)/gallery/main';

export function HomeGalleryThumbnail() {
  const { sidebarHandler } = useContext(DraftSidebarContext);
  const gallery = useContext(GalleryContext);

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
