import { AstralAddIcon } from '@/icons/add/main';
import { ButtonInputProps } from '@/props/main';
import { BrandManageCollectionContainer } from '../container/main';

export function BrandManageGalleryCollectionAdd({
  ...props
}: ButtonInputProps) {
  return (
    <button {...props}>
      <BrandManageCollectionContainer className='w-full'>
        <div className='flex aspect-square h-full w-full items-center justify-center'>
          <AstralAddIcon className='h-1/2 w-1/2' />
        </div>
      </BrandManageCollectionContainer>
    </button>
  );
}
