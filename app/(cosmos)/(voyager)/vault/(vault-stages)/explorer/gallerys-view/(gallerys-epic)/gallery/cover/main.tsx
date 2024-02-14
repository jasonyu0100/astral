import { GalleryObj } from '@/(ouros)/(model)/gallery/main';

export function GalleryCover({ gallery }: { gallery: GalleryObj }) {
  return (
    <img
      className='aspect-square w-full bg-black object-cover'
      src={gallery.thumbnail.src}
    />
  );
}
