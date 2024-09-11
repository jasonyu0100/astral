import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import SpacesSpaceHeaderMiddleTitle from './title/main';

export function SpacesSpaceHeaderMiddle() {
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <SpacesSpaceHeaderMiddleTitle />
      <AstralChevronRightIcon />
    </div>
  );
}
