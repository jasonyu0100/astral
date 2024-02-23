import { SidebarGalleryAddCover } from './cover/main';
import { ButtonInputProps } from '@/(components)/types/main';
import { SidebarGalleryContainer } from '../container/main';

export function SidebarHomeGalleryAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <SidebarGalleryContainer>
        <SidebarGalleryAddCover />
      </SidebarGalleryContainer>
    </button>
  );
}
