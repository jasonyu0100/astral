import { GalleryObj } from '@/tables/gallery/main';
import { GalleryCover } from './cover/main';
import { GalleryInfo } from './info/main';
import { GalleryContainer } from '../container/main';
import { LinkInputProps } from '@/(common)/types/main';

interface InputProps extends LinkInputProps {
  gallery: GalleryObj;
}

export function HomeGallery({ gallery, ...props }: InputProps) {
  return (
    <a {...props}>
      <GalleryContainer>
        <GalleryCover gallery={gallery} />
        <GalleryInfo gallery={gallery} />
      </GalleryContainer>
    </a>
  );
}
