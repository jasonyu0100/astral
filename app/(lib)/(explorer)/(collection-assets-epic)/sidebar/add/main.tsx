import { DivInputProps } from '@/(types)/element/main';
import { CollectionThumbnail } from '../../common/thumbnail/main';
import { CollectionInfo } from '../../common/info/main';
import { CollectionSample } from '../../common/sample/main';

export function SidebarCollectionAdd({ ...props }: DivInputProps) {
  return (
    <CollectionSample>
      <div {...props} className="h-full cursor-pointer">
        <CollectionThumbnail empty />
      </div>
      <CollectionInfo empty />
    </CollectionSample>
  );
}
