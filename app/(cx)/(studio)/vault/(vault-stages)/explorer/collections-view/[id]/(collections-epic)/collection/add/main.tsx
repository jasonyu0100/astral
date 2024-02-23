import { CollectionContainer } from '../container/main';
import { CollectionInfo } from '../info/main';
import { CollectionThumbnail } from '../thumbnail/main';
import { ButtonInputProps } from '@/(components)/types/main';

export function GalleryCollectionAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <CollectionContainer>
        <CollectionThumbnail empty />
        <CollectionInfo empty />
      </CollectionContainer>
    </button>
  );
}
