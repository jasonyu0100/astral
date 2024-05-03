import { ButtonInputProps } from '@/(lgx)/types/element/main';
import { CollectionThumbnail } from '../../common/thumbnail/main';
import { CollectionInfo } from '../../common/info/main';
import { CollectionSample } from '../../common/sample/main';

export function SidebarCollectionAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <CollectionSample>
        <CollectionThumbnail empty/>
        <CollectionInfo empty/>
      </CollectionSample>
    </button>
  );
}
