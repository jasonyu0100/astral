import { SidebarGalleryAddCover } from './cover/main';
import { DivInputProps } from '@/(types)/props/main';
import { GalleryContainer } from '../../explorer/container/main';

export function SidebarHomeGalleryAdd({ ...props }: DivInputProps) {
  return (
    <GalleryContainer className='w-full'>
      <div {...props} className='h-full cursor-pointer'>
        <SidebarGalleryAddCover />
      </div>
    </GalleryContainer>
  );
}
