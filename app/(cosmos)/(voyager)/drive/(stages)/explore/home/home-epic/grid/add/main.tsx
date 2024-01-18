import { HomeGalleryAddCover } from './cover/main';
import { HomeGalleryAddInfo } from './info/main';
import { HomeGridContainer } from '../container/main';
import { ButtonInputProps } from '@/(common)/types/main';

export function HomeGalleryAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <HomeGridContainer>
        <HomeGalleryAddCover />
        <HomeGalleryAddInfo />
      </HomeGridContainer>
    </button>
  );
}
