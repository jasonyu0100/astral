import { GalleryPhoto } from '../../common/photo/main';
import { GalleryExplorerAddCover } from './cover/main';
import { ButtonInputProps } from '@/(types)/main';

export function GalleryExplorerAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GalleryPhoto>
        <GalleryExplorerAddCover />
      </GalleryPhoto>
    </button>
  );
}
