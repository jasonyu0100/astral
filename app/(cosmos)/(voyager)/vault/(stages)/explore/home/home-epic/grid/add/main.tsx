import { GalleryContainer } from '../container/main';
import { HomeGalleryAddCover } from './cover/main';
import { HomeGalleryAddInfo } from './info/main';
import { ButtonInputProps } from '@/(common)/types/main';

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
