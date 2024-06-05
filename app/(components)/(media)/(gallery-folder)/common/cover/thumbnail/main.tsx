import { useContext } from 'react';
import { ArchiveGalleryContext } from '@/(model)/gallery/main';
import { FlipContext } from '@/(logic)/internal/contexts/flip/main';

export function GalleryThumbnail() {
  const { flip } = useContext(FlipContext);
  const gallery = useContext(ArchiveGalleryContext);

  return (
    <img
      className='aspect-square w-full animate-pulse-slow cursor-pointer cursor-pointer bg-black object-cover'
      src={gallery.thumbnail.src}
      onClick={() => flip()}
    />
  );
}
