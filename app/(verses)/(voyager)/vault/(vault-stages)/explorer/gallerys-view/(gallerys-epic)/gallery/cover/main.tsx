import { GalleryContext } from '@/(ouros)/(model)/gallery/main';
import { useContext } from 'react';

export function GalleryCover() {
  const gallery = useContext(GalleryContext);
  return (
    <img
      className='aspect-square w-full bg-black object-cover'
      src={gallery.thumbnail.src}
    />
  );
}
