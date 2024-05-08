import { DivInputProps } from '@/(types)/element/main';
import { CollectionThumbnail } from '../../common/thumbnail/main';
import { CollectionInfo } from '../../common/info/main';
import { CollectionContainer } from '../../common/container/main';

export function SidebarCollectionAdd({ ...props }: DivInputProps) {
  return (
    <CollectionContainer className="w-full">
      <div {...props} className="h-full cursor-pointer">
        <CollectionThumbnail empty />
      </div>
      <CollectionInfo empty />
    </CollectionContainer>
  );
}
