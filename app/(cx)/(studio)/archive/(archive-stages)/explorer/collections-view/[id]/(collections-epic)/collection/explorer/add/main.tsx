import { CollectionContainer } from '../../common/container/main';
import { CollectionInfo } from '../../common/info/main';
import { CollectionThumbnail } from '../../common/thumbnail/main';
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
