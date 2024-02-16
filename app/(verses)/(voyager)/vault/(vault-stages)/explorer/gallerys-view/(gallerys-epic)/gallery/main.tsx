import { GalleryCover } from './cover/main';
import { GalleryInfo } from './info/main';
import { LinkInputProps } from '@/(common)/types/main';
import { GalleryContainer } from './container/main';
import Link from 'next/link';

export function HomeGallery({ ...props }: LinkInputProps) {
  return (
    <Link {...props}>
      <GalleryContainer>
        <GalleryCover />
        <GalleryInfo />
      </GalleryContainer>
    </Link>
  );
}
