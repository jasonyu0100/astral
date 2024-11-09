import { AstralAddIcon } from '@/icons/add/main';
import { ButtonInputProps } from '@/props/main';
import { DriveFinderCollectionContainer } from '../container/main';

export function DriveFinderGalleryCollectionAdd({
  ...props
}: ButtonInputProps) {
  return (
    <button {...props}>
      <DriveFinderCollectionContainer className='w-full'>
        <div className='flex aspect-square h-full w-full items-center justify-center'>
          <AstralAddIcon className='h-1/2 w-1/2' />
        </div>
      </DriveFinderCollectionContainer>
    </button>
  );
}
