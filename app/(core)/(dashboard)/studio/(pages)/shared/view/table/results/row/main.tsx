import { StudioSpacesRowCategory } from './category/main';
import { StudioSpacesRowInfo } from './info/main';
import { StudioSpacesRowNumber } from './number/main';
import { StudioSpacesRowDays } from './stat/day/main';
import { StudioSpacesRowIdeas } from './stat/ideas/main';
import { StudioSpacesRowLogs } from './stat/logs/main';
import { StudioSpacesRowPosts } from './stat/posts/main';

export function StudioSpacesRow() {
  return (
    <>
      <div className='grid w-full grid-cols-8 py-[2rem]'>
        <StudioSpacesRowNumber />
        <StudioSpacesRowInfo />
        <StudioSpacesRowCategory />
        <div></div>
        <div className='col-span-2 grid grid-cols-4'>
          <StudioSpacesRowDays />
          <StudioSpacesRowIdeas />
          <StudioSpacesRowLogs />
          <StudioSpacesRowPosts />
        </div>
      </div>
    </>
  );
}
