import { GalleryObj } from '@/tables/gallery/main';
import { GalleryCover } from './cover/main';
import { GalleryInfo } from './info/main';
import { LinkInputProps } from '@/(common)/types/main';
import { GalleryContainer } from './container/main';
import Link from 'next/link';

interface InputProps extends LinkInputProps {
  gallery: GalleryObj;
}

export function HomeGallery({ gallery, ...props }: InputProps) {
  return (
    <Link {...props}>
      <GalleryContainer>
        <GalleryCover gallery={gallery} />
        <GalleryInfo gallery={gallery} />
      </GalleryContainer>
    </Link>
  );
}
