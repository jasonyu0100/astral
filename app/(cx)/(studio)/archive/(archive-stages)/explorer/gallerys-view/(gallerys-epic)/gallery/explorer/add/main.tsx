import { GalleryContainer } from '../../common/container/main';
import { GalleryExplorerAddCover } from './cover/main';
import { ButtonInputProps } from '@/(components)/types/main';

export function GalleryExplorerAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GalleryContainer>
        <GalleryExplorerAddCover />
      </GalleryContainer>
    </button>
  );
}
