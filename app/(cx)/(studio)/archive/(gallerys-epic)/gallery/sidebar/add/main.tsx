import { SidebarGalleryAddCover } from './cover/main';
import { ButtonInputProps } from '@/(types)/main';
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
