import { ButtonInputProps } from '@/props/main';
import { CollectionContainer } from '../common/container/main';
import { CollectionDescription } from '../common/description/main';

export function GalleryCollectionAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <CollectionContainer className='w-full'>
        <CollectionDescription empty />
      </CollectionContainer>
    </button>
  );
}
