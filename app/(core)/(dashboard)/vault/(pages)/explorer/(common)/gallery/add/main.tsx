import { ButtonInputProps } from '@/types/props/main';
import { GalleryContainer } from '../common/container/main';
import { GalleryExplorerAddCover } from './cover/main';

export function GalleryExplorerAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GalleryContainer className='w-full'>
        <GalleryExplorerAddCover />
      </GalleryContainer>
    </button>
  );
}
