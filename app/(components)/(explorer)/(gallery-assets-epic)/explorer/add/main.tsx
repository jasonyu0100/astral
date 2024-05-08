import { GalleryContainer } from '../container/main';
import { GalleryExplorerAddCover } from './cover/main';
import { ButtonInputProps } from '@/(types)/element/main';

export function GalleryExplorerAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GalleryContainer className="w-[300px]">
        <GalleryExplorerAddCover />
      </GalleryContainer>
    </button>
  );
}
