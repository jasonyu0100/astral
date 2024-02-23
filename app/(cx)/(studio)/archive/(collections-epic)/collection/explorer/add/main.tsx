import { CollectionSample } from '../../common/sample/main';
import { CollectionInfo } from '../../common/info/main';
import { CollectionThumbnail } from '../../common/thumbnail/main';
import { ButtonInputProps } from '@/(components)/types/main';

export function GalleryCollectionAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <CollectionSample>
        <CollectionThumbnail empty />
        <CollectionInfo empty />
      </CollectionSample>
    </button>
  );
}
