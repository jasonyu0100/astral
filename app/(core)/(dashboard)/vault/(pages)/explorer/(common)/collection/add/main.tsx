import { ButtonInputProps } from '@/types/props/main';
import { CollectionContainer } from '../common/container/main';
import { CollectionThumbnail } from '../common/thumbnail/main';

export function GalleryCollectionAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <CollectionContainer className='w-full'>
        <CollectionThumbnail empty />
      </CollectionContainer>
    </button>
  );
}
