import { ButtonInputProps } from '@/(components)/types/main';
import { CollectionThumbnail } from '../../collection/thumbnail/main';
import { CollectionInfo } from '../../collection/info/main';
import { CollectionContainer } from '../../collection/container/main';

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
