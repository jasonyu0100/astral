import { CollectionAddCover } from './cover/main';
import { CollectionAddInfo } from './info/main';
import { ButtonInputProps } from '@/(common)/types/main';
import { GalleryCollectionContainer } from '../collection/container/main';

export function GalleryCollectionAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <GalleryCollectionContainer>
        <CollectionAddCover />
        <CollectionAddInfo />
      </GalleryCollectionContainer>
    </button>
  );
}
