import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import SpaceIdeaHeaderMiddleTitle from './title/main';

export function SpaceIdeaHeaderMiddle() {
  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <SpaceIdeaHeaderMiddleTitle />
      <AstralChevronRightIcon />
    </div>
  );
}
