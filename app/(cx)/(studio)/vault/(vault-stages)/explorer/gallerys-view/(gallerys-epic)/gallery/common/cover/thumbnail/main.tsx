import { useContext } from 'react';
import { GalleryContext } from '@/(logic)/model/gallery/main';
import { FlipContext } from '@/(logic)/contexts/flip/main';

export function GalleryThumbnail() {
  const { flip } = useContext(FlipContext);
  const gallery = useContext(GalleryContext);

  return (
    <img
      className='aspect-square w-full animate-pulse-slow cursor-pointer cursor-pointer bg-black object-cover'
      src={gallery.thumbnail.src}
      onClick={() => flip()}
    />
  );
}
