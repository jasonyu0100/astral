import { ButtonInputProps } from '@/props/main';
import { GalleryContainer } from '../common/container/main';
import { GalleryFinderAddCover } from './cover/main';

export function GalleryFinderAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GalleryContainer className='w-full'>
        <GalleryFinderAddCover />
      </GalleryContainer>
    </button>
  );
}
