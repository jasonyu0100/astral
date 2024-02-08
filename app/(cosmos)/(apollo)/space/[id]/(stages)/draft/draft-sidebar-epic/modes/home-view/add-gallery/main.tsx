import { HomeGalleryAddCover } from './cover/main';
import { HomeGalleryAddInfo } from './info/main';
import { ButtonInputProps } from '@/(common)/types/main';
import { GalleryContainer } from '../gallery/container/main';

export function HomeGalleryAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GalleryContainer>
        <HomeGalleryAddCover />
        <HomeGalleryAddInfo />
      </GalleryContainer>
    </button>
  );
}
