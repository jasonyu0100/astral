import { ButtonInputProps } from '@/(components)/types/main';
import { CollectionThumbnail } from '../../common/thumbnail/main';
import { CollectionInfo } from '../../common/info/main';
import { CollectionContainer } from '../../common/container/main';

export function SidebarCollectionAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <CollectionContainer>
        <CollectionThumbnail empty/>
        <CollectionInfo empty/>
      </CollectionContainer>
    </button>
  );
}
