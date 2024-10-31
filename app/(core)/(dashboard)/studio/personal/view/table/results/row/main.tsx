import { StudioPersonalRowIndicator } from './activity/main';
import { StudioPersonalRowCategory } from './category/main';
import { StudioPersonalRowInfo } from './info/main';
import { StudioPersonalRowMore } from './more/main';
import { StudioPersonalRowNumber } from './number/main';
import { StudioPersonalRowDays } from './stat/day/main';
import { StudioPersonalRowIdeas } from './stat/ideas/main';
import { StudioPersonalRowLogs } from './stat/logs/main';
import { StudioPersonalRowPosts } from './stat/posts/main';

export function StudioPersonalRow() {
  return (
    <>
      <div className='grid w-full grid-cols-8 py-[2rem]'>
        <StudioPersonalRowNumber />
        <StudioPersonalRowInfo />
        <StudioPersonalRowCategory />
        <StudioPersonalRowIndicator />
        <div className='col-span-2 grid grid-cols-4'>
          <StudioPersonalRowDays />
          <StudioPersonalRowIdeas />
          <StudioPersonalRowLogs />
          <StudioPersonalRowPosts />
        </div>
        <div className='flex items-center justify-center'>
          <StudioPersonalRowMore />
        </div>
      </div>
    </>
  );
}
