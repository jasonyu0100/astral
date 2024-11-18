import { AstralAddIcon } from '@/icons/add/main';
import { ButtonInputProps } from '@/props/main';
import { BrandManageGalleryContainer } from '../container/main';

export function BrandManageGalleryAdd({ ...props }: ButtonInputProps) {
  return (
    <button {...props}>
      <BrandManageGalleryContainer className='w-full'>
        <div className='flex aspect-square h-full w-full items-center justify-center'>
          <AstralAddIcon className='h-1/2 w-1/2' />
        </div>
      </BrandManageGalleryContainer>
    </button>
  );
}
