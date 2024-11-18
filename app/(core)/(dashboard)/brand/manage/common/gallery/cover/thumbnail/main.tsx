import { ContextForGalleryObj } from '@/architecture/model/gallery/main';
import { ContextForFlippable } from '@/logic/contexts/flippable/main';
import { useContext } from 'react';

export function BrandManageGalleryThumbnail() {
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
