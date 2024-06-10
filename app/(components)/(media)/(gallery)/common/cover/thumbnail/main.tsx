import { useContext } from 'react';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { ContextForFlippable } from '@/(logic)/contexts/flippable/main';

export function GalleryThumbnail() {
  const { flip } = useContext(ContextForFlippable);
  const gallery = useContext(ContextForGalleryObj);

  return (
    <img
      className='aspect-square w-full animate-pulse-slow cursor-pointer cursor-pointer bg-black object-cover'
      src={gallery.thumbnail.src}
      onClick={() => flip()}
    />
  );
}
