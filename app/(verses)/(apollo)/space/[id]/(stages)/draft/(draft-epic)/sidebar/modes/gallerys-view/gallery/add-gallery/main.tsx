import { HomeGalleryAddCover } from './cover/main';
import { HomeGalleryAddInfo } from './info/main';
import { ButtonInputProps } from '@/(common)/types/main';
import { SidebarGalleryContainer } from '../container/main';

export function SidebarHomeGalleryAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <SidebarGalleryContainer>
        <HomeGalleryAddCover />
        <HomeGalleryAddInfo />
      </SidebarGalleryContainer>
    </button>
  );
}
