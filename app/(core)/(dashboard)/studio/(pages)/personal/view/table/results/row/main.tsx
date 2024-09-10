import { StudioSpacesRowIndicator } from './activity/main';
import { StudioSpacesRowCategory } from './category/main';
import { StudioSpacesRowInfo } from './info/main';
import { StudioSpacesRowNumber } from './number/main';
import { StudioSpacesRowDays } from './stat/day/main';
import { StudioSpacesRowIdeas } from './stat/ideas/main';
import { StudioSpacesRowLogs } from './stat/logs/main';
import { StudioSpacesRowSpotlights } from './stat/spotlights/main';

export function StudioSpacesRow() {
  return (
    <div className='grid w-full grid-cols-8 py-[2rem]'>
      <StudioSpacesRowNumber />
      <StudioSpacesRowInfo />
      <StudioSpacesRowCategory />
      <div></div>
      <StudioSpacesRowIndicator />
      <div className='col-span-2 grid grid-cols-4'>
        <StudioSpacesRowDays />
        <StudioSpacesRowIdeas />
        <StudioSpacesRowLogs />
        <StudioSpacesRowSpotlights />
      </div>
    </div>
  );
}
