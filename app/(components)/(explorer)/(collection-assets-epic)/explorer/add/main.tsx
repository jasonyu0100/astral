import { CollectionContainer } from '../../common/container/main';
import { CollectionInfo } from '../../common/info/main';
import { CollectionThumbnail } from '../../common/thumbnail/main';
import { ButtonInputProps } from '@/(types)/props/main';

export function GalleryCollectionAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <CollectionContainer className="w-[300px]">
        <CollectionThumbnail empty />
        <CollectionInfo empty />
      </CollectionContainer>
    </button>
  );
}
