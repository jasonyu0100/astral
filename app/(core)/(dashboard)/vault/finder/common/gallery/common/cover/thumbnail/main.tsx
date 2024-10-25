import { ContextForFlippable } from '@/logic/contexts/flippable/main';
import { ContextForGalleryObj } from '@/server/model/gallery/main';
import { useContext } from 'react';

export function GalleryThumbnail() {
  const { flip } = useContext(ContextForFlippable);
  const gallery = useContext(ContextForGalleryObj);

  return (
    <img
      className='aspect-square w-full animate-pulse-slow cursor-pointer bg-black object-cover'
      src={gallery.thumbnail.src}
      onClick={() => flip()}
    />
  );
}
