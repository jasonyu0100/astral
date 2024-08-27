import { StudioSpacesRowIndicator } from './activity/main';
import { StudioSpacesRowCategory } from './category/main';
import { StudioSpacesRowInfo } from './info/main';
import { StudioSpacesRowNumber } from './number/main';
import { StudioSpacesRowLength } from './stat/chapters/main';
import { StudioSpacesRowDays } from './stat/day/main';
import { StudioSpacesRowActivity } from './stat/ideas/main';
import { StudioSpacesRowReviews } from './stat/reviews/main';

export function StudioSpacesRow() {
  return (
    <div className='grid w-full grid-cols-7 py-[2rem]'>
      <StudioSpacesRowNumber />
      <StudioSpacesRowInfo />
      <StudioSpacesRowCategory />
      <div></div>
      <div className='col-span-2 grid grid-cols-4'>
        <StudioSpacesRowDays />
        <StudioSpacesRowLength />
        <StudioSpacesRowActivity />
        <StudioSpacesRowReviews />
      </div>
      <StudioSpacesRowIndicator />
    </div>
  );
}
