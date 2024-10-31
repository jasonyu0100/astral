import { StudioSharedRowIndicator } from './activity/main';
import { StudioSharedRowCategory } from './category/main';
import { StudioSharedRowInfo } from './info/main';
import { StudioSharedRowNumber } from './number/main';
import { StudioSharedRowDays } from './stat/day/main';
import { StudioSharedRowIdeas } from './stat/ideas/main';
import { StudioSharedRowLogs } from './stat/logs/main';
import { StudioSharedRowPosts } from './stat/posts/main';

export function StudioSharedRow() {
  return (
    <>
      <div className='grid w-full grid-cols-7 py-[2rem]'>
        <StudioSharedRowNumber />
        <StudioSharedRowInfo />
        <StudioSharedRowCategory />
        <StudioSharedRowIndicator />
        <div className='col-span-2 grid grid-cols-4'>
          <StudioSharedRowDays />
          <StudioSharedRowIdeas />
          <StudioSharedRowLogs />
          <StudioSharedRowPosts />
        </div>
      </div>
    </>
  );
}
