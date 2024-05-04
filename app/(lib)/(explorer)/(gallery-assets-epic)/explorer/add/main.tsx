import { GalleryPhoto } from '../photo/main';
import { GalleryExplorerAddCover } from './cover/main';
import { ButtonInputProps } from '@/(types)/element/main';

export function GalleryExplorerAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GalleryPhoto>
        <GalleryExplorerAddCover />
      </GalleryPhoto>
    </button>
  );
}
