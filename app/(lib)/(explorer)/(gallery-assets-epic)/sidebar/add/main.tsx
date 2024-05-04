import { SidebarGalleryAddCover } from './cover/main';
import { ButtonInputProps, DivInputProps } from '@/(types)/element/main';
import { GalleryPhoto } from '../photo/main';

export function SidebarHomeGalleryAdd({ ...props }: DivInputProps) {
  return (
    <GalleryPhoto>
      <div {...props} className="h-full cursor-pointer">
        <SidebarGalleryAddCover />
      </div>
    </GalleryPhoto>
  );
}
