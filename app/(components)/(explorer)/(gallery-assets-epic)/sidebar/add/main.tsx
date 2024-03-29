import { SidebarGalleryAddCover } from './cover/main';
import { ButtonInputProps } from '@/(logic)/types/element/main';
import { GalleryPhoto } from '../photo/main';

export function SidebarHomeGalleryAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GalleryPhoto>
        <SidebarGalleryAddCover />
      </GalleryPhoto>
    </button>
  );
}
