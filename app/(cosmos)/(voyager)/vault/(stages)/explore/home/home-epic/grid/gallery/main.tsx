import { GalleryObj } from '@/tables/gallery/main';
import { GalleryCover } from './cover/main';
import { GalleryInfo } from './info/main';
import { LinkInputProps } from '@/(common)/types/main';

interface InputProps extends LinkInputProps {
  gallery: GalleryObj;
}

export function HomeGallery({ gallery, ...props }: InputProps) {
  return (
    <a {...props}>
        <GalleryCover gallery={gallery} />
        <GalleryInfo gallery={gallery} />
    </a>
  );
}
