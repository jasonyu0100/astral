import { GalleryObj } from '@/tables/gallery/main';

export function GalleryCover({ gallery }: { gallery: GalleryObj }) {
  return <img className='w-full aspect-square object-contain bg-black' src={gallery.thumbnail.src} />;
}
